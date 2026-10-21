import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? '/designer' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: isProd ? '/designer' : '',
  images: {
    unoptimized: true,
  },
  // 👇 ДОБАВЛЯЕМ ЭТУ СТРОКУ
  trailingSlash: true, 
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;