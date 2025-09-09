/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Project Pages: served at https://cMeXoTBoPeH.github.io/MyWeb
  basePath: '/MyWeb',
  assetPrefix: '/MyWeb/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

