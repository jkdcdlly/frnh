// src/data/products/index.ts
import { useCases as zhUseCases } from './zh/useCases';
import { useCases as enUseCases } from './en/useCases';
import { useCases as viUseCases } from './vi/useCases';


const useCasesMap = {
  zh: {
    'use-cases': zhUseCases,
  },
  en: {
    'use-cases': enUseCases,
  },
  vi: {
    'use-cases': viUseCases,
  }
};

// 获取指定语言的所有数据（扁平化数组）
export function getAllData(lang: string = 'en') {
  const langData = useCasesMap[lang as keyof typeof useCasesMap] || useCasesMap['en'];
  return Object.values(langData).flat();
}