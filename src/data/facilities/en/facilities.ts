import northAmericanHubImg from '@/assets/厂区实力/-144848639_239762223_-2052321846.jpg';
import westCoastDistributionImg from '@/assets/厂区实力/-2030029167_730982163_-1967713043.jpg';
import eastCoastOperationsImg from '@/assets/厂区实力/673582483_-1713819689_1672295224.jpg';
import southernManufacturingCenterImg from '@/assets/厂区实力/-139392981_-644036898_-670065618.jpg';
import { SITE } from '@/config/site';

export const facilities = [
  {
    name: 'Office environment',
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
      "China Fengrui Refractory Materials Co., Ltd. is a company engaged in the production of fire protection products and fire-retardant materials, located in the heart of the Beijing-Tianjin-Hebei Bohai Economic Circle in China, and is a key enterprise in the fire-retardant materials industry of Hebei Province, China.",
    ],
    certifications: ['ISO 9001', 'ISO 14001', 'OSHA Compliant']
  },
  {
    name: 'Production site',
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
      'Our company has three major series and 28 varieties of products, sold nationwide and exported to the Middle East, Southeast Asia, and other countries and regions. Among them, indoor and outdoor intumescent steel structure fireproof coatings, indoor and outdoor non-intumescent steel structure fireproof coatings, tunnel fireproof coatings, cable fireproof coatings, flexible organic sealants, inorganic sealants, fireproof bags, fireproof partitions, and fireproof modules enjoy a high reputation in China.',
    ],
    certifications: ['C-TPAT', 'ISO 9001', 'FDA Registered']
  },
  {
    name: 'Production workshop',
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
      'All products have passed the rigorous review and certification of the Fire Product Certification Center of the Ministry of Emergency Management. All employees of the company adhere to the development philosophy of "integrity-based, customer first, people-oriented, and business with virtue". After years of hard work, we have won recognition from all sectors of society.'
    ],
    certifications: ['ISO 9001', 'ISTA Certified', 'TSA Approved']
  },
  {
    name: 'Production equipment',
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
      'The company will continue to maintain an attitude of integrity and innovation, adhere to customer needs as the orientation, keep striving, and dedicate better products and superior services to achieve customer satisfaction. We sincerely thank domestic and foreign partners for their strong support and good cooperation, and sincerely look forward to working with friends who are committed to the energy-saving building materials industry to make new contributions to the energy-saving building materials industry.'
    ],
    certifications: ['ISO 9001', 'AS9100', 'ITAR Registered']
  },
  
];