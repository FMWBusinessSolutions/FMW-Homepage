// send-indexnow-from-sitemap.js
import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';
import fs from 'fs';
import path from 'path';

const key = 'ed8b9d7a6651431394eb2a285ca2360d'; 

const sitemapPath = path.resolve('dist', 'sitemap.xml');

async function loadUrlsFromSitemap() {
  try {
    const xml = fs.readFileSync(sitemapPath, 'utf8');
    const result = await parseStringPromise(xml);
    const urls = result.urlset.url.map((entry) => entry.loc[0]);
    return urls;
  } catch (error) {
    console.error('❌ Fehler beim Lesen der Sitemap:', error);
    return [];
  }
}

async function submitUrls(urls) {
  if (urls.length === 0) {
    console.log('⚠️ Keine URLs zum Senden gefunden.');
    return;
  }

  const payload = {
    host: 'fmw-solutions.at',
    key: key,
    urlList: urls,
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log(`✅ ${urls.length} URLs erfolgreich an IndexNow gesendet!`);
    } else {
      console.error(`❌ Fehler bei IndexNow:`, await response.text());
    }
  } catch (error) {
    console.error('❌ Netzwerkfehler:', error);
  }
}

async function main() {
  const urls = await loadUrlsFromSitemap();
  await submitUrls(urls);
}

main();
