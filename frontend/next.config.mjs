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
  // Отключаем предварительный рендеринг для всех страниц
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_URL: 'http://176.124.212.65',
    NEXT_PUBLIC_API_URL: 'http://176.124.212.65'
  }
};

export default nextConfig;