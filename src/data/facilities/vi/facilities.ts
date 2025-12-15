import northAmericanHubImg from '@/assets/厂区实力/-144848639_239762223_-2052321846.jpg';
import westCoastDistributionImg from '@/assets/厂区实力/-2030029167_730982163_-1967713043.jpg';
import eastCoastOperationsImg from '@/assets/厂区实力/673582483_-1713819689_1672295224.jpg';
import southernManufacturingCenterImg from '@/assets/厂区实力/-139392981_-644036898_-670065618.jpg';
import { SITE } from '@/config/site';

export const facilities = [
  {
    name: 'Môi trường văn phòng',
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
      'Công ty TNHH Vật liệu Chịu lửa Fengrui Langfang là một doanh nghiệp chuyên sản xuất các sản phẩm phòng cháy chữa cháy và vật liệu chống cháy, tọa lạc tại trung tâm Khu kinh tế vành đai Bắc Kinh - Thiên Tân - Hà Bắc, gần Khu vực mới Xiong\'an, là doanh nghiệp trọng điểm trong ngành vật liệu chống cháy của tỉnh Hà Bắc.',
      
      
      
    ],
    certifications: ['ISO 9001', 'ISO 14001', 'OSHA Compliant']
  },
  {
    name: 'Sản xuất tại chỗ',
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
      'Công ty chúng tôi hiện cung cấp ba dòng sản phẩm chính với 28 chủng loại. Sản phẩm của chúng tôi được bán trên toàn quốc và xuất khẩu sang các quốc gia và khu vực như Trung Đông và Đông Nam Á.',
    ],
    certifications: ['C-TPAT', 'ISO 9001', 'FDA Registered']
  },
  {
    name: 'Sản xuất tại chỗ',
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
      'Các sản phẩm chủ đạo như sơn chống cháy kết cấu thép phồng trong nhà/ngoài trời, sơn chống cháy kết cấu thép không phồng trong nhà/ngoài trời, sơn chống cháy hầm, sơn chống cháy cáp, vật liệu bịt kín hữu cơ linh hoạt, vật liệu bịt kín vô cơ, gối chống cháy, tấm chống cháy và mô-đun chống cháy được đánh giá cao trong nước.'
    ],
    certifications: ['ISO 9001', 'ISTA Certified', 'TSA Approved']
  },
  {
    name: 'Sản xuất thiết bị',
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
      'Tất cả sản phẩm đã vượt qua sự xem xét nghiêm ngặt và chứng nhận của Trung tâm Chứng nhận Sản phẩm Chống cháy của Bộ Quản lý Khẩn cấp.'
    ],
    certifications: ['ISO 9001', 'AS9100', 'ITAR Registered']
  },
  
];