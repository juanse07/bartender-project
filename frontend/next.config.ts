import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true,  // Add this line to bypass Next.js image optimization
    domains: ['localhost',"api.denverbartenders.com"],
    deviceSizes: [320, 420, 768, 1024, 1200],
  },
};

export default nextConfig;
