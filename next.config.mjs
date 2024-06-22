/** @type {import('next').NextConfig} */
// import bundleAnalyzer from '@next/bundle-analyzer'

// const withBundleAnalyzer = bundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// })

// const nextConfig = {
//   output: 'export',
//   swcMinify: true,
//   experimental: {
//     forceSwcTransforms: true,
//   },
//   images: {
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     formats: ['image/avif', 'image/webp'],
//     minimumCacheTTL: 60,
//     unoptimized: true,
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: '**',
//       },
//     ],
//   },
// }

// export default nextConfig

import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer({
  output: 'export',
  swcMinify: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // webpack: (config) => {
    //   // silencing warnings until https://github.com/vercel/next.js/issues/33693 is resolved
    //   config.infrastructureLogging = {
    //     level: 'error',
    //   }

    //   config.module.rules.push({
    //     test: /\.(png|jpg|webp|gif|mp4|webm|ogg|swf|ogv|woff2)$/i,
    //     type: 'asset/resource',
    //   })

    //   config.module.rules.push({
    //     test: /\.svg$/,
    //     oneOf: [
    //       {
    //         issuer: /\.[mjt]sx?$/,
    //         resourceQuery: /react/,
    //         use: '@svgr/webpack',
    //       },
    //       {
    //         type: 'asset/resource',
    //       },
    //     ],
    //   })
    //   return config
  },
})
