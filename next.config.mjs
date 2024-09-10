// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensure this line is present to export static files
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    unoptimized: true, // Helps with image handling in static exports
  },
   basePath: 'task', // Replace with your GitHub repository name
  assetPrefix: 'task'
};

export default nextConfig;
