import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export default async (req, res) => {
  const temp = await fetch(
    "https://smartcare.com.np/techsewa/masterconfig/publicmasterconfig/getSliderListpop1"
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  const temp2 = await fetch(
    `https://smartcare.com.np/techsewa/publiccontrol/publicmasterconfig/getfeaturedDetails`
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
  // An Array with links
  // SERVICES
  const newLinks = temp.brands.map((items, index) => {
    return {
      url: `/repair/${items?.url_product_name}`,
      changefreq: "monthly",
      priority: 0.8,
    };
  });

  console.log(temp2);
  // PARTS
  const newLinks2 = temp2.map((items, index) => {
    const slug = items?.page_url.replace(/\s+/g, "-");
    return {
      url: `/repair/partpurja/${slug}`,
      changefreq: "monthly",
      priority: 0.8,
    };
  });

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://technicalsewa.com/` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  // const xmlString = await streamToPromise(
  //   Readable.from(newLinks,newLinks2).pipe(stream)
  // ).then((data) => data.toString());
  const xmlString2 = await streamToPromise(
    Readable.from(newLinks).pipe(stream),
    Readable.from(newLinks2).pipe(stream)
  ).then((data) => data.toString());

  // res.end(xmlString);
  res.end(xmlString2);
};
