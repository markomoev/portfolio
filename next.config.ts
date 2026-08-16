import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint:{
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/:locale(bg|en)/proekti",
        destination: "/:locale",
        permanent: true,
      },
      {
        source: "/:locale(bg|en)/poveritelnost",
        destination: "/:locale/privacy-policy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
