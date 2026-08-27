import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["three"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "connection-with-nature.s3.us-east-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
