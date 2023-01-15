/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,

  images: {
    domains: ['res.cloudinary.com'],
  },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });
    return config;
  },

  async headers() {
    return [
      {
        // Applies headers to all routes
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

const ContentSecurityPolicy = [
  "default-src 'self';",
  "script-src 'self' 'unsafe-eval' 'unsafe-inline' dannyhines-io-analytics.vercel.app *.youtube.com;",
  "style-src 'self' 'unsafe-inline';",
  "object-src 'none';",
  "base-uri 'self';",
  "connect-src 'self' https://dannyhines-io-analytics.vercel.app;",
  "font-src 'self';",
  "frame-src 'self' https://player.cloudinary.com https://www.youtube.com https://giphy.com https://codesandbox.io;",
  "img-src 'self' data: https://res.cloudinary.com;",
  "manifest-src 'self';",
  "media-src 'self';",
  "worker-src 'none';",
];

const securityHeaders = [
  {
    key: 'access-control-allow-origin',
    value:
      'dannyhines.io dannyhines-io-analytics.vercel.app res.cloudinary.com play.google.com',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.join(' '),
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'same-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
];
