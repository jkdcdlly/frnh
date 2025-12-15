import { Warehouse, Truck, Package, BarChart3, Shield, Headphones } from 'lucide-react';
import fanghuo01 from '@/assets/产品图片/防火封堵材料/电缆防火涂料1.jpg';
import fanghuo02 from '@/assets/产品图片/防火封堵材料/多组分封堵材料1.jpg';
import fanghuo03 from '@/assets/产品图片/防火封堵材料/防爆胶泥1.jpg';
import fanghuo04 from '@/assets/产品图片/防火封堵材料/防火槽盒.jpg';
import fanghuo05 from '@/assets/产品图片/防火封堵材料/防火密封胶1.jpg';
import fanghuo06 from '@/assets/产品图片/防火封堵材料/防火涂层板1.jpg';
import fanghuo07 from '@/assets/产品图片/防火封堵材料/复合防火金属板.png';
import fanghuo08 from '@/assets/产品图片/防火封堵材料/柔性有机堵料1.jpg';
import fanghuo09 from '@/assets/产品图片/防火封堵材料/未11标题-1.jpg';
import fanghuo10 from '@/assets/产品图片/防火封堵材料/无机堵料.jpg';
import fanghuo11 from '@/assets/产品图片/防火封堵材料/无机防火隔板.png';
import fanghuo12 from '@/assets/产品图片/防火封堵材料/有机防火板1.jpg';
import fanghuo13 from '@/assets/产品图片/防火封堵材料/自粘性防火包带1.jpg';
import fanghuo14 from '@/assets/产品图片/防火封堵材料/阻火模块1.jpg';
import fanghuo15 from '@/assets/产品图片/防火封堵材料/L型防火隔板.png';
// 定义接口（也可以提取到单独的 types 文件中）
import type { Product } from '../types';

