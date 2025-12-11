import { Warehouse, Truck, Package, BarChart3, Shield, Headphones } from 'lucide-react';
import gangjiegou01 from '@/assets/产品图片/钢结构防火涂料/饰面型防火涂料.jpg';
import gangjiegou02 from '@/assets/产品图片/钢结构防火涂料/室内非膨胀防火涂料-石膏基1.jpg';
import gangjiegou03 from '@/assets/产品图片/钢结构防火涂料/室内非膨胀型防火涂料-水泥基.jpg';
import gangjiegou04 from '@/assets/产品图片/钢结构防火涂料/室内膨胀型防火涂料1.jpg';
import gangjiegou05 from '@/assets/产品图片/钢结构防火涂料/室外非膨胀型防火涂料1.jpg';
import gangjiegou06 from '@/assets/产品图片/钢结构防火涂料/室外膨胀型钢结构防火涂料1.jpg';
import gangjiegou07 from '@/assets/产品图片/钢结构防火涂料/隧道防火涂料1.jpg';
import gangjiegou08 from '@/assets/产品图片/钢结构防火涂料/特种室外非膨胀型防火涂料1.jpg';
import gangjiegou09 from '@/assets/产品图片/钢结构防火涂料/特种室外膨胀型防火涂料1.jpg';

// 定义接口（也可以提取到单独的 types 文件中）
import type { Product } from '../types';
export const steelStructureProducts: Product[] = [
  {
    slug: 'steelStructure-1',
    title: 'Decorative fire-retardant coatings',
    category: '钢结构防火涂料',
    category_id: 'steel-structure-coatings',
    description: '阻火包是我公司研制的防火配套耐火材料，阻火包形状如小枕头...',
    fullDescription: `
      阻火包是我公司研制的防火配套耐火材料，阻火包形状如小枕头，外层由经过处理的玻璃纤维布制成，内部填充由无机不燃材料和特种添加剂组成的混合物。
      该产品无毒、无味、无腐蚀，耐水、耐油、耐湿热性、耐冻融循环性、膨胀控制在局部范围之内。
      当封堵厚度达到200mm时，耐火极限可达到180min以上。
    `,
    image: gangjiegou01,
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
    slug: 'steelStructure-2',
    title: '室内非膨胀防火涂料-石膏基',
    description: 'Multi-modal logistics network ensuring rapid delivery.',
    fullDescription: 'Detailed description for Fast Transportation...',
    image: gangjiegou02,
    icon: Truck,
  },
  {
    slug: 'steelStructure-3',
    title: '室内非膨胀型防火涂料-水泥基',
    description: 'ISO-certified production with precision engineering.',
    fullDescription: 'Detailed description for Quality Manufacturing...',
    image: gangjiegou03,
    icon: Package,
  },
  {
    slug: 'steelStructure-4',
    title: '室内膨胀型防火涂料',
    description: 'Complete supply chain visibility with advanced tracking.',
    fullDescription: 'Detailed description for Real-Time Analytics...',
    image: gangjiegou04,
    icon: BarChart3,
  },
  {
    slug: 'steelStructure-5',
    title: '室外非膨胀型防火涂料',
    description: 'Industry-leading security protocols protecting assets.',
    fullDescription: 'Detailed description for Secure Operations...',
    image: gangjiegou05,
    icon: Shield,
  },
  {
    slug: 'steelStructure-6',
    title: '室外膨胀型钢结构防火涂料',
    description: 'Dedicated teams available around the clock.',
    fullDescription: 'Detailed description for 24/7 Support...',
    image: gangjiegou06,
    icon: Headphones,
  },
  {
    slug: 'steelStructure-7',
    title: '隧道防火涂料',
    description: 'Dedicated teams available around the clock.',
    fullDescription: 'Detailed description for 24/7 Support...',
    image: gangjiegou07,
    icon: Headphones,
  },
  {
    slug: 'steelStructure-8',
    title: '特种室外非膨胀型防火涂料',
    description: 'Dedicated teams available around the clock.',
    fullDescription: 'Detailed description for 24/7 Support...',
    image: gangjiegou08,
    icon: Headphones,
  },
  {
    slug: 'steelStructure-9',
    title: '特种室外膨胀型防火涂料',
    description: 'Dedicated teams available around the clock.',
    fullDescription: 'Detailed description for 24/7 Support...',
    image: gangjiegou09,
    icon: Headphones,
  }
];