/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://technicalsewa.com/",
  generateRobotsTxt: {
  UserAgent:"*",
  Disallow: "/_next/",
  Disallow: "/api/",
  Disallow:" /static/",
  Allow: "/$",
  Allow: "/sitemap.xml",
  Sitemap:"https://technicalsewa.com/sitemap.xml",

  }, // (optional)
  // ...other options
  exclude: [],
  additionalSitemaps: [
    "https://technicalsewa.com/",
    "https://technicalsewa.com/server-sitemap.xml",
  ],
};