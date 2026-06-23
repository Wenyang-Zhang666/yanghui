import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/yanghui',
  assetPrefix: '/yanghui/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
