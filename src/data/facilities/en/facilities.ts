import northAmericanHubImg from '@assets/photo-1566576721346-d4a3b4eaeb55.jpg';
import westCoastDistributionImg from '@assets/photo-1586528116311-ad8dd3c8310d.jpg';
import eastCoastOperationsImg from '@assets/photo-1553413077-190dd305871c.jpg';
import southernManufacturingCenterImg from '@assets/photo-1581091226825-a6a2a5aee158.jpg';
import midwestColdStorageImg from '@assets/photo-1601584115197-04ecc0da31d7.jpg';
import southeastDistributionImg from '@assets/photo-1558618666-fcd25c85cd64.jpg';
import { SITE } from '@/config/site';

const facilities = [
  {
    name: 'North American Hub',
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
      'Automated warehouse systems',
      'Climate-controlled storage',
      'CNC machining center',
      'Rail and truck access',
      '24/7 operations'
    ],
    certifications: ['ISO 9001', 'ISO 14001', 'OSHA Compliant']
  },
  {
    name: 'West Coast Distribution',
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
      'Port-adjacent location',
      'Cross-docking capabilities',
      'Bonded warehouse',
      'Container storage',
      'LTL/FTL consolidation'
    ],
    certifications: ['C-TPAT', 'ISO 9001', 'FDA Registered']
  },
  {
    name: 'East Coast Operations',
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
      'E-commerce fulfillment',
      'Kitting and assembly',
      'Returns processing',
      'Same-day shipping',
      'Multi-client operations'
    ],
    certifications: ['ISO 9001', 'ISTA Certified', 'TSA Approved']
  },
  {
    name: 'Southern Manufacturing Center',
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
      'Precision manufacturing',
      'Quality control lab',
      'Assembly lines',
      'Prototype development',
      'Tool & die shop'
    ],
    certifications: ['ISO 9001', 'AS9100', 'ITAR Registered']
  },
  {
    name: 'Midwest Cold Storage',
    location: 'Minneapolis, Minnesota',
    address: '7890 Cold Chain Avenue, Minneapolis, MN 55401',
    type: 'Refrigerated & Frozen Storage',
    size: '250,000 sq ft',
    image: midwestColdStorageImg,
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>`,
    phone: '+1 (612) 555-0500',
    email: `minneapolis@${SITE.emailDomain}`,
    manager: 'Robert Anderson',
    hours: '24/7 Operations',
    features: [
      'Temperature zones: -20°F to 60°F',
      'HACCP compliant',
      'Blast freezing',
      'Food-grade facility',
      'Lot tracking systems'
    ],
    certifications: ['FSMA', 'SQF Level 3', 'FDA Registered']
  },
  {
    name: 'Southeast Distribution',
    location: 'Atlanta, Georgia',
    address: '2345 Logistics Boulevard, Atlanta, GA 30301',
    type: 'Distribution & Transportation Hub',
    size: '450,000 sq ft',
    image: southeastDistributionImg,
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>`,
    phone: '+1 (404) 555-0600',
    email: `atlanta@${SITE.emailDomain}`,
    manager: 'Amanda Williams',
    hours: 'Mon-Sun: 5:00 AM - 11:00 PM',
    features: [
      'Strategic location',
      'Cross-docking',
      'Regional distribution',
      'Parcel integration',
      'Transloading services'
    ],
    certifications: ['ISO 9001', 'C-TPAT', 'OSHA Compliant']
  }
];
