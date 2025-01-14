/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.IMAGE_URL,
        port: '',
        pathname: '/media/**',
      },
    ],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;