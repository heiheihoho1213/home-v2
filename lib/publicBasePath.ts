import siteConfig from '../site.config.json';

function getBasePathSegment(): string {
  return String(siteConfig.basePathSegment ?? '').replace(/^\/+|\/+$/g, '');
}

export function getPublicBasePath(): string {
  const s = getBasePathSegment();
  return s ? `/${s}` : '';
}

export const publicBasePath = getPublicBasePath();
