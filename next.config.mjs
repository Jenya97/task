// next.config.mjs

import path from 'path';
import { fileURLToPath } from 'url';

// Convert `import.meta.url` to the current directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensure this line is present to export static files
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    unoptimized: true, // Helps with image handling in static exports
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  basePath: '/task', // Add '/' before the repository name
  assetPrefix: '/task', // Add '/' before the repository name
};

export default nextConfig;
