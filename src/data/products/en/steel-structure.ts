import { Warehouse, Truck, Package, BarChart3, Shield, Headphones } from 'lucide-react';
import type { Product } from '../types';
import colorScheme1 from '@/assets/产品图片/钢结构防火涂料/1防火涂料超薄型.jpg'
import colorScheme2 from '@/assets/产品图片/钢结构防火涂料/2防火涂料薄型.jpg'
import colorScheme3 from '@/assets/产品图片/钢结构防火涂料/3防火涂料厚型.jpg'


const allImages = import.meta.glob<{ default: ImageMetadata }>('/src/assets/产品图片/钢结构防火涂料/**/*.{jpeg,jpg,png}', { eager: true });

// 2. Helper function: Get image object by filename (or partial path)
function getImg(filename: string) {
  // Find path ending with filename in all paths
  const foundPath = Object.keys(allImages).find(path => path.endsWith(filename));

  if (!foundPath) {
    console.error(`Image not found: ${filename}`);
    // If image not found, return undefined or a default placeholder
    return undefined;
  }

  return allImages[foundPath].default;
}




const steelStructureProductsMap: Product[] = [
  {
    slug: 'steelStructure-1',
    title: 'Indoor Intumescent Steel Structure Fireproof Coating',
    category: 'steel-structure',
    fullDescription: 'Indoor intumescent steel structure fireproof coating forms a uniform and dense honeycomb or sponge-like carbonaceous foam layer when exposed to fire, providing good protection for combustible substrates. This coating is water-resistant, has good adhesion, good film-forming performance, high hardness, and scrub resistance.',
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
      { "img": colorScheme1, "desc": "Ultra-thin Fireproof Coating" },
      { "img": colorScheme2, "desc": "Thin Fireproof Coating" },
      { "img": colorScheme3, "desc": "Thick Fireproof Coating" }
    ],
    specs: {
      "Standard": "GB14907-2018"
    },
    application: "Indoor intumescent steel structure fireproof coating is suitable for steel structures in general agricultural and civil buildings, high-rise buildings, hotels, entertainment venues, etc., providing fire protection.",
    precautions: [
      "1. Before construction, the surface of the components should be cleaned of dust, oil, and debris, and polished. Construction can proceed after the surface is dry.",
      "2. This product can be applied by spraying, brushing, etc.",
      "3. Smoking and fire are strictly prohibited at the construction site.",
      "4. The effective storage period of this product is 6 months."
    ]
  }, 
  {
    slug: 'steelStructure-2',
    title: 'Outdoor Intumescent Steel Structure Fireproof Coating',
    category: 'steel-structure',
    fullDescription: 'Outdoor intumescent steel structure fireproof coating is a fireproof coating specifically designed for outdoor environments. Its main features are excellent fire resistance, heat insulation, and weather resistance. This coating uses a special formula that expands rapidly under high temperature conditions to form a dense foam layer. This characteristic not only effectively prevents flames from eroding the steel structure but also insulates heat transfer, providing long-term protection for the steel structure. In addition, it has good adhesion and durability, maintaining the coating intact for a long time in outdoor environments. Compared with other types of fireproof coatings, outdoor intumescent steel structure fireproof coatings perform excellently in coping with harsh natural environments. It can resist the intrusion of natural factors such as wind, rain, and ultraviolet rays, ensuring that the painted steel structure maintains a good fire safety state for a long time. In short, this fireproof coating is an ideal choice for ensuring the safety of outdoor steel structures.',
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
      { "img": colorScheme1, "desc": "Ultra-thin Fireproof Coating" },
      { "img": colorScheme2, "desc": "Thin Fireproof Coating" },
      { "img": colorScheme3, "desc": "Thick Fireproof Coating" }],
  }, {
    slug: 'steelStructure-3',
    title: 'Indoor Non-Intumescent Steel Structure Fireproof Coating (Gypsum-based)',
    category: 'steel-structure',
    fullDescription: 'Gypsum-based fireproof coating uses gypsum as the main substrate and adopts powder composed of inorganic lightweight heat insulation and fiber materials. Compared with cement-based fireproof coatings, gypsum-based coatings are green and environmentally friendly, with low-carbon and energy-saving raw materials, light weight, and low density. At the same time, it has strong adhesion, good deformation ability, and excellent fire resistance. The finished product is not easy to crack or fall off, breaking through the bottleneck of layered construction of mud-based coatings, and can achieve one-time spraying construction molding.',
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
      { "img": colorScheme1, "desc": "Ultra-thin Fireproof Coating" },
      { "img": colorScheme2, "desc": "Thin Fireproof Coating" },
      { "img": colorScheme3, "desc": "Thick Fireproof Coating" }
    ],
    specs: {
      "Standard": "GB14907-2018",
    },
    application: "Suitable for indoor load-bearing steel structure building fire protection projects, such as: factories, warehouses, stadiums, stations, terminals, petrochemicals, large buildings, etc.",
    packagingAndTransportation: [
      "1. Transportation: (Gypsum-based) Indoor non-intumescent steel structure fireproof coating is non-flammable, non-explosive, non-corrosive, and non-dangerous goods. It can be transported by various means of transportation.",
      "2. Storage: Store in an environment of 5-35℃, protect from rain, sun exposure, and moisture. Store in a dry and ventilated room.",
      "3. The effective storage period of this product is 6 months."
    ]
  },
  {
    slug: 'steelStructure-4',
    title: 'Outdoor Non-Intumescent Steel Structure Fireproof Coating',
    category: 'steel-structure',
    fullDescription: 'Outdoor non-intumescent steel structure fireproof coating is a new type of steel structure fireproof coating successfully developed by our company. This product is suitable for spraying on the surface of steel structures to form a heat-insulating fireproof layer, protecting them from heat in fires. Outdoor non-intumescent steel structure fireproof coating uses inorganic heat insulation materials as the main component, is non-toxic and odorless, and has the characteristics of convenient construction, strong coating adhesion, high mechanical strength, and long fire resistance time.',
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
      { "img": colorScheme1, "desc": "Ultra-thin Fireproof Coating" },
      { "img": colorScheme2, "desc": "Thin Fireproof Coating" },
      { "img": colorScheme3, "desc": "Thick Fireproof Coating" }
    ],
    specs: {
      "Standard": "GB14907-2018",
    },
    application: "Outdoor non-intumescent steel structure fireproof coating is suitable for fire protection of various outdoor load-bearing steel structures such as high-rise buildings, petroleum, chemical, electric power, metallurgy, national defense, light industry, etc.",
    usage: [
      "1. For the first coat, mix glue, powder, and water in proportion, stir with a mixer for 5-10 minutes until uniform, then spray. The spray thickness should be <2mm. Allow to dry thoroughly for 2-3 days before the next coat.",
      "2. For the second coat, mix glue, powder, and water in proportion, stir with a mixer for 5-10 minutes until uniform, then spray. The spray thickness should be 6-8mm. Allow to dry for 48 hours before the next coat.",
      "3. For the third coat, mix glue, powder, and water in proportion, stir with a mixer for 5-10 minutes until uniform, then spray. The spray thickness should be 6-8mm. Allow to dry for 48 hours before the next coat.",
      "4. For the fourth coat, mix glue, powder, and water in proportion, stir with a mixer for 5-10 minutes until uniform, then spray.",
      "Note: The amount of water added can be adjusted according to humidity, temperature, and other conditions."
    ],
    packagingAndTransportation: [
      "1. This product is transported as general cargo.",
      "2. The powder of this product should be protected from rain, and the liquid should be protected from freezing and sun exposure. It should be stored in a cool, ventilated, and dry environment."
    ]
  }, {
    slug: 'steelStructure-5',
    title: 'Special Outdoor Intumescent Steel Structure Fireproof Coating',
    category: 'steel-structure',
    fullDescription: 'Outdoor special intumescent steel structure fireproof coating is a special fireproof coating material mainly used for fire protection of steel structures. Special steel structure fireproof coatings use hydrocarbon (HC) fire heating test conditions in type testing. The requirements for fire resistance and heat insulation performance of the fireproof coating layer are very high. This coating is widely used in outdoor steel structures in industries such as construction and petrochemical facilities. For example, the protection of important facilities such as chemical plants, unit areas, pipe galleries, bridges, and wind power towers cannot do without it. In addition, it is also often used in places or environments that require special protection, such as isolation equipment in fire escapes or maintenance of building structures in high-temperature environments.',
    image: getImg('5特种钢结构防火涂料/特种室外膨胀型钢结构防火涂料(特种溶剂型).png')!,
    images: [
      getImg('5特种钢结构防火涂料/特种室外膨胀型钢结构防火涂料(特种溶剂型).png')!,
      getImg('5特种钢结构防火涂料/特种室外膨胀型钢结构防火涂料（特种水基型）.png')!,
      getImg('5特种钢结构防火涂料/色卡.jpg')!,
    ],
    icon: Shield,
    colorScheme: [
      { "img": colorScheme1, "desc": "Ultra-thin Fireproof Coating" },
      { "img": colorScheme2, "desc": "Thin Fireproof Coating" },
      { "img": colorScheme3, "desc": "Thick Fireproof Coating" }],
  }, {
    slug: 'steelStructure-6',
    title: 'Tunnel Fireproof Coating',
    category: 'steel-structure',
    fullDescription: 'This product is suitable for fire protection of highway tunnels and railway tunnels, as well as petrochemical engineering, high-rise buildings, steel structures, and underground garages. Highway tunnels are generally located in mountainous areas, and the tunnel caves are cool, humid, and poorly ventilated. The inner wall of concrete is prone to moisture, mildew, efflorescence, and peeling. Long tunnels are mostly far from cities and lack reliable fire water sources. The traffic flow in the tunnel is unbalanced, the vehicle items are uncertain, and the fire load is uncertain, which determines the unpredictability of fires in long tunnels. Therefore, the coating project in the highway tunnel cave must consider both its good decoration and its excellent waterproof performance, mildew resistance, and fire performance.',
    image: getImg('6隧道防火涂料/隧道防火涂料.png')!,
    images: [
      getImg('6隧道防火涂料/隧道防火涂料.png')!,
      getImg('6隧道防火涂料/隧道防火涂料 (8).jpg')!,
      getImg('6隧道防火涂料/隧道防火涂料施工结构图.jpg')!
    ],
    icon: Headphones,
  }, {
    slug: 'steelStructure-7',
    title: 'Decorative Fireproof Coating',
    category: 'steel-structure',
    category_id: 'steel-structure-coatings',
    image: getImg('饰面型防火涂料.jpg')!,
    fullDescription: `
      Decorative fireproof coating is a new type of coating variety that integrates decoration and fire protection functions. When the fireproof coating is applied to a combustible substrate, it can play a decorative role in normal times. Once a fire occurs, it can prevent the spread of fire and achieve the purpose of protecting the substrate. The decorative fireproof coatings produced are all intumescent fireproof coatings. The varieties include water-based fireproof coatings, transparent fireproof coatings, and solvent-based fireproof coatings. The fire retardants used are basically the same.
      Decorative fireproof coatings are suitable for general industrial and civil buildings, high-rise buildings, hotels, cultural and entertainment venues, wooden structures of ancient buildings, fiberboards, particleboards, glass fiber reinforced plastic products and other flammable materials, as well as cement walls, providing fire protection. After the decorative fireproof coating forms a film, the coating performance is stable and can be used in various climatic conditions, so it can be used all over the country.
    `,

    icon: Warehouse,
    
  }, {
    slug: 'steelStructure-8',
    title: 'Special Outdoor Non-Intumescent Steel Structure Fireproof Coating (Special Type)',
    category: 'steel-structure',
    fullDescription: 'Petrochemical facility special outdoor non-intumescent steel structure fireproof coating with fire resistance of 2.0h, 2.5h, 3.0h thick coating type is used for fire protection of steel structure surfaces of special buildings such as petrochemical facilities and substations. Special steel structure fireproof coatings use hydrocarbon (HC) fire heating test conditions in type testing. The requirements for fire resistance and heat insulation performance of the fireproof coating layer are very high. This coating is suitable for fire protection projects of special outdoor load-bearing steel structure buildings, such as chemical equipment, substations, distribution stations, thermal power plants, nuclear power plants, and other outdoor steel structure buildings in petrochemical, metallurgical, and power plants. The coating has low thermal conductivity, good weather resistance, strong oxidation resistance and chalking resistance. The coating forms a high-density glaze layer when exposed to fire, which is both heat-insulating and resistant to further oxidation, making its fire resistance limit reach more than 3.0 hours.',
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
      { "img": colorScheme1, "desc": "Ultra-thin Fireproof Coating" },
      { "img": colorScheme2, "desc": "Thin Fireproof Coating" },
      { "img": colorScheme3, "desc": "Thick Fireproof Coating" }],
  }, {
    slug: 'steelStructure-9',
    title: 'Indoor Non-Intumescent Steel Structure Fireproof Coating (Cement-based)',
    
    fullDescription: 'This product is a product successfully developed by our company according to the GB14907-2018 national standard. This product is suitable for spraying on the surface of steel structures to form a heat-insulating fireproof layer to protect it from heat in fires. It has the characteristics of convenient and fast construction, strong coating adhesion, high mechanical strength, long fire resistance limit time, and stable and reliable fire performance.',
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
      { "img": colorScheme1, "desc": "Ultra-thin Fireproof Coating" },
      { "img": colorScheme2, "desc": "Thin Fireproof Coating" },
      { "img": colorScheme3, "desc": "Thick Fireproof Coating" }],
      specs: {
      "Standard": "GB14907-2018",
      },
      application: "Suitable for indoor load-bearing steel structure building fire protection projects, such as: factories, warehouses, stadiums, stations, terminals, petrochemicals, large buildings, etc.",

