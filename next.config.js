/** @type {import('next').NextConfig} */
const nextConfig = {
    optimizeFonts: false,
    images: {
        domains: ['blacklabelagency.com'],
      },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
  
      return config;
    },
}

module.exports = nextConfig
