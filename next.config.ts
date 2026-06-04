import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Served at the root of the custom domain (ozwati.com), so no basePath/assetPrefix.
  // (A /zoro prefix would only be correct for the zoro421.github.io/zoro project URL.)
  devIndicators: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cqijencsaneewmcujzza.supabase.co' },
    ],
  },
};

export default nextConfig;