usage: [
"1. Mainly spraying, can also be plastered or combined spraying and plastering.",
"2. Substrate treatment: Before construction, thoroughly remove dust, oil, and floating rust on the steel components, then brush anti-rust paint. After checking that the surface of the steel components is completely brushed with anti-rust paint and dried, the fireproof coating can be sprayed.",
"3. For the first coat, mix glue, powder, and water in proportion, stir with a mixer for 5-10 minutes until uniform, then spray. The spray thickness should be <2mm. Allow to dry thoroughly for 2-3 days before the next coat.",
"4. For the second coat, mix glue, powder, and water in proportion, stir with a mixer for 5-10 minutes until uniform, then spray. The spray thickness should be 6-8mm. Allow to dry for 48 hours before the next coat.",
"5. For the third coat, mix glue, powder, and water in proportion, stir with a mixer for 5-10 minutes until uniform, then spray. The spray thickness should be 6-8mm. Allow to dry for 48 hours before the next coat.",
"6. For the fourth coat, mix glue, powder, and water in proportion, stir with a mixer for 5-10 minutes until uniform, then spray until the corresponding thickness is reached."
],
packagingAndTransportation: [
"1. This product is transported as general cargo.",
"2. The powder of this product should be protected from rain, and the liquid should be protected from freezing and sun exposure. It should be stored in a cool, ventilated, and dry environment."
]
  }
];



export const steelStructureProducts: Product[] = steelStructureProductsMap.map(product => ({
  ...product,
    description: (product.fullDescription ? product.fullDescription.substring(0, 100) + '...' : ''),
    category: 'steel-structure',
    labels: ['Source Manufacturer', 'Stable Supply', 'Fast Delivery'],
}));
