// @ts-check
import process from 'node:process';

/**
 * @param {string | undefined} base
 */
function normalizeBasePath(base) {
  if (!base || base === '/') {
    return '/';
  }

  const withLeadingSlash = base.startsWith('/') ? base : `/${base}`;

  return withLeadingSlash.endsWith('/')
    ? withLeadingSlash.slice(0, -1)
    : withLeadingSlash;
}

/**
 * @returns {string}
 */
export function getSiteBasePath() {
  return normalizeBasePath(process.env.SITE_BASE);
}

/**
 * @param {string} pathname
 * @returns {string}
 */
export function joinBasePath(pathname) {
  const basePath = getSiteBasePath();
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;

  return basePath === '/' ? normalizedPath : `${basePath}${normalizedPath}`;
}
