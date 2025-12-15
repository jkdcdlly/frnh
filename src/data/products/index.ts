// src/data/products/index.ts
import { fireSealingProducts as zhFireSealing } from './zh/fire-sealing';
import { fireSealingProducts as enFireSealing } from './en/fire-sealing';
import { fireSealingProducts as viFireSealing } from './vi/fire-sealing';

import { steelStructureProducts as zhSteelStructure } from './zh/steel-structure';
import { steelStructureProducts as enSteelStructure } from './en/steel-structure';
import { steelStructureProducts as viSteelStructure } from './vi/steel-structure';


// 定义分类元数据
export const categories = [
  // { id: 'all', name: { zh: '全部产品', en: 'All Products', vi: 'Tất cả sản phẩm' } },
  { id: 'fire-sealing', name: { zh: '防火封堵材料', en: 'Fire Sealing Materials', vi: 'Vật liệu chống cháy' } },
  { id: 'steel-structure', name: { zh: '钢结构防火涂料', en: 'Steel Structure Fire Coating', vi: 'Sơn chống cháy kết cấu thép' } },
];

const productsMap = {
  zh: {
    'fire-sealing': zhFireSealing,
    'steel-structure': zhSteelStructure, // 暂时为空，等你有了数据再填
  },
  en: {
    'fire-sealing': enFireSealing,
    'steel-structure': enSteelStructure,
  },
  vi: {
    'fire-sealing': viFireSealing,
    'steel-structure': viSteelStructure,
  }
};

// 获取指定语言的所有产品（扁平化数组）
export function getAllProducts(lang: string = 'en') {
  const langData = productsMap[lang as keyof typeof productsMap] || productsMap['en'];
  return Object.values(langData).flat();
}

// 根据分类获取产品
export function getProductsByCategory(category: string, lang: string = 'en') {
  if (category === 'all' || !category) {
    return getAllProducts(lang);
  }
  const langData = productsMap[lang as keyof typeof productsMap] || productsMap['en'];
  return langData[category as keyof typeof langData] || [];
}

// 获取分类列表（带翻译）
export function getCategories(lang: string = 'en') {
  return categories.map(c => ({
    id: c.id,
    name: c.name[lang as keyof typeof c.name] || c.name['en']
  }));
}