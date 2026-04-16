import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

/** @type {import('next').NextConfig} */
const __dirname = dirname(fileURLToPath(import.meta.url));
const site = JSON.parse(readFileSync(join(__dirname, 'site.config.json'), 'utf8'));
const segment = String(site.basePathSegment ?? '').replace(/^\/+|\/+$/g, '');
const basePath = segment ? `/${segment}` : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  ...(basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),
  trailingSlash: true
};

export default nextConfig;
