// src/data/products/index.ts
import { fireSealingProducts as zhFireSealing } from './zh/fire-sealing';
import { fireSealingProducts as enFireSealing } from './en/fire-sealing';
import { fireSealingProducts as viFireSealing } from './vi/fire-sealing';

const productsMap = {
  zh: {
    fireSealing: zhFireSealing,
    // steelStructure: zhSteelStructure
  },
  en: {
    fireSealing: enFireSealing,
  },
  vi: {
    fireSealing: viFireSealing,
  }
};

export function getProducts(lang: string = 'en') {
  // 如果找不到对应语言，回退到英文或中文
  return productsMap[lang as keyof typeof productsMap] || productsMap['en'];
}