import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    qualities: [75, 80, 90],
  },
  cacheComponents: true,
  async redirects() {
    return [
      {
        source: "/printhub",
        destination: "/casestudy/printhub",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "/casestudy/youtube",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);

