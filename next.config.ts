import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  typescript: {
    // ❌ Ignore build errors (use with caution)
    ignoreBuildErrors: true,
    
  },
  eslint: {
    // 🚫 Ignores ESLint errors/warnings during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
