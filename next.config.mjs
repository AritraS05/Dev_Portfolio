/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allows a production build/serve to use a separate output directory
  // (e.g. NEXT_DIST_DIR=.next-prod) so it never collides with `next dev`.
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
