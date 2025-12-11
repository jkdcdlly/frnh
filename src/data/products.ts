import { Warehouse, Truck, Package, BarChart3, Shield, Headphones } from 'lucide-react';
import warehouseImg from '@assets/防火封堵材料/防火封堵材料-L型防火隔板.jpg';
import fanghuo1 from '@assets/防火封堵材料/防火封堵材料-防火涂层板.jpg';
import fanghuo2 from '@assets/防火封堵材料/image2.png';
import fanghuo3 from '@assets/防火封堵材料/image2.png';
import fanghuo4 from '@assets/防火封堵材料/image2.png';
import fanghuo5 from '@assets/防火封堵材料/image2.png';
import fanghuo6 from '@assets/防火封堵材料/防火封堵材料-防火涂层板.jpg';

import fanghuo7 from '@assets/防火封堵材料/防火封堵材料-复合防火金属板.jpg';
import fanghuo8 from '@assets/防火封堵材料/防火封堵材料-柔性有机堵料（可塑型）.jpg';
import fanghuo9 from '@assets/防火封堵材料/防火封堵材料-无机堵料（速固型）.jpg';
import fanghuo10 from '@assets/防火封堵材料/防火封堵材料-无机防火隔板.jpg';
import fanghuo11 from '@assets/防火封堵材料/防火封堵材料-有机防火板.jpg';
import fanghuo12 from '@assets/防火封堵材料/防火封堵材料-阻火包.jpg';
import fanghuo13 from '@assets/防火封堵材料/防火封堵材料-阻火包带.jpg';
import fanghuo14 from '@assets/防火封堵材料/防火封堵材料-阻火模块.jpg';
import fanghuo15 from '@assets/防火封堵材料/防火封堵材料-L型防火隔板.jpg';
import fanghuotest1 from '@assets/防火封堵材料/image1.png';
import fanghuotest2 from '@assets/防火封堵材料/image2.png';
import fanghuotest3 from '@assets/防火封堵材料/image3.png';

import truckImg from '@assets/photo-1601584115197-04ecc0da31d7.jpg';
import packageImg from '@assets/photo-1581091226825-a6a2a5aee158.jpg';
import barChart3Img from '@assets/photo-1551288049-bebda4e38f71.jpg';
import shieldImg from '@assets/photo-1563013544-824ae1b704d3.jpg';
import headphonesImg from '@assets/photo-1486312338219-ce68d2c6f44d.jpg';



// 这里我先创建一个简单的接口和数据。

export interface FireSealingProduct {
  slug: string; // 唯一标识符
  title: string; // 产品名称
  category?: string; // 产品类别
  category_id?: string; // 产品类别 ID
  description: string; // 简短描述
  fullDescription?: string; // 详情页的详细描述
  image: ImageMetadata; // Astro 的图片类型
  icon?: any; // 图标组件
  features?: string[]; // 产品特性列表
  specs?: Record<string, string>; // 技术参数
  application?: string; // 适用范围
  usage?: string[]; // 使用方法
}

// 定义产品数据
export const fireSealingProduct: FireSealingProduct[] = [
  {
    slug: 'fanghuo-1',
    title: '阻火包',
    category: '防火封堵材料',
    category_id: 'fire-sealing-materials',
    description: '阻火包是我公司研制的防火配套耐火材料，阻火包形状如小枕头...',
    fullDescription: `
      阻火包是我公司研制的防火配套耐火材料，阻火包形状如小枕头，外层由经过处理的玻璃纤维布制成，内部填充由无机不燃材料和特种添加剂组成的混合物。
      该产品无毒、无味、无腐蚀，耐水、耐油、耐湿热性、耐冻融循环性、膨胀控制在局部范围之内。
      当封堵厚度达到200mm时，耐火极限可达到180min以上。
    `,
    image: fanghuo1,
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
    title: 'Fast Transportation',
    description: 'Multi-modal logistics network ensuring rapid delivery.',
    fullDescription: 'Detailed description for Fast Transportation...',
    image: fanghuo2,
  },
  {
    slug: 'fanghuo-3',
    title: 'Quality Manufacturing',
    description: 'ISO-certified production with precision engineering.',
    fullDescription: 'Detailed description for Quality Manufacturing...',
    image: fanghuo3,
  },
  {
    slug: 'fanghuo-4',
    title: 'Real-Time Analytics',
    description: 'Complete supply chain visibility with advanced tracking.',
    fullDescription: 'Detailed description for Real-Time Analytics...',
    image: fanghuo4,
  },
  {
    slug: 'fanghuo-5',
    title: 'Secure Operations',
    description: 'Industry-leading security protocols protecting assets.',
    fullDescription: 'Detailed description for Secure Operations...',
    image: fanghuo5,
  },
  {
    slug: 'fanghuo-6',
    title: '24/7 Support',
    description: 'Dedicated teams available around the clock.',
    fullDescription: 'Detailed description for 24/7 Support...',
    image: fanghuo6,
  }
];


// 导入图片 (你需要确保这些路径是正确的，或者根据实际情况调整)
// 注意：在 .ts 文件中直接导入图片可能需要 vite 的支持，或者我们可以只存路径字符串
// 为了简单起见，这里我们假设图片已经在 FeatureShowcase 中导入了，
// 但为了最佳实践，我们应该把图片映射也放在这里，或者在组件里处理。
// 这里我先用字符串占位，或者你可以把 FeatureShowcase 里的导入搬过来。

// 为了避免复杂的图片导入问题，我们先定义数据结构，图片在组件里处理，
// 或者我们把 FeatureShowcase 里的 features 数组 export 出来。
// 但最好的方式是把数据源独立。

// 让我们先复用 FeatureShowcase 里的数据结构，但在真实项目中建议把数据和图片映射分离开。


// 由于图片导入在 .ts 文件中可能需要配置，为了快速实现，
// 我建议我们直接在 FeatureShowcase.tsx 里 export 数据，
// 或者在详情页里重新导入图片。
// 鉴于你现在的结构，我将在详情页里重新定义数据（或者你可以把 FeatureShowcase.tsx 改为 .astro 文件方便传参，但它是 React 组件）。

// 方案：创建一个专门的数据文件 src/data/products.ts，包含所有产品信息。
// 我需要把 FeatureShowcase.tsx 里的图片导入也搬过来。