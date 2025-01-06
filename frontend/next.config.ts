const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['localhost', 'api.denverbartenders.com'],
    deviceSizes: [320, 420, 768, 1024, 1200],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')], // Ensure absolute path resolution
    quietDeps: true, // Suppress deprecation warnings from dependencies
    additionalData: `@import "custom-theme.scss";`, // Automatically import shared variables/mixins
  },
};

module.exports = nextConfig;
