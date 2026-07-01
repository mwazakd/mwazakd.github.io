import siteConfig from '../content/config/site.json';

export type SiteConfig = typeof siteConfig;

export function getSiteConfig(): SiteConfig {
  return siteConfig;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function formatDateShort(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });
}
