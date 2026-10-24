/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com' }],
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
