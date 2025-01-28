import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      's.gravatar.com',
      'cdn.auth0.com',
      'wallpapercave.com',
      'images.squarespace-cdn.com'
    ],
  },
};

export default nextConfig;