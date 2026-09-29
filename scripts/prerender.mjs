import { readFile, writeFile } from 'node:fs/promises';
import { render } from '../.render/render.js';
const file = new URL('../dist/index.html', import.meta.url);
const template = await readFile(file, 'utf8');
const html = render();
if (!template.includes('<div id="root"></div>') || !html.includes('Acceptance pending')) throw new Error('Incomplete static export');
await writeFile(file, template.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
console.log('Prerendered complete participant guide.');
