import type { NextConfig } from "next";

// Умная настройка: префикс только для продакшена (GitHub)
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: 'export',
  
  // ВАЖНО: здесь должно быть имя вашего репозитория (designer)
  basePath: isProd ? '/designer' : '',
  assetPrefix: isProd ? '/designer/' : '',
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;