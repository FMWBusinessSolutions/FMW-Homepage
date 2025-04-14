import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream, writeFileSync } from "fs";
import { resolve } from "path";

const routes = [
  { path: "/" },
  { path: "/service" },
  { path: "/service-epu" },
  { path: "/service-kmu" },
  { path: "/contact" },
  { path: "/imprint" },
];

const domain = "https://fmw-solutions.at";
const today = new Date().toISOString().split("T")[0];
const sitemapUrl = `${domain}/sitemap.xml`;

const generate = async () => {
  const sitemapPath = resolve("dist", "sitemap.xml");
  const sitemapStream = new SitemapStream({ hostname: domain });
  const writeStream = createWriteStream(sitemapPath);

  sitemapStream.pipe(writeStream);

  const filteredRoutes = routes.filter(r =>
    typeof r.path === "string" &&
    !r.path.includes(":") 
  );

  filteredRoutes.forEach(route => {
    const url = route.path === "/" ? "/" : route.path.replace(/\/$/, "");
    sitemapStream.write({
      url,
      lastmod: today,
      priority: url === "/" ? 1.0 : 0.7,
    });
  });

  sitemapStream.end();
  await streamToPromise(sitemapStream);
  console.log("✅ Sitemap generated with", filteredRoutes.length, "routes");

  const robotsContent = `User-agent: *
Allow: /
Sitemap: ${sitemapUrl}
`;
  writeFileSync(resolve("dist", "robots.txt"), robotsContent);
  console.log("📝 robots.txt generated");
};

generate();
