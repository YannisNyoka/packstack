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
import { chromium } from 'playwright';
import { preview } from 'vite';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROUTES = ['/', '/salon-booking', '/about', '/portfolio', '/signup', '/privacy', '/terms'];
const PORT = 4173;

async function main() {
  const server = await preview({ preview: { port: PORT, strictPort: true } });
  const browser = await chromium.launch();
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
