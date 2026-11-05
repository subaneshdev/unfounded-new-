import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/ventures",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
