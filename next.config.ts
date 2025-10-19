import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
    images: { unoptimized: true }, // next/image を使うなら推奨
};

export default nextConfig;
