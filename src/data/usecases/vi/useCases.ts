import ecommerceImg from '@/assets/施工案例/-1815801961_-364583281_-1457283138.jpg';
import healthcareImg from '@/assets/施工案例/微信图片_20251210105840_454_4.png';
import automotiveImg from '@/assets/施工案例/微信图片_20251210105936_455_4.png';
import technologyImg from '@/assets/施工案例/微信图片_20251210105947_456_4.png';
export const useCases:any[] = [
  {
    industry: 'Lớp phủ chống cháy tại công trường xây dựng',
    iconName: 'ShoppingCart',
    image: ecommerceImg,

    challenge: 'Managing high-volume orders during peak seasons with tight delivery windows and customer expectations for fast, accurate fulfillment.',
    solution: 'Scalable warehousing with automated order processing, same-day shipping capabilities, and integrated returns management.',
    results: [ecommerceImg,ecommerceImg,ecommerceImg,ecommerceImg],
  },
  {
    industry: 'Chống cháy trong nhà',
    iconName: 'Heart',
    image: healthcareImg,
    challenge: 'Maintaining strict temperature controls, regulatory compliance, and chain of custody for sensitive medical products and pharmaceuticals.',
    solution: 'FDA-compliant climate-controlled facilities with validated cold chain logistics, real-time monitoring, and full audit trails.',
    results: [healthcareImg,healthcareImg,healthcareImg,healthcareImg],
  },
  {
    industry: 'Chống cháy cáp',
    iconName: 'Car',
    image: automotiveImg,
    results: [automotiveImg,automotiveImg,automotiveImg,automotiveImg],
    challenge: 'Coordinating just-in-time delivery of components across multiple manufacturing plants while minimizing inventory holding costs.',
    solution: 'Strategic distribution centers near production facilities, milk-run logistics, and predictive inventory management.',
    
  },
  {
    industry: 'Chống cháy hầm',
    iconName: 'Laptop',
    image: technologyImg,
    results: [technologyImg,technologyImg,technologyImg,technologyImg],
    challenge: 'Secure handling of high-value electronics, efficient reverse logistics for returns, and rapid product lifecycle management.',
    solution: 'ESD-protected environments, secure chain of custody, streamlined returns processing, and asset recovery programs.',
  
  },
 
];