/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  eslint: {
    ignoreDuringBuilds: false
  },
  reactStrictMode: true,
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: false
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
