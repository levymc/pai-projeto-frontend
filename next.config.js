/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    URL_API: 'http://localhost:3000',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        // port: '',
        // pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig
