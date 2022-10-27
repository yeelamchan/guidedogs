/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.guidedogs.org.hk"],
  },
}

module.exports = nextConfig