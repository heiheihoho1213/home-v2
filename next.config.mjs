/** @type {import('next').NextConfig} */
/**
 * 两种访问方式对应两种构建，不能一份静态产物同时兼容：
 *
 * 1) 自定义域名根路径（如 https://example.com/）
 *    → 不要设置 NEXT_PUBLIC_BASE_PATH（资源为 /_next/...）
 *
 * 2) GitHub Pages 项目子路径（如 https://user.github.io/home-v2/）
 *    → 构建前设置 NEXT_PUBLIC_BASE_PATH=home-v2（资源为 /home-v2/_next/...）
 */
const raw = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/^\/+|\/+$/g, '');
const basePath = raw ? `/${raw}` : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  ...(basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),
  trailingSlash: true
};

export default nextConfig;
