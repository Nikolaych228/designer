import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: 'export',
  // Локально basePath = '', на GitHub = '/designer-portfolio'
  basePath: isProd ? '/designer-portfolio' : '',
  assetPrefix: isProd ? '/designer-portfolio/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;