import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.chatgptexpert.com',
      },
      {
        protocol: 'https',
        hostname: 'chatgptexpert.com',
      },
    ],
  },
};

export default nextConfig;
