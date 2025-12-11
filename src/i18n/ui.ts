import { en } from './locales/en';
import { zh } from './locales/zh';
import { vi } from './locales/vi';
export const languages = {
  en: 'English',
  zh: '简体中文',
  vi: 'Tiếng Việt',
};

export const defaultLang = 'en';
export const ui = {
  en,
  zh,
  vi,
} as const;