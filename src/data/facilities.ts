import northAmericanHubImg from '@/assets/厂区实力/-144848639_239762223_-2052321846.jpg';
import westCoastDistributionImg from '@/assets/厂区实力/-2030029167_730982163_-1967713043.jpg';
import eastCoastOperationsImg from '@/assets/厂区实力/673582483_-1713819689_1672295224.jpg';
import southernManufacturingCenterImg from '@/assets/厂区实力/-139392981_-644036898_-670065618.jpg';
import w6201765940930 from '@/assets/厂区实力/6201765940930.jpg';
import w6211765940931 from '@/assets/厂区实力/6211765940931.jpg';
export interface Technology {
  title: string;
  description: string;
  iconGradient: string;
  iconPath: string;
  image?: ImageMetadata;
  descriptions?: string[];
}

// 接收翻译函数 t 作为参数
export const getTechnologies = (t: (key: any) => string): Technology[] => [
  {
    title: t('facilities.officeenvironment'),
    description: t('common.CompanyOverviewandLocationAdvantagesDesc'),
    image: northAmericanHubImg,
    iconGradient: "from-blue-500 to-blue-600",
    iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  },
  {
    title: t('facilities.productionsite'),
    description: t('common.CoreProductsandMarketCoverageDesc'),
    image: westCoastDistributionImg,
    iconGradient: "from-teal-500 to-teal-600",
    iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  },
  {
    title: t('facilities.productionworkshop'),
    description: t('common.QualificationCertificationandBusinessPhilosophyDesc'),
    image: eastCoastOperationsImg,
    iconGradient: "from-blue-500 to-blue-600",
    iconPath: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
  },
  {
    title: t('facilities.productionequipment'),
    description: t('common.DevelopmentVisionandCooperationProspectsDesc'),
    image: southernManufacturingCenterImg,
    iconGradient: "from-teal-500 to-teal-600",
    iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
  },
  {
    title: t('common.nonexpandingtypecoatingproductionequipment'),
    description: t('common.nonexpandingtypecoatingproductionequipmentDesc'),
    image: w6201765940930,
    iconGradient: "from-teal-500 to-teal-600",
    iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
  },
  {
    title: t('common.expandingtypecoatingproductionequipment'),
    description: t('common.expandingtypecoatingproductionequipmentDesc'),
    // descriptions: [
    //   t('common.expandingtypecoatingproductionequipmentDescs1'),
    //   t('common.expandingtypecoatingproductionequipmentDescs2'),
    //   t('common.expandingtypecoatingproductionequipmentDescs3'),
    //   t('common.expandingtypecoatingproductionequipmentDescs4'),
    //   t('common.expandingtypecoatingproductionequipmentDescs5'),
    //   t('common.expandingtypecoatingproductionequipmentDescs6')
    // ],
    
    image: w6211765940931,
    iconGradient: "from-teal-500 to-teal-600",
    iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
  }
];