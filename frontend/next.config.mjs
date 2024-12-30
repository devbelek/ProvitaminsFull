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
        hostname: "176.124.212.65",
        pathname: "**",
      },
    ],
  },
  // Отключаем генерацию статических страниц
  staticPages: false,
  // Увеличиваем таймаут
  staticPageGenerationTimeout: 180,
  // Добавляем env переменные
  env: {
    NEXT_PUBLIC_API_URL: 'http://176.124.212.65'
  },
};

export default nextConfig;