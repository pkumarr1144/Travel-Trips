/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false, // Netlify plugin handles optimization
  },
}

module.exports = nextConfig
