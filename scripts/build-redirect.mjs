import { writeFile } from 'node:fs/promises';
const destination = 'https://news-without-newsrooms.github.io/';
function page(url) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>News Without Newsrooms</title><link rel="canonical" href="${url}"><meta name="robots" content="noindex"><script>location.replace(${JSON.stringify(url)} + location.hash);</script><meta http-equiv="refresh" content="0;url=${url}"><style>body{font:18px/1.6 system-ui,sans-serif;max-width:640px;margin:15vh auto;padding:24px;color:#152021}h1{font-family:Georgia,serif}a{color:#1548da}</style></head><body><h1>News Without Newsrooms</h1><p>The participant guide has moved to its workshop address.</p><p><a href="${url}">Continue to the participant guide</a></p></body></html>`;
}
await writeFile('dist/index.html', page(destination));
await writeFile('dist/worksheet.html', page(destination + 'worksheet.html'));
await writeFile('dist/404.html', page(destination));
console.log('Built redirect pages. Existing assets remain available.');
