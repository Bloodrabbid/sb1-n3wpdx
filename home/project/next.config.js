/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['static-maps.yandex.ru'],
  },
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig