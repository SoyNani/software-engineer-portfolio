import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/insight/:path*',
        destination: 'http://localhost:3001/insight/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
