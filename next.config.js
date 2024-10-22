/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['static-maps.yandex.ru', 'images.unsplash.com'],
  },
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig