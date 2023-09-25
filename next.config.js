/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/shlifovka_mramora_granita-landing.html',
            destination: '/',
          },
        ]
      },
}

module.exports = nextConfig