export const capabilities = [
  {
    title: 'Warehousing & Storage',
    description: 'State-of-the-art warehousing facilities equipped with advanced inventory management systems, climate control, and 24/7 security.',
    icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>`,
    image: fanghuo14,
    features: [
      'Climate-controlled storage',
      'Automated inventory tracking',
      'Cross-docking capabilities',
      'Hazmat certified facilities',
      'Real-time stock visibility'
    ]
  }
];

export const fireSealingProducts: Product[] = [
  {
    slug: 'fanghuo-1',
    title: 'Fire-retardant coating for cables ',
    category: '防火封堵材料',
    category_id: 'fire-sealing-materials',
    description: '阻火包是我公司研制的防火配套耐火材料，阻火包形状如小枕头...',
    fullDescription: `
      阻火包是我公司研制的防火配套耐火材料，阻火包形状如小枕头，外层由经过处理的玻璃纤维布制成，内部填充由无机不燃材料和特种添加剂组成的混合物。
      该产品无毒、无味、无腐蚀，耐水、耐油、耐湿热性、耐冻融循环性、膨胀控制在局部范围之内。
      当封堵厚度达到200mm时，耐火极限可达到180min以上。
    `,
    image: fanghuo01,
    icon: Warehouse,
    features: [
      '无毒、无味、无腐蚀',
      '耐水、耐油、耐湿热性',
      '耐冻融循环性',
      '膨胀控制在局部范围之内',
      '耐火极限高达180min以上（封堵厚度200mm时）'
    ],
    specs: {
      "耐火极限": "≥180min",
      "封堵厚度": "200mm",
      "特性": "无毒、无味、无腐蚀",
      "适用范围": "电力、电信、邮政、化工、工矿、企业、建筑及地下工程封堵"
    },
    application: "适用于电力、电信、邮政、化工、工矿、企业、建筑当中，电缆、油管、风管、气管、金属管道等贯穿物穿过隔墙或隔层时所形成的空洞的封堵。可阻止火焰蔓延，特别适用于经常更换电缆的重要部位。",
    usage: [
      "在施工时将阻火包平服地嵌入空洞，阻火包堆砌应密实，你后把地封堵入容器内施工说明",
      "封堵厚度及要求参考规范，一般不小于15cm",
      "为了便于施工，用托架及托板将电缆隧道分隔好，清除电缆表面油污及灰尘",
      "施工后应在月内对材料进行检查，如有破损应及时更换，时间不宜超过3个月"
    ]
  },
  {
    slug: 'fanghuo-2',
    title: 'Multi-component sealing materials',
    description: 'Multi-modal logistics network ensuring rapid delivery.',
    fullDescription: 'Detailed description for Fast Transportation...',
    image: fanghuo02,
    icon: Truck,features: [
      '无毒、无味、无腐蚀',
      '耐水、耐油、耐湿热性',
      '耐冻融循环性',
      '膨胀控制在局部范围之内',
      '耐火极限高达180min以上（封堵厚度200mm时）'
    ],
  },
  {
    slug: 'fanghuo-3',
    title: 'Explosion-proof putty',
    description: 'ISO-certified production with precision engineering.',
    fullDescription: 'Detailed description for Quality Manufacturing...',
    image: fanghuo03,
    icon: Package,features: [
      '无毒、无味、无腐蚀',
      '耐水、耐油、耐湿热性',
      '耐冻融循环性',
      '膨胀控制在局部范围之内',
      '耐火极限高达180min以上（封堵厚度200mm时）'
    ],
  },
  {
    slug: 'fanghuo-4',
    title: 'Fire-resistant groove box',
    description: 'Complete supply chain visibility with advanced tracking.',
    fullDescription: 'Detailed description for Real-Time Analytics...',
    image: fanghuo04,
    icon: BarChart3,features: [
      '无毒、无味、无腐蚀',
      '耐水、耐油、耐湿热性',
      '耐冻融循环性',
      '膨胀控制在局部范围之内',
      '耐火极限高达180min以上（封堵厚度200mm时）'
    ],
  },
  {
    slug: 'fanghuo-5',
    title: 'Fire-resistant sealant',
    description: 'Industry-leading security protocols protecting assets.',
    fullDescription: 'Detailed description for Secure Operations...',
    image: fanghuo05,
    icon: Shield,features: [
      '无毒、无味、无腐蚀',
      '耐水、耐油、耐湿热性',
      '耐冻融循环性',
      '膨胀控制在局部范围之内',
      '耐火极限高达180min以上（封堵厚度200mm时）'
    ],
  },
  {
    slug: 'fanghuo-6',
    title: 'Fire-resistant coating board',
    description: 'Dedicated teams available around the clock.',
    fullDescription: 'Detailed description for 24/7 Support...',
    image: fanghuo06,
    icon: Headphones,features: [
      '无毒、无味、无腐蚀',
      '耐水、耐油、耐湿热性',
      '耐冻融循环性',
      '膨胀控制在局部范围之内',
      '耐火极限高达180min以上（封堵厚度200mm时）'
    ],
  },
  {
    slug: 'fanghuo-6',
    title: 'Composite fire-resistant metal board',
    description: 'Dedicated teams available around the clock.',
    fullDescription: 'Detailed description for 24/7 Support...',
    image: fanghuo07,
    icon: Headphones,
  },
  {
    slug: 'fanghuo-6',
    title: 'Flexible organic sealing material (plastic type)',
    description: 'Dedicated teams available around the clock.',
    fullDescription: 'Detailed description for 24/7 Support...',
    image: fanghuo08,
    icon: Headphones,features: [
      '无毒、无味、无腐蚀',
      '耐水、耐油、耐湿热性',
      '耐冻融循环性',
      '膨胀控制在局部范围之内',
      '耐火极限高达180min以上（封堵厚度200mm时）'
    ],
  },
  {
    slug: 'fanghuo-6',
    title: 'Inorganic sealing material (quick solidification type)',
    description: 'Dedicated teams available around the clock.',
    fullDescription: 'Detailed description for 24/7 Support...',
    image: fanghuo09,
    icon: Headphones,features: [
      '无毒、无味、无腐蚀',
      '耐水、耐油、耐湿热性',
      '耐冻融循环性',
      '膨胀控制在局部范围之内',
      '耐火极限高达180min以上（封堵厚度200mm时）'
    ],
  },
  {
    slug: 'fanghuo-6',
    title: 'Inorganic sealing material',
    description: 'Dedicated teams available around the clock.',
    fullDescription: 'Detailed description for 24/7 Support...',
    image: fanghuo10,
    icon: Headphones,features: [
      '无毒、无味、无腐蚀',
      '耐水、耐油、耐湿热性',
      '耐冻融循环性',
      '膨胀控制在局部范围之内',
      '耐火极限高达180min以上（封堵厚度200mm时）'
    ],
  },
  {
    slug: 'fanghuo-6',
    title: 'Inorganic fire-resistant board',
    description: 'Dedicated teams available around the clock.',
    fullDescription: 'Detailed description for 24/7 Support...',
    image: fanghuo11,
    icon: Headphones,features: [
      '无毒、无味、无腐蚀',
      '耐水、耐油、耐湿热性',
      '耐冻融循环性',
      '膨胀控制在局部范围之内',
      '耐火极限高达180min以上（封堵厚度200mm时）'
    ],
  },
  {
    slug: 'fanghuo-6',
    title: 'Organic fire-resistant board',
    description: 'Dedicated teams available around the clock.',
    fullDescription: 'Detailed description for 24/7 Support...',
    image: fanghuo12,
    icon: Headphones,features: [
      '无毒、无味、无腐蚀',
      '耐水、耐油、耐湿热性',
      '耐冻融循环性',
      '膨胀控制在局部范围之内',
      '耐火极限高达180min以上（封堵厚度200mm时）'
    ],
  },
  {
    slug: 'fanghuo-6',
    title: 'Self-adhesive fire-resistant tape',
    description: 'Dedicated teams available around the clock.',
    fullDescription: 'Detailed description for 24/7 Support...',
    image: fanghuo13,
    icon: Headphones,features: [
      '无毒、无味、无腐蚀',
      '耐水、耐油、耐湿热性',
      '耐冻融循环性',
      '膨胀控制在局部范围之内',
      '耐火极限高达180min以上（封堵厚度200mm时）'
    ],
  },
  {
    slug: 'fanghuo-6',
    title: 'Fire-resistant module',
    description: 'Dedicated teams available around the clock.',
    fullDescription: 'Detailed description for 24/7 Support...',
    image: fanghuo14,
    icon: Headphones,features: [
      '无毒、无味、无腐蚀',
      '耐水、耐油、耐湿热性',
      '耐冻融循环性',
      '膨胀控制在局部范围之内',
      '耐火极限高达180min以上（封堵厚度200mm时）'
    ],
  },
  {
    slug: 'fanghuo-6',
    title: 'L-shaped fire-resistant board',
    description: 'Dedicated teams available around the clock.',
    fullDescription: 'Detailed description for 24/7 Support...',
    image: fanghuo15,
    icon: Headphones,features: [
      '无毒、无味、无腐蚀',
      '耐水、耐油、耐湿热性',
      '耐冻融循环性',
      '膨胀控制在局部范围之内',
      '耐火极限高达180min以上（封堵厚度200mm时）'
    ],
  }
];


