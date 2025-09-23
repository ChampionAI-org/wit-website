/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow development requests from alternate origins (e.g., students.localhost)
  // to access dev assets like /_next/* without warnings or blocks.
  allowedDevOrigins: [
    'http://students.localhost:3000',
    'http://localhost:3000',
    'http://127.0.0.1:3000',
  ],
  // We no longer use config-based rewrites; routing is code-based in src/app/page.tsx
  // Produce a minimal standalone server output for container builds
  output: 'standalone',
};

module.exports = nextConfig;
