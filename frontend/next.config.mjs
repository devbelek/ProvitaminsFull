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
  // Отключаем полностью SSG
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Добавляем это
  generateStaticParams: () => {
    return [];
  },
  generateBuildId: () => 'build'
};

export default nextConfig;