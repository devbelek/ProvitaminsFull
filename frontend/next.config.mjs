/** @type {import('next').NextConfig} */

const imageUrl = process.env.IMAGE_URL;

const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: imageUrl,
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;