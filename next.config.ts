import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["172.16.92.110"],
  output: "export",
  distDir: "dist",
};

export default nextConfig;
