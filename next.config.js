/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  webpack: (config) => {
    // Remove version suffixes from imports
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, '.'),
      '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
      '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
      'class-variance-authority@0.7.1': 'class-variance-authority',
    };
    return config;
  },
}

module.exports = nextConfig