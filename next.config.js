/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  // async rewrites() {
  //   return [
  //     {
  //       source: '/shlifovka_mramora_granita-landing.html',
  //       destination: '/',
  //     },
  //   ]
  // },
}

module.exports = nextConfig
