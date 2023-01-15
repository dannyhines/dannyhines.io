const CSP = [
  "default-src 'self';",
  "script-src 'report-sample' 'self' 'unsafe-eval' 'unsafe-inline' https://dannyhines-io-analytics.vercel.app/umami.js;",
  "style-src 'report-sample' 'self' 'unsafe-inline';",
  "object-src 'none';",
  "base-uri 'self';",
  "connect-src 'self' https://dannyhines-io-analytics.vercel.app;",
  "font-src 'self';",
  "frame-src 'self' https://player.cloudinary.com https://www.youtube.com;",
  "img-src 'self' data: https://res.cloudinary.com;",
  "manifest-src 'self';",
  "media-src 'self';",
  "worker-src 'none';",
];

const securityHeaders = [
  {
    key: 'Cache-Control',
    value: 'public, max-age=31536000, immutable',
  },
  {
    key: 'access-control-allow-origin',
    value:
      'dannyhines.io dannyhines-io-analytics.vercel.app res.cloudinary.com play.google.com',
  },
  {
    key: 'Content-Security-Policy',
    value: CSP.join(' '),
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
    value: 'geolocation=(self "https://dannyhines.io")',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
];

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
        // Apply headers to all routes
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};
