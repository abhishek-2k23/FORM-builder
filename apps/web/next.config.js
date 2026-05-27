/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/trpc", "@repo/ui"],
};

export default nextConfig;
