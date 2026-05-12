import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // @ts-ignore - allowedDevOrigins is required for cross-origin dev access in recent Next.js versions
  allowedDevOrigins: ["172.16.92.110"],
};

export default nextConfig;
