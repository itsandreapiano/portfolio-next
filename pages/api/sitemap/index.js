import dateFormat from "../../../services/dateFormat";

export default async function handler(req, res) {
  const date = dateFormat.dateStringEn;

  let changefreq = "weekly";

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

  let xmlContent = [];

  xmlContent.push("<?xml version='1.0' encoding='UTF-8'?>");
  xmlContent.push(
    "<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>"
  );

  //HOME PAGE
  xmlContent.push("  <url>");
  xmlContent.push("    <loc>https://www.andreapiano.dev</loc>");
  xmlContent.push("    <lastmod>" + date + "</lastmod>");
  xmlContent.push("    <changefreq>" + changefreq + "</changefreq>");
  xmlContent.push("    <priority>1</priority>");
  xmlContent.push("  </url>");

  xmlContent.push("</urlset>");

  //res.set('Content-Type', 'application/xml')
  res.send(xmlContent.join("\n"));
}
