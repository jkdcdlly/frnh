export interface Technology {
  title: string;
  description: string;
  iconGradient: string;
  iconPath: string;
}

// 接收翻译函数 t 作为参数
export const getTechnologies = (t: (key: any) => string): Technology[] => [
  {
    title: t('tech.ai.title'),
    description: t('tech.ai.desc'),
    iconGradient: "from-blue-500 to-blue-600",
    iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  },
  {
    title: t('tech.visibility.title'),
    description: t('tech.visibility.desc'),
    iconGradient: "from-teal-500 to-teal-600",
    iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  },
  {
    title: t('tech.iot.title'),
    description: t('tech.iot.desc'),
    iconGradient: "from-blue-500 to-blue-600",
    iconPath: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
  },
  {
    title: t('tech.security.title'),
    description: t('tech.security.desc'),
    iconGradient: "from-teal-500 to-teal-600",
    iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
  }
];