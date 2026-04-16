/** 与 next.config.mjs 中 basePath 一致；构建时由 NEXT_PUBLIC_BASE_PATH 注入 */
export function getPublicBasePath(): string {
  const raw = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/^\/+|\/+$/g, '');
  return raw ? `/${raw}` : '';
}

export const publicBasePath = getPublicBasePath();
