// Next.js configuration for GitHub Pages static export
// - output: 'export' to generate static HTML in ./out
// - When running on GitHub Actions, set basePath/assetPrefix so assets resolve under /<repo>
// - images.unoptimized is required for static export when using next/image
// - trailingSlash helps avoid 404s on GitHub Pages

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const repo = 'site_for_melissa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  // Only set these when building on GitHub Actions so local dev remains unchanged
  ...(isGitHubActions
    ? {
        basePath: `/${repo}`,
        assetPrefix: `https://amiridon.github.io/${repo}`,
      }
    : {}),
};

export default nextConfig;
