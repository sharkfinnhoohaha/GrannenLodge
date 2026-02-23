/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: {
      root: '.',
    },
  },
  transpilePackages: ["tinacms"],
};

export default nextConfig;
