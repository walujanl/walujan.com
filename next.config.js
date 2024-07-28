/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.walujan.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
