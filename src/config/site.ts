import { useTranslations, getLocalizedPath } from '@/i18n/utils';
import type { ui } from '@/i18n/ui';
// Site configuration
export const SITE = {
  title: 'FRNH®',
  description: 'Leading provider of optimized logistics and manufacturing solutions with state-of-the-art facilities and industry expertise.',
  url: 'https://yourdomain.com',
  author: 'FRNH®',
    // 新增配置建议
  email: 'quotes@gmail.com', 
  emailDomain: 'gmail.com' 
} as const;

// 将常量改为函数，接收当前语言作为参数
export const getNavigation = (lang: keyof typeof ui) => {
  const t = useTranslations(lang);
  
  return [
    { name: t('nav.home'), href: getLocalizedPath('/', lang) },
    { name: t('nav.capabilities'), href: getLocalizedPath('/capabilities', lang) },
    { name: t('nav.useCases'), href: getLocalizedPath('/use-cases', lang) },
    { name: t('nav.facilities'), href: getLocalizedPath('/facilities', lang) },
    { name: t('nav.rfq'), href: getLocalizedPath('/rfq', lang) },
    { name: t('nav.docs'), href: getLocalizedPath('/documentation', lang) },
  ];
};
export const NAVIGATION = getNavigation('en');

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/yourcompany',
  twitter: 'https://twitter.com/yourcompany',
  facebook: 'https://facebook.com/yourcompany',
} as const;

