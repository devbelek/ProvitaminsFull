/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: [process.env.IMAGE_URL],
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.IMAGE_URL,
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;