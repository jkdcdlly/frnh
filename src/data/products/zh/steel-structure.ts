import { Warehouse, Truck, Package, BarChart3, Shield, Headphones } from 'lucide-react';
import type { Product } from '../types';
import colorScheme1 from '@/assets/产品图片/钢结构防火涂料/1防火涂料超薄型.jpg'
import colorScheme2 from '@/assets/产品图片/钢结构防火涂料/2防火涂料薄型.jpg'
import colorScheme3 from '@/assets/产品图片/钢结构防火涂料/3防火涂料厚型.jpg'


const allImages = import.meta.glob<{ default: ImageMetadata }>('/src/assets/产品图片/钢结构防火涂料/**/*.{jpeg,jpg,png}', { eager: true });

// 2. 辅助函数：通过文件名（或部分路径）获取图片对象
function getImg(filename: string) {
  // 在所有路径中查找以 filename 结尾的路径
  const foundPath = Object.keys(allImages).find(path => path.endsWith(filename));

  if (!foundPath) {
    console.error(`Image not found: ${filename}`);
    // 如果找不到图片，可以返回 undefined 或者一个默认占位图
    return undefined;
  }

  return allImages[foundPath].default;
}




const steelStructureProductsMap: Product[] = [
  {
    slug: 'steelStructure-1',
    title: '室内膨胀型钢结构防火涂料',
    category: 'steel-structure',
    fullDescription: '室内膨胀型钢结构防火涂料 遇火时形成均匀而致密的蜂窝状或海绵状的炭质泡沫层，对可燃性基材有良好的保护作用。该种涂料耐水、有较好的附着力、良好的成膜性能，硬度大、耐洗刷性。',
    image: getImg('1室内膨胀型钢结构防火涂料/室内膨胀型钢结构防火涂料水基型.png')!,
    images: [
      getImg('1室内膨胀型钢结构防火涂料/室内膨胀型钢结构防火涂料水基型.png')!,
      getImg('1室内膨胀型钢结构防火涂料/室内膨胀型钢结构防火涂料23.jpg')!,
      getImg('1室内膨胀型钢结构防火涂料/室内膨胀型钢结构防火涂料25.jpg')!,
      getImg('1室内膨胀型钢结构防火涂料/室内膨胀型钢结构防火涂料溶剂型.png')!,
      getImg('1室内膨胀型钢结构防火涂料/室内膨胀型钢结构防火涂料待发走.jpg')!
    ],
    icon: BarChart3,
    colorScheme: [
      { "img": colorScheme1, "desc": "防火涂料超薄型" },
      { "img": colorScheme2, "desc": "防火涂料薄型" },
      { "img": colorScheme3, "desc": "防火涂料厚型" }
    ],
    specs: {
      "执行标准": "GB14907-2018"
    },
    application: "室内膨胀型钢结构防火涂料 适用于一般农业及民用建筑、高层建筑、酒店、娱乐场所等建筑的钢结构上，起到防火保护作用。",
    precautions: [
"1、防火涂料施工前应将构件表面的浮沉、油污、杂物等清洗、打磨干净，待表面干燥后可进行防火涂料的施工。",
"2、本产品可使用喷涂、刷涂等施工方法。",
"3、施工现场须严禁烟火、杜绝火种。",
"4、本产品有效存储期为6个月"
    ]
  }, 
  {
    slug: 'steelStructure-2',
    title: '室外膨胀型钢结构防火涂料',
    category: 'steel-structure',
    fullDescription: '室外膨胀型钢结构防火涂料是一种专门用于室外环境的防火涂料，其主要特点在于具备了出色的防火、隔热效果以及优良的耐候性能。这种涂料采用特殊配方，在高温条件下能够迅速膨胀，形成致密的泡沫层。这一特性不仅能够有效阻止火焰对钢结构的侵蚀，还能隔绝热量传递，为钢结构提供长时间的防护。此外，它还具有很好的附着力和耐久性，能够在户外环境下长时间保持涂层完好。相较于其他类型的防火涂料，室外膨胀型钢结构防火涂料在应对恶劣自然环境方面表现出色。它能够抵御风雨、紫外线等自然因素的侵扰，确保涂装后的钢结构长期保持良好的防火安全状态。总之，这种防火涂料是保障室外钢结构安全的理想选择。',
    image: getImg('2室外膨胀型钢结构防火涂料/室外膨胀型钢结构防火涂料(水基型).png')!,
    images: [
      getImg('2室外膨胀型钢结构防火涂料/室外膨胀型钢结构防火涂料(水基型).png')!,
      getImg('2室外膨胀型钢结构防火涂料/产品细节展示.jpg')!,
      getImg('2室外膨胀型钢结构防火涂料/防火涂料样板.jpg')!,
      getImg('2室外膨胀型钢结构防火涂料/室外膨胀型钢结构防火涂料 (1).jpg')!,
      getImg('2室外膨胀型钢结构防火涂料/室外膨胀型钢结构防火涂料 (5).jpg')!,
      getImg('2室外膨胀型钢结构防火涂料/室外膨胀型钢结构防火涂料（溶剂型）.png')!
    ],
    icon: Headphones,
    colorScheme: [
      { "img": colorScheme1, "desc": "防火涂料超薄型" },
      { "img": colorScheme2, "desc": "防火涂料薄型" },
      { "img": colorScheme3, "desc": "防火涂料厚型" }],
  }, {
    slug: 'steelStructure-3',
    title: '室内非膨胀型钢结构防火涂料（石膏基）',
    category: 'steel-structure',
    fullDescription: '石膏基防火涂料以石膏为主要基材，采用无机轻质隔热和纤维材料组成的粉料。相比水泥基防火涂料，石膏基涂料绿色环保，原材料低碳节能，材料轻、密度小。同时，粘接力强，变形能力好，耐火性能优异。成品不易开裂兑落，突破泥基分层分道施工的瓶颈，可以实现一次喷涂施工成型。',
    image: getImg('3室内非膨胀型钢结构防火涂料/室内非膨胀型钢结构防火涂料（石膏基）.png')!,
    images: [
      getImg('3室内非膨胀型钢结构防火涂料/室内非膨胀型钢结构防火涂料（石膏基）.png')!,
      getImg('3室内非膨胀型钢结构防火涂料/室内非膨胀型钢结构防火涂料（水泥基）.png')!,
      getImg('3室内非膨胀型钢结构防火涂料/石膏基型产品成型测试.jpg')!,
      getImg('3室内非膨胀型钢结构防火涂料/室内非膨胀型钢结构防火涂料 (4).jpg')!,
      getImg('3室内非膨胀型钢结构防火涂料/室内非膨胀型钢结构防火涂料 (7).jpg')!,
      getImg('3室内非膨胀型钢结构防火涂料/产品库存.jpg')!
    ],
    icon: Package,
    colorScheme: [
      { "img": colorScheme1, "desc": "防火涂料超薄型" },
      { "img": colorScheme2, "desc": "防火涂料薄型" },
      { "img": colorScheme3, "desc": "防火涂料厚型" }
    ],
    specs: {
      "执行标准": "GB14907-2018",
    },
    application: "适用于室内承重钢结构建筑防火保护工程，如：厂房、库房、体育场馆、车站、航站楼、石油化工、大型建筑等室内钢结构建筑防火保护工程",
    packagingAndTransportation: [
      "1. 运输：（石膏基）室内非膨胀型钢结构防火涂料不易燃、不易炸、无腐蚀、属非危险品，各类交通工具均可运输。",
      "2. 储存：5-35℃环境下储存，防雨淋、燥晒、潮湿。需在干燥、通风的室内储存。",
      "3. 本产品有效储存期为6个月。"
    ]
  },
  {
    slug: 'steelStructure-4',
    title: '室外非膨胀型钢结构防火涂料',
    category: 'steel-structure',
    fullDescription: '室外非膨胀型钢结构防火涂料是我公司研制成功的新型钢结构防火涂料，该产品适用于钢结构表面喷涂，形成一层隔热防火层，使其在火灾中受到隔热保护，室外非膨胀型钢结构防火涂料以无机隔热材料为主要成份，无毒无味，具有施工方便、涂层附着力强、机械强度高、耐火时间长等特点。',
    image: getImg('4室外非膨胀型钢结构防火涂料/室外非膨胀型钢结构防火涂料.png')!,
    images: [
      getImg('4室外非膨胀型钢结构防火涂料/室外非膨胀型钢结构防火涂料.png')!,
      getImg('4室外非膨胀型钢结构防火涂料/特种室外非膨胀型钢结构防火涂料（特种型）.png')!,
      getImg('4室外非膨胀型钢结构防火涂料/室外非膨胀防火涂料准备发走.jpg')!,
      getImg('4室外非膨胀型钢结构防火涂料/室外非膨胀型测试.jpg')!,
      getImg('4室外非膨胀型钢结构防火涂料/室外非膨胀型钢结构防火涂料 (9).jpg')!,
      getImg('4室外非膨胀型钢结构防火涂料/室外非膨胀型涂料施工测试.jpg')!,
    ],
    icon: Truck,
    colorScheme: [
      { "img": colorScheme1, "desc": "防火涂料超薄型" },
      { "img": colorScheme2, "desc": "防火涂料薄型" },
      { "img": colorScheme3, "desc": "防火涂料厚型" }
    ],
    specs: {
      "执行标准": "GB14907-2018",
    },
    application: "室外非膨胀型钢结构防火涂料适用于各种高层建筑、石油、化工、电力、冶金、国防、轻工业等各类室外建筑承重钢结构的防火保护",
    usage: [
      "1. 第一遍喷涂胶、粉、水、按比例混合后，用搅拌机搅拌5-10分钟，待均匀后进行喷涂，喷涂厚度<2mm，喷涂后要经过2-3天彻底干燥后才能进行下一遍喷涂。",
      "2. 第二遍喷涂胶、粉、水、按比例混合后，用搅拌机搅拌5-10分钟，待均匀后进行喷涂，喷涂厚度6-8mm为宜，干燥48小时后才能进行下一遍喷涂。",
      "3. 第三遍喷涂胶、粉、水、按比例混合后，用搅拌机搅拌5-10分钟，待均匀后进行喷涂，喷涂厚度6-8mm为宜，干燥48小时后才能进行下一遍喷涂。",
      "4. 第四遍喷涂胶、粉、水、按比例混合后，用搅拌机搅拌5-10分钟，待均匀后进行喷涂",
      "注: 加水量可根据湿度，温度等条件进行调整。"
    ],
    packagingAndTransportation: [
"1. 本品为普通货物运输。",
"2. 本品粉料防止雨淋，液料防冻防暴晒。应储存在阴凉、通风、干燥条件良好的环境中。"

    ]
  }, {
    slug: 'steelStructure-5',
    title: '特种室外膨胀型钢结构防火涂料',
    category: 'steel-structure',
    fullDescription: '室外特种膨胀型钢结构防火涂料是一种特殊的防火涂层材料，主要用于钢结构的防火保护。特种钢结构防火涂料在型式试验中采用烃类（HC）火灾升温试验条件。对防火涂料涂层的耐火隔热等性能要求很高。这种涂料广泛应用于建筑、石油化工设施等行业的户外钢结构中。例如化工厂、装置区、管廊、桥梁、风力发电塔等重要设施的防护都离不开它。此外，它也常常应用于一些需要特殊保护的场所或环境中，如消防通道中的隔离设备或者高温环境下的建筑结构维护等等。',
    image: getImg('5特种钢结构防火涂料/特种室外膨胀型钢结构防火涂料(特种溶剂型).png')!,
    images: [
      getImg('5特种钢结构防火涂料/特种室外膨胀型钢结构防火涂料(特种溶剂型).png')!,
      getImg('5特种钢结构防火涂料/特种室外膨胀型钢结构防火涂料（特种水基型）.png')!,
      getImg('5特种钢结构防火涂料/色卡.jpg')!,
    ],
    icon: Shield,
    colorScheme: [
      { "img": colorScheme1, "desc": "防火涂料超薄型" },
      { "img": colorScheme2, "desc": "防火涂料薄型" },
      { "img": colorScheme3, "desc": "防火涂料厚型" }],
  }, {
    slug: 'steelStructure-6',
    title: '隧道防火涂料',
    category: 'steel-structure',
    fullDescription: '本产品适用于公路隧道、铁路隧道的防火，还适用于石化工程、高层建筑、钢结构、地下车库的防火需要。公路隧道一般在山区，隧道洞为阴凉、潮湿、通风性也较差。混凝土内壁容易出现受潮霉变、返碱、脱落等现象。长隧道多远离城市，无可靠的消防水源，隧道中的车流量不均衡，车载物品不确定，火灾荷载不确定，这些决定了长隧道火灾的不可预见性。所以，公路隧道洞内涂装工程既要考虑其良好的装饰性，又要考虑其优异的防水性能，防霉变性能和防火性能。',
    image: getImg('6隧道防火涂料/隧道防火涂料.png')!,
    images: [
      getImg('6隧道防火涂料/隧道防火涂料.png')!,
      getImg('6隧道防火涂料/隧道防火涂料 (8).jpg')!,
      getImg('6隧道防火涂料/隧道防火涂料施工结构图.jpg')!
    ],
    icon: Headphones,
  }, {
    slug: 'steelStructure-7',
    title: '饰面型防火涂料',
    category: 'steel-structure',
    category_id: 'steel-structure-coatings',
    image: getImg('饰面型防火涂料.jpg')!,
    fullDescription: `
      饰面型防火涂料是一种集装饰和防火功能为一体的新型涂料品种。当防火涂料涂覆于可燃基材上时，平时可起到装饰作用，一旦火灾发生时，则可阻止火势蔓延，达到保护基材的目的，生产的饰面型防火涂料均为膨胀型防火涂料，品种有水性防火涂料、透明防火涂料和溶剂型防火涂料，所用的防火助剂基本相同。
      饰面型防火涂料适用于一般工业及民用建筑、高层建筑、宾馆、文化娱乐场所、古建筑的木结构材料、纤维板、刨花板、玻璃钢板制品等易燃材料，以及水泥墙面等，起到防火保护作用。饰面型防火涂料成膜后涂层性能稳定，能使用各种气候条件，因此在全国各地均可使用。
    `,

    icon: Warehouse,
    
  }, {
    slug: 'steelStructure-8',
    title: '特种室外非膨胀型钢结构防火涂料（特种型）',
    category: 'steel-structure',
    fullDescription: '石油化工设施特种室外非膨胀型钢结构防火涂料耐火性能2.0h、2.5h、3.0h厚涂型用于石油化工设施、变配电站等特殊建筑物钢结构表面的防火保护，特种钢结构防火涂料在型式试验中采用烃类（HC）火灾升温试验条件。对防火涂料涂层的耐火隔热等性能要求很高。该涂料适用于特殊室外承重钢结构建筑的防火保护工程，如化工设备、变电站、配电站、火电厂、核电站等石油化工、冶金、电厂等室外钢结构建筑的防火保护工程。涂层导热系数低，耐候性好、抗氧化、粉化能力强，涂层遇火形成高密度釉层即隔热又耐进一步氧化，使其耐火极限达3.0小时以上。',
    image: getImg('4室外非膨胀型钢结构防火涂料/特种室外非膨胀型钢结构防火涂料（特种型）.png')!,
    images: [
      getImg('4室外非膨胀型钢结构防火涂料/特种室外非膨胀型钢结构防火涂料（特种型）.png')!,
      getImg('4室外非膨胀型钢结构防火涂料/室外非膨胀防火涂料准备发走.jpg')!,
      getImg('4室外非膨胀型钢结构防火涂料/室外非膨胀型测试.jpg')!,
      getImg('4室外非膨胀型钢结构防火涂料/室外非膨胀型钢结构防火涂料 (9).jpg')!,
      getImg('4室外非膨胀型钢结构防火涂料/室外非膨胀型涂料施工测试.jpg')!,
    ],
    icon: Headphones,
    colorScheme: [
      { "img": colorScheme1, "desc": "防火涂料超薄型" },
      { "img": colorScheme2, "desc": "防火涂料薄型" },
      { "img": colorScheme3, "desc": "防火涂料厚型" }],
  }, {
    slug: 'steelStructure-9',
    title: '室内非膨胀型钢结构防火涂料（水泥基）',
    
    fullDescription: '本产品是我公司根据GB14907-2018国家标准研制成功的产品，该产品适用于钢结构表面喷涂，形成一层隔热防火层使其在火灾中受到隔热保护。具有施工方便快捷，涂层附着力强，机械强度高，耐火极限时间长，耐火性能稳定可靠等特点。',
    image:getImg('3室内非膨胀型钢结构防火涂料/室内非膨胀型钢结构防火涂料（水泥基）.png')!,
    images: [
            
      getImg('3室内非膨胀型钢结构防火涂料/室内非膨胀型钢结构防火涂料（水泥基）.png')!,
      getImg('3室内非膨胀型钢结构防火涂料/室内非膨胀型钢结构防火涂料（石膏基）.png')!,
      getImg('3室内非膨胀型钢结构防火涂料/石膏基型产品成型测试.jpg')!,
      getImg('3室内非膨胀型钢结构防火涂料/室内非膨胀型钢结构防火涂料 (4).jpg')!,
      getImg('3室内非膨胀型钢结构防火涂料/室内非膨胀型钢结构防火涂料 (7).jpg')!,
      getImg('3室内非膨胀型钢结构防火涂料/产品库存.jpg')!
    ],
    icon: Headphones,
    colorScheme: [
      { "img": colorScheme1, "desc": "防火涂料超薄型" },
      { "img": colorScheme2, "desc": "防火涂料薄型" },
      { "img": colorScheme3, "desc": "防火涂料厚型" }],
      specs: {
      "执行标准": "GB14907-2018",
      },
      application: "适用于室内承重钢结构建筑防火保护工程，如：厂房、库房、体育场馆、车站、航站楼、石油化工、大型建筑等室内",

usage: [
"1. 以喷涂为主，也可抹涂与喷抹结合.",
"2. 基材处理：施工前彻底清除钢构件上的灰尘、油污、浮锈，然后再刷防锈漆，经检查钢构件表面完全刷涂防锈漆并干燥后，方可喷涂防火涂料,",
"3. 第一遍喷涂胶、粉、水，按比例混合后，用搅拌机搅拌5-10分钟，待均匀后进行喷涂，喷涂厚度<2mm，喷涂后要经过2-3天彻底干燥后才能进行下一遍喷涂。",
"4. 第二遍喷涂胶、粉、水，按比例混合后，用搅拌机搅拌5-10分钟，待均匀后进行喷涂，喷涂厚度6-8mm为宜，干燥48小时后才能进行下一遍喷涂。",
"5. 第三遍喷涂胶、粉、水，按比例混合后，用搅拌机搅拌5-10分钟，待均匀后进行喷涂，喷涂厚度6-8mm为宜，干燥48小时后才能进行下一遍喷涂。",
"6. 第四遍喷涂胶、粉、水，按比例混合后，用搅拌机搅拌5-10分钟，待均匀后进行喷涂，直喷涂到相应的厚度。"
],
packagingAndTransportation: [
"1. 本品为普通货物运输。",
"2. 本品粉料防止雨淋，液料防冻防暴晒。应储存在阴凉、通风、干燥条件良好的环境中。"
]
  }
];



export const steelStructureProducts: Product[] = steelStructureProductsMap.map(product => ({
  ...product,
    description: (product.fullDescription ? product.fullDescription.substring(0, 50) + '...' : ''),
    category: 'steel-structure',
    labels: ['源头厂家', '供货稳定', '发货快速'],
}));