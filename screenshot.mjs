import puppeteer from 'puppeteer';
import { existsSync, readdirSync } from 'fs';
import { join } from 'path';

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] ? `-${process.argv[3]}` : '';
const outDir = './temporary screenshots';

function nextIndex() {
  if (!existsSync(outDir)) return 1;
  const files = readdirSync(outDir).filter(f => /^screenshot-\d+/.test(f));
  if (files.length === 0) return 1;
  const nums = files.map(f => parseInt(f.match(/^screenshot-(\d+)/)[1]));
  return Math.max(...nums) + 1;
}

const index = nextIndex();
const filename = `screenshot-${index}${label}.png`;
const filepath = join(outDir, filename);

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
await page.screenshot({ path: filepath, fullPage: false });
await browser.close();

console.log(`Saved: ${filepath}`);
