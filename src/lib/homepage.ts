export const HOMEPAGE_DESKTOP_LIMIT = 4;
export const HOMEPAGE_MOBILE_LIMIT = 2;
export const HOMEPAGE_NEWS_LIMIT = 4;

export const projectStatusOrder = { 'in-progress': 0, idea: 1, complete: 2 } as const;

export function homeItemVisibilityClass(index: number): string {
  return index >= HOMEPAGE_MOBILE_LIMIT ? 'hidden md:block' : '';
}

export const homepageCardGridClass =
  'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto';
