import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  images: { unoptimized: true },

  
   eslint: {
    ignoreDuringBuilds: true,
  },


  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'i.imgur.com',
  //       port: '',
  //       pathname: '/**',
  //     },
  //   ],
  // },
};

export default nextConfig;