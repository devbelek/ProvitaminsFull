/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.IMAGE_URL?.replace("/", "") || "176.124.212.65",
        pathname: "**",
      },
    ],
  },
  env: {
    DOMAIN_NAME: "176.124.212.65",
    BASE_URL: "http://176.124.212.65/api/v1",
    NEXT_PUBLIC_BASE_URL: "http://176.124.212.65/api/v1",
    IMAGE_URL: "176.124.212.65"
  }
};

export default nextConfig;