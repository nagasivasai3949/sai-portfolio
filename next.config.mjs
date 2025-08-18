/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
  },
  basePath: "/sai-portfolio",  // 👈 repo name
  assetPrefix: "/sai-portfolio/"
};

export default nextConfig;
