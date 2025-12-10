/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: {
    buildActivity: false,
  },
  allowedDevOrigins: [
    '69cc3899-0e0c-4a8f-96e8-f47edd6a71e6-00-2yhwh9ehwvc80.worf.replit.dev',
    'localhost',
    '127.0.0.1'
  ],
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ]
  },
}

export default nextConfig
