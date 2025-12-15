// src/data/products/index.ts
import { facilities as zhData } from './zh/facilities';
import { facilities as enData } from './en/facilities';
import { facilities as viData } from './vi/facilities';


const dataMap = {
  zh: {
    'data': zhData,
  },
  en: {
    'data': enData,
  },
  vi: {
    'data': viData,
  }
};

// 获取指定语言的所有数据（扁平化数组）
export function getAllData(lang: string = 'en') {
  const langData = dataMap[lang as keyof typeof dataMap] || dataMap['en'];
  return Object.values(langData).flat();
}