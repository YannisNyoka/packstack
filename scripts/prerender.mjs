// Runs after `vite build`. Visits every known static route in a real
// headless browser and overwrites that route's dist/ output with the fully
// rendered HTML (title, meta tags, JSON-LD from useSEO - all of it set via
// useEffect, invisible to any crawler that doesn't execute JS). This is
// what makes GPTBot/ClaudeBot/PerplexityBot/CCBot see actual page content
// instead of an empty <div id="root">, since Googlebot aside, none of them
// run the JS bundle. vercel.json's existing catch-all SPA rewrite still
// handles any client-side-only sub-state for real browsers.
//
// Only correct as long as every one of these routes is fully static (no
// per-visitor or runtime-dynamic content) - re-check this list if a route
// ever gains that.
import { chromium } from 'playwright-core';
import { preview } from 'vite';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROUTES = ['/', '/salon-booking', '/about', '/portfolio', '/signup', '/app', '/privacy', '/terms'];
const PORT = 4173;

/**
 * Vercel's build image is missing the system shared libraries (libnspr4.so
 * etc.) a normal desktop-Linux Chromium needs - playwright-core's own
 * bundled-browser download launches fine locally but crashes there
 * ("error while loading shared libraries"), which is exactly what broke
 * the first real deploy of this script. @sparticuz/chromium ships a
 * statically-linked build made for exactly this (serverless/restricted
 * Linux build containers) - used only when actually running on Vercel
 * (VERCEL is set automatically during their builds); locally this still
 * launches whatever Chromium is already cached for this machine's own
 * Playwright install, same as every other Playwright-based script in this
 * session.
 */
async function getLaunchOptions() {
  if (process.env.VERCEL) {
    const { default: sparticuzChromium } = await import('@sparticuz/chromium');
    return {
      args: sparticuzChromium.args,
      executablePath: await sparticuzChromium.executablePath(),
      headless: true,
    };
  }
  return { headless: true };
}

async function main() {
  const server = await preview({ preview: { port: PORT, strictPort: true } });
  const browser = await chromium.launch(await getLaunchOptions());
  const page = await browser.newPage();

  try {
    for (const route of ROUTES) {
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle', timeout: 30_000 });
      await page.waitForTimeout(250); // let useSEO's title/meta/JSON-LD effect commit
      const html = await page.content();
      const outDir = route === '/' ? 'dist' : path.join('dist', route.slice(1));
      await mkdir(outDir, { recursive: true });
      await writeFile(path.join(outDir, 'index.html'), html);
      console.log(`prerendered ${route} -> ${outDir}/index.html`);
    }
  } finally {
    await browser.close();
    await new Promise((resolve, reject) => server.httpServer.close((err) => (err ? reject(err) : resolve())));
  }
}

main().catch((err) => {
  console.error('[prerender] failed:', err);
  process.exit(1);
});
