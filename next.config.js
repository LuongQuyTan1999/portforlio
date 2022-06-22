/* eslint-disable @typescript-eslint/no-var-requires */

const { i18n } = require('./next-i18next.config');

const nextConfig = {
  /**
   * @type {import('next').NextConfig}
   */
  reactStrictMode: false,
  i18n,
  extends: ['plugin:@next/next/recommended'],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.tsx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            babel: true,
            titleProp: true,
          },
        },
        {
          loader: 'url-loader',
          options: {
            name: 'images/[name].[hash:8].[ext]',
            limit: 500000,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
