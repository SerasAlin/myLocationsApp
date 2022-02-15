export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const SWR_LOCATIONS = {
  locations: '/locations',
};

export const SWR_CATEGORIES = {
  categories: '/categories',
};

export enum CardTypes {
  LOCATION = 'location',
  CATEGORY = 'category',
}
