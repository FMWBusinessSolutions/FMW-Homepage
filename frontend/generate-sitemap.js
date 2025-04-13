import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream, writeFileSync } from "fs";
import { resolve } from "path";
import { globby } from "globby";

// Base config
const domain = "https://fmw-solutions.at";
const today = new Date().toISOString().split("T")[0];
const sitemapUrl = `${domain}/sitemap.xml`;

// Mapping from internal view filenames to public URLs
const routeMap = {
  "/homeview": "/",
  "/contactview": "/contact",
  "/imprintview": "/impressum",
  "/serviceepu": "/service-epu",
  "/servicekmu": "/service-kmu",
};

// Helper: convert file path to route
function pathToRoute(file) {
  const raw = file
    .replace(/^src\/views/, "")
    .replace(/\.vue$/, "")
    .replace(/\/index$/, "/")
    .replace(/\/$/, "")
    .toLowerCase();

  return routeMap[raw] || raw;
}

// Main generator
const generate = async () => {
  const files = await globby("src/views/**/*.vue");

  const routes = files.map((file) => ({
    url: pathToRoute(file),
    priority: file.includes("Home") ? 1.0 : 0.7,
    lastmod: today,
  }));

  const sitemapPath = resolve("dist", "sitemap.xml");
  const sitemapStream = new SitemapStream({ hostname: domain });
  const writeStream = createWriteStream(sitemapPath);

  sitemapStream.pipe(writeStream);
  routes.forEach((route) => sitemapStream.write(route));
  sitemapStream.end();
  await streamToPromise(sitemapStream);

  console.log("✅ Sitemap generated with", routes.length, "routes");

  // robots.txt
  const robotsContent = `User-agent: *
Allow: /
Sitemap: ${sitemapUrl}
`;
  writeFileSync(resolve("dist", "robots.txt"), robotsContent);
  console.log("📝 robots.txt generated");
};

generate();
