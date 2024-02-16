/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["qresto-components"],
    env: {
        BACKEND_URL: process.env.BACKEND_URL,
    }
}

module.exports = nextConfig
