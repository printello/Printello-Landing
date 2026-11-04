import type { NextConfig } from "next";

const config: NextConfig = {
  output: "export", // static site: Cloudflare Pages serves the ./out folder
  images: { unoptimized: true },
};
export default config;
