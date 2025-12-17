import { useTranslations, getLocalizedPath } from '@/i18n/utils';
import { getCategories } from '@/data/products/index'; // 引入分类获取函数
import type { ui } from '@/i18n/ui';
// Site configuration
export const SITE = {
  title: 'FRNH®',
  title_r:'®',
  description: 'Leading provider of optimized logistics and manufacturing solutions with state-of-the-art facilities and industry expertise.',
  url: 'https://yourdomain.com',
  author: 'FRNH Team',
    // 新增配置建议
  email: 'quotes@gmail.com', 
  emailDomain: 'gmail.com' ,
  phone: '+1 (123) 456-7890',
} as const;

// 将常量改为函数，接收当前语言作为参数
export const getNavigation = (lang: keyof typeof ui) => {
  const t = useTranslations(lang);
  const categories = getCategories(lang); // 获取当前语言的分类
  return [
    { name: t('nav.home'), href: getLocalizedPath('/', lang) },
    { name: t('nav.aboutour'), href: getLocalizedPath('/aboutour', lang) },
    { 
      name: t('nav.products'), 
      href: getLocalizedPath('/products', lang),
      // 新增：子菜单数据
      children: categories
        .filter(cat => cat.id !== 'all') // 排除 "全部" 选项，因为它通常就是父级链接
        .map(cat => ({
          name: cat.name,
          href: getLocalizedPath(`/products/${cat.id}`, lang)
        }))
    },
    { name: t('nav.useCases'), href: getLocalizedPath('/usecases', lang) },
    { name: t('nav.facilities'), href: getLocalizedPath('/facilities', lang) },
    // { name: t('nav.rfq'), href: getLocalizedPath('/rfq', lang) },
    
    // { name: t('nav.docs'), href: getLocalizedPath('/documentation', lang) },
  ];
};
export const NAVIGATION = getNavigation('en');

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/yourcompany',
  twitter: 'https://twitter.com/yourcompany',
  facebook: 'https://facebook.com/yourcompany',
} as const;


