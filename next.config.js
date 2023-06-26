/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // GOOGLE_MAPS_API_KEY: "AIzaSyC2iS_ad-zpImBQFaY3XeZVdzxNLU4nz8s",
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     require("./scripts/sitemap-generator");
  //   }
  //   return config;
  // },
  eslint:{
    ignoreDuringBuilds:true
  },
  images: {
    domains: ["https://technicalsewa.com"],
    unoptimized: true,
  },
};
