import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Жестко прописываем путь, без всяких условий
  basePath: '/designer',
  assetPrefix: '/designer/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, 
};

export default nextConfig;