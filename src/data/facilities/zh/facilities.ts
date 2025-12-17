import northAmericanHubImg from '@/assets/厂区实力/-144848639_239762223_-2052321846.jpg';
import westCoastDistributionImg from '@/assets/厂区实力/-2030029167_730982163_-1967713043.jpg';
import eastCoastOperationsImg from '@/assets/厂区实力/673582483_-1713819689_1672295224.jpg';
import southernManufacturingCenterImg from '@/assets/厂区实力/-139392981_-644036898_-670065618.jpg';
import { SITE } from '@/config/site';

export const facilities = [
  {
    name: '办公环境',
    location: 'Chicago, Illinois',
    address: '1234 Industrial Boulevard, Chicago, IL 60609',
    type: 'Distribution & Manufacturing',
    size: '500,000 sq ft',
    image: northAmericanHubImg,
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>`,
    phone: '+1 (312) 555-0100',
    email: `chicago@${SITE.emailDomain}`,
    manager: 'Sarah Johnson',
    hours: '24/7 Operations',
    features: [
      '中国丰瑞耐火材料有限公司是一家从事消防产品及防火阻燃材料生产的企业，坐落于中国京津冀环渤海经济圈腹地，中国河北防火材料行业重点企业。',
    ],
    certifications: ['ISO 9001', 'ISO 14001', 'OSHA Compliant']
  },
  {
    name: '生产现场',
    location: 'Los Angeles, California',
    address: '5678 Portside Drive, Los Angeles, CA 90040',
    type: 'Port Logistics & Warehousing',
    size: '350,000 sq ft',
    image: westCoastDistributionImg,
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>`,
    phone: '+1 (323) 555-0200',
    email: `losangeles@${SITE.emailDomain}`,
    manager: 'Michael Chen',
    hours: 'Mon-Sun: 6:00 AM - 10:00 PM',
    features: [
      '我公司产品现有三大系列28个品种，产品销往全国各地，并出口中东，东南亚等国家和地区，其中室内外膨胀型钢结构防火涂料、室内外非膨胀型钢结构防火涂料、隧道防火涂料、电缆防火涂料、柔性有机堵料、无机堵料、阻火包、防火隔板、阻火模块等主导产品在国内享有较高声誉。',
    ],
    certifications: ['C-TPAT', 'ISO 9001', 'FDA Registered']
  },
  {
    name: '生产车间',
    location: 'Newark, New Jersey',
    address: '9012 Commerce Way, Newark, NJ 07114',
    type: 'Distribution & Value-Added Services',
    size: '400,000 sq ft',
    image: eastCoastOperationsImg,
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>`,
    phone: '+1 (973) 555-0300',
    email: `newark@${SITE.emailDomain}`,
    manager: 'David Rodriguez',
    hours: 'Mon-Fri: 7:00 AM - 8:00 PM, Sat: 8:00 AM - 4:00 PM',
    features: [
      '所有产品均已通过消防产品合格评定中心的严格审查认证。公司全体员工秉承“诚信为本，用户至上，以人为本，以德经商”的发展理念，经数年拼搏，赢得社会各界认可。'
    ],
    certifications: ['ISO 9001', 'ISTA Certified', 'TSA Approved']
  },
  {
    name: '生产设备',
    location: 'Houston, Texas',
    address: '3456 Manufacturing Parkway, Houston, TX 77001',
    type: 'Manufacturing & Assembly',
    size: '300,000 sq ft',
    image: southernManufacturingCenterImg,
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>`,
    phone: '+1 (713) 555-0400',
    email: `houston@${SITE.emailDomain}`,
    manager: 'Jennifer Martinez',
    hours: 'Mon-Fri: 6:00 AM - 6:00 PM',
    features: [
      '本公司将一如既往地用诚信与创新的态度，继续坚持以客户需求为导向，不断奋进，奉献出更好的产品和更上乘的服务，尽力做到客户满意。本公司衷心感谢海内外合作伙伴的大鼎力相助和良好合作，并真诚企盼与致力于节能建材事业的朋友携手合作，为节能建材事业做出新的贡献。'
    ],
    certifications: ['ISO 9001', 'AS9100', 'ITAR Registered']
  },
  
];