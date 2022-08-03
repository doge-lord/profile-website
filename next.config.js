const cp = require("child_process");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { webpack, buildId }) {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.BUILD_ID": JSON.stringify(buildId),
      })
    );

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: "@svgr/webpack", options: { typescript: true } }],
    });

    return config;
  },
  generateBuildId() {
    try {
      return `${
        cp.execSync("git tag --points-at HEAD").toString().trim() ||
        cp.execSync("git rev-parse --short HEAD").toString().trim()
      }-${Date.now()}`;
    } catch (error) {
      return "development";
    }
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
