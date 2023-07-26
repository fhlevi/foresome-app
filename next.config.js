const nextRuntimeDotenv = require('next-runtime-dotenv');
const env = require('./env');

/** @type {import('next').NextConfig} */
const nextConfig = nextRuntimeDotenv({
  reactStrictMode: true,
  public: env.public,
  server: env.server,
})

module.exports = nextConfig
