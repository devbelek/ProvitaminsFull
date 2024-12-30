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
        hostname: process.env.IMAGE_URL,
        pathname: "**",
      },
    ],
  },
  // Добавляем эти настройки
  env: {
    NEXT_PUBLIC_API_URL: 'http://176.124.212.65/api'
  },
  // Отключаем статическую генерацию
  staticPageGenerationTimeout: 0,
  distDir: '.next'
};

export default nextConfig;