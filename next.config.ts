import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/ventures",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/manifesto",
        destination: "/",
        permanent: true,
      },
      {
        source: "/unfounded-manifesto",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
