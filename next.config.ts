import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/yanghui',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
