/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/web_test',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
