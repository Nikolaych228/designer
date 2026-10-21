import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Включает статический экспорт
  basePath: '/designer-portfolio', // Например, '/designer-portfolio'
  assetPrefix: '/designer-portfolio', // Должен совпадать с basePath
  images: {
    unoptimized: true, // Отключает оптимизацию изображений, так как GitHub Pages не поддерживает серверные функции
  },
};

export default nextConfig;
