/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "icons.veryicon.com" },
      { hostname: "images.pexels.com" },
    ],
  },
};

module.exports = nextConfig;
