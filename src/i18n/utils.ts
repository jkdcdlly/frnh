import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  // 从 URL 路径中提取语言代码，假设路径格式为 /en/..., /zh/...
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}
// 自定义 Hook：根据语言获取翻译函数, lang 参数指定当前语言,返回一个 t 函数用于翻译
// lang 必须是 ui 对象中的一个键
export function useTranslations(lang: keyof typeof ui) {
  // 返回翻译函数 t,接受一个参数 key，返回对应的翻译文本
  // 返回值示例：ui['zh']['nav.home'] => '首页'
  
  return function t(key: keyof typeof ui[typeof defaultLang]|string) {
    // const value = ui[lang][key] || ui[defaultLang][key]
    return  (ui[lang] as any)[key] || getNestedValue(ui[lang], key) || getNestedValue(ui[defaultLang], key) || key;
    
  }
}

function getNestedValue<T>(obj: T, path: string): any {
    console.log('getNestedValue Debug:', { path});
    // 检查输入参数的有效性
    if (!obj || typeof obj !== 'object' || !path || typeof path !== 'string') {
        return undefined;
    }
    
    // 分割路径为各个部分
    const keys = path.split('.');
    let current: any = obj;
    
    // 逐级访问嵌套属性
    for (const key of keys) {
        // 检查当前级别是否存在且为对象
        if (current === null || current === undefined || typeof current !== 'object') {
            return undefined;
        }
        
        // 访问下一级属性
        current = current[key];
        
        // 如果已经是undefined，提前返回
        if (current === undefined) {
            return undefined;
        }
    }
    
    return current;
}

// 辅助函数：生成带语言前缀的路径
export function getLocalizedPath(path: string, lang: string) {
  if (lang === defaultLang) return path;
  // console.log('getLocalizedPath Debug111:', lang, path);
  // console.log('getLocalizedPath Debug222:', `/${lang}${path.startsWith('/') ? path : '/' + path}`);
  return `/${lang}${path.startsWith('/') ? path : '/' + path}`;
}

// 新增：通用的 getStaticPaths 辅助函数
export function getStaticPaths() {
  // 过滤掉默认语言（因为默认语言通常由根目录的页面处理，如 src/pages/index.astro）
  // 如果你的 [lang] 路由也需要处理默认语言（比如 /en/about），则去掉 filter
  const languages = Object.keys(ui).filter(lang => lang !== defaultLang);
  
  return languages.map(lang => ({
    params: { lang },
    props: { lang },
  }));
}
