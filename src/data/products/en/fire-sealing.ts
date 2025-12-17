import { Warehouse, Truck, Package, BarChart3, Shield, Headphones } from 'lucide-react';
import fanghuo01 from '@/assets/产品图片/防火封堵材料/电缆防火涂料1.jpg';
import fanghuo02 from '@/assets/产品图片/防火封堵材料/多组分封堵材料1.jpg';
import fanghuo03 from '@/assets/产品图片/防火封堵材料/防爆胶泥1.jpg';
import fanghuo04 from '@/assets/产品图片/防火封堵材料/防火槽盒.jpg';
import fanghuo05 from '@/assets/产品图片/防火封堵材料/防火密封胶1.jpg';
import fanghuo06 from '@/assets/产品图片/防火封堵材料/防火涂层板1.jpg';
import fanghuo07 from '@/assets/产品图片/防火封堵材料/复合防火金属板.png';
import fanghuo08 from '@/assets/产品图片/防火封堵材料/柔性有机堵料1.jpg';
import fanghuo09 from '@/assets/产品图片/防火封堵材料/阻火包.jpg';
import fanghuo10 from '@/assets/产品图片/防火封堵材料/无机堵料.jpg';
import fanghuo11 from '@/assets/产品图片/防火封堵材料/无机防火隔板.png';
import fanghuo12 from '@/assets/产品图片/防火封堵材料/有机防火板1.jpg';
import fanghuo13 from '@/assets/产品图片/防火封堵材料/自粘性防火包带1.jpg';
import fanghuo14 from '@/assets/产品图片/防火封堵材料/阻火模块1.jpg';
import fanghuo15 from '@/assets/产品图片/防火封堵材料/L型防火隔板.png';
// Define interface (can also be extracted to a separate types file)
import type { Product } from '../types';

export const capabilities = [
  {
    title: 'Warehousing & Storage',
    description: 'State-of-the-art warehousing facilities equipped with advanced inventory management systems, climate control, and 24/7 security.',
    icon: `<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>`,
    image: fanghuo14,
    features: [
      'Climate-controlled storage',
      'Automated inventory tracking',
      'Cross-docking capabilities',
      'Hazmat certified facilities',
      'Real-time stock visibility'
    ]
  }
];

const rawProducts: Product[] = [
  {
    slug: 'fanghuo-1',
    title: 'Cable Fireproof Coating',
    category: 'fire-sealing',
    category_id: 'fire-sealing-materials',
    
    fullDescription: "Generally composed of tert-acrylic emulsion water-based materials with various fire retardants, plasticizers, etc. When the coating is exposed to fire, it can generate a uniform and dense sponge-like foam heat insulation layer, which can effectively inhibit and block the spread and spread of flames, and protect wires and cables. The development of cable fireproof coating products in China began in the late 1970s and early 1980s. It was developed on the basis of decorative fireproof coatings combined with its own requirements. Its physical and chemical properties and weather resistance are good, the coating is thin, and it can generate a uniform and dense sponge-like foam heat insulation layer when exposed to fire, which has significant heat insulation and fire protection effects, thereby achieving the purpose of protecting cables, preventing flame spread, and preventing the occurrence and development of fires. Cable fireproof coating is composed of tert-acrylic emulsion water-based materials with various fire retardants, plasticizers, etc. When the coating is exposed to fire, it can generate a uniform and dense sponge-like foam heat insulation layer, which can effectively inhibit and block the spread and spread of flames, and protect wires and cables. Cable fireproof coating is a new type of fireproof coating successfully developed according to the GB28374-2012 national standard. It is currently a relatively advanced special water-based fireproof coating for wires and cables in China.",
    image: fanghuo01,
    icon: Warehouse,
    specs: {
      "Standard": "GB28374－2012",
    },
    application: "Suitable for flame retardant treatment of wires and cables in power plants, industrial and mining enterprises, telecommunications and civil buildings, and can also be used for fire protection of combustible substrates such as wooden structures and metal structures.",
    usage: [
      "1. Before construction of cable fireproof coating, the surface of the cable should be cleaned of floating dust, oil, debris, etc., and polished. Construction can proceed after the surface is dry.",
      "2. Cable fireproof coating is applied by spraying, brushing, etc. Stir well before use. If the coating is slightly thick, it can be diluted with an appropriate amount of tap water to facilitate spraying.",
      "3. During the construction process and before the coating is dry, it should be waterproof, sun-proof, pollution-proof, movement-proof, and bending-proof. If damaged, repair it in time.",
      "4. For wires and cables with plastic or rubber sheaths, generally apply directly more than 5 times, with a coating thickness of 0.5-1mm and a usage of about 1.5kg/m. For insulated cables wrapped with oil paper, a layer of glass fiber cloth should be wrapped first, and then painted. If construction is carried out outdoors or in a humid environment, a matching topcoat varnish should be added."
    ]
  },
  {
    slug: 'fanghuo-2',
    title: 'Multi-component Sealing Material',
    category: 'fire-sealing',
    
    fullDescription: 'Multi-component sealing materials are usually composed of two or more different components, prepared through specific processes, and have excellent sealing, weather resistance, chemical corrosion resistance, and mechanical strength. They are widely used in petroleum, chemical, construction, transportation, and other fields. The composition of multi-component sealing materials is complex and diverse, usually including matrix materials, fillers, plasticizers, curing agents, catalysts, and other components. The matrix material is the main skeleton of the sealing material, determining the basic properties of the material; fillers are used to enhance the mechanical properties of the material and reduce costs; plasticizers can improve the processing performance and flexibility of the material; curing agents and catalysts control the curing speed and performance development of the material. The preparation process of multi-component sealing materials usually includes raw material preparation, mixing, molding, curing, and other steps. The raw material preparation stage requires precise control of the proportion and quality of each component to ensure stable and reliable material performance. The mixing stage is to mix various raw materials uniformly in a certain proportion to form a uniform mixture. The molding stage is to process the mixture into the required shape and size. Finally, through the action of the curing agent, the mixture gradually cures into a multi-component sealing material with excellent performance.',
    image: fanghuo02,

    applications: [
      "1. Petroleum and chemical industry: In the petroleum and chemical industry, multi-component sealing materials are widely used for sealing and repairing pipelines, storage tanks, valves, and other equipment. They can effectively prevent oil and gas leakage and environmental pollution, ensuring production safety.",
      "2. Construction industry: In the construction industry, multi-component sealing materials are used for sealing and waterproofing of walls, floors, roofs, and other parts. They can effectively prevent the penetration and leakage of rainwater, groundwater, and other moisture, ensuring the structural safety and service life of buildings.",

      "3. Transportation industry: In the transportation industry, multi-component sealing materials are used for waterproofing and sealing of bridges, tunnels, subways, and other projects. They can withstand the pressure and impact loads of vehicles and pedestrians, while having good weather resistance and chemical corrosion resistance.",

      "4. Other fields: In addition to the above fields, multi-component sealing materials are also widely used in electric power, environmental protection, military, and other fields. They play an important role in these fields, providing reliable sealing and plugging solutions for various equipment and projects."
    ],
    highlights: [
      "1. Excellent sealing: Multi-component sealing materials have excellent sealing performance and can effectively prevent the penetration and leakage of liquids, gases, and solid particles. This is due to their unique composition and preparation process, which enables the material to form a dense microstructure inside, thereby achieving efficient sealing effects.",
      "2. Good weather resistance and chemical corrosion resistance: Multi-component sealing materials usually have good weather resistance and chemical corrosion resistance, and can maintain stable performance for a long time under harsh environmental conditions. This makes them widely used in petroleum, chemical, and other industries.",
      "3. Excellent mechanical strength: Multi-component sealing materials have high mechanical strength and can withstand certain pressure and impact loads. This gives them broad application prospects in construction, transportation, and other fields.",
      "4. Adjustable curing speed and performance: By adjusting the amount and type of curing agent and catalyst, the curing speed and performance of multi-component sealing materials can be adjusted. This allows the material to adapt to different construction and usage needs."
    ]
  },
  {
    slug: 'fanghuo-3',
    title: 'Explosion-proof Mastic',
    category: 'fire-sealing',
    
    fullDescription: 'Explosion-proof mastic is a deep black mastic-like sealing material made from a variety of German imported high-polymer polymers, additives, and plasticizers through a special process. This product is widely used in explosive hazardous places such as national defense, petrochemicals, and substations for explosion-proof isolation and sealing of cable wiring projects, effectively preventing fire spread. It has properties such as high and low temperature resistance (-50℃ to 90℃), impact resistance, flame retardancy, and non-transmission of explosion, as well as excellent air tightness and oil resistance. When used with fire barrier tape during construction, the sealing effect can be enhanced, and it is easy to store with a shelf life of up to two years.',
    image: fanghuo03,
    icon: Package, 
   specs: {
    "Heat resistance":"No flow, no blistering at 90℃",
"Cold resistance":"Maintain physical stability in -50℃ environment",
"Plasticity":"Extension thickness can reach 5-10 mm",
"Sealing":"Withstand 50Kpa water pressure test for one minute without leakage",
"Explosion-proof":"Verified not to transmit explosion by 32% mixed argon gas explosion transmission test", 
"Dielectric strength":"2.5mm thick sample can withstand 4KV AC voltage for one minute"
   }
  },
  {
    slug: 'fanghuo-4',
    title: 'Fireproof Cable Tray',
    category: 'fire-sealing',
    
    fullDescription: 'Fireproof cable tray has good heat insulation, fire resistance, corrosion resistance, and wide application environment performance. It also has the characteristics of light weight, large load-bearing capacity, safety, and reliability. Technically, it reaches the domestic advanced level. After the fireproof cable tray is used, if the cable inside the box catches fire, it can self-extinguish due to lack of oxygen caused by the closed nature of its own structure. External fires will not affect the cables inside the box due to the non-combustibility of the cable tray material. Fireproof cable tray is safe, reliable, and easy to install. It can be sawed, drilled, planed, and other mechanical processing. It is suitable for fire separation during cable laying and is an ideal material for effectively preventing flame spread when cables catch fire.',
    image: fanghuo04,
    icon: BarChart3, 
    specs: {
"Fire-resistant fully enclosed cable tray":"Suitable for laying power cables below 10KV, as well as control cables, lighting wiring, etc. in indoor and outdoor overhead cable trenches and tunnels.",
"Fire-resistant semi-enclosed cable tray":"Can withstand flame roasting, and the temperature inside the tray can be limited within the allowable value for safe cable operation. The box cover is a double-layer cover plate.",
"Fire-resistant cable tray for cable tunnels":"Can be widely used in tunnels, underground public facilities, etc.",
"Fire-resistant inorganic cable tray":"Composed of inorganic materials and reinforced glass fiber, the fire-resistant structure is fully enclosed, effectively preventing cable spontaneous combustion and external fire hazards."
    },
  },
  {
    slug: 'fanghuo-5',
    title: 'Fireproof Sealant',
    category: 'fire-sealing',
    
    fullDescription: 'Fireproof sealant is a sealing material used for plugging, with dual properties of sealing and fire protection, belonging to measure-type fireproof materials. Fireproof sealant is a polymer plastic material, so its fire rating is often evaluated using "Plastics - Determination of burning behaviour by oxygen index" (GB23864-2023) and "Plastics - Determination of burning behaviour by horizontal and vertical specimens" (GB23864-2023). Oxygen index refers to the minimum oxygen content required for a solid sample to maintain equilibrium combustion in a mixed gas flow of oxygen and nitrogen under specified conditions, expressed as a volume percentage of oxygen. When evaluating using the oxygen index (OI), GB23864-2023 should be used for sample testing to calculate and determine the oxygen index. The correspondence between the oxygen index (OI) of the material and its flame retardancy is as follows: OI > 36 is high flame retardancy. Fireproof glue is a sealing glue for building fire protection, with low hardness, self-adhesiveness, and good fire resistance. It is mainly used for bonding and sealing various fire doors and windows, flame retardant sealing of curtain wall projects; flame retardant sealing of various door and window glass installations; waterproof, moisture-proof, decorative and other flame retardant sealing in public places such as hotels, guesthouses, and theaters. Intumescent fireproof sealant is mainly used for sealing single or small-sized bundled cable penetration holes and filling gaps between cables. Elastic fireproof sealant is mainly used for fireproof sealing of building joints (such as curtain wall gaps).',
    image: fanghuo05,
    icon: Shield,
    application: "Fireproof sealant is mainly used for fire plugging of penetration holes for cables, pipes, etc. in buildings to prevent flames and harmful gases from spreading to other areas through penetration holes during a fire. At the same time, fireproof sealant can also be used for sealing fire doors, windows, curtain walls, etc. of buildings to improve overall fire performance.",
    specs: {
      "Standard": "GB23864-2023"

    },
    usage: [
      "1. Clean dust, oil, and other impurities around the penetration hole to ensure the surface is dry and clean.",
      "2. Select the appropriate specification of fireproof sealant for construction according to the size and shape of the penetration hole.",
      "3. Use special tools to fill the fireproof sealant evenly into the penetration hole, ensuring that the sealant is tightly combined with the hole wall without gaps.",
      "4. For larger penetration holes, fireproof sealant can be filled in layers. The thickness of each layer should not be too large to ensure the sealing effect.",
      "5. After filling, use a scraper or trowel to smooth the surface of the sealant to ensure aesthetics.",
      "6. After the fireproof sealant is completely cured, check to ensure that the sealing effect meets the requirements. Repair if necessary."
    ]
  },
  {
    slug: 'fanghuo-6',
    title: 'Fireproof Coated Board',
    category: 'fire-sealing',
    
    fullDescription: 'Fireproof coated board is a board used for cable fire protection in power, petroleum, construction, and other industries. It adopts a composite structure of rock wool board matrix material and double-sided fireproof coating layer. The product expands when exposed to fire to form a flame retardant layer, releasing harmless and halogen-free gases. It has the characteristics of long fire resistance time (some exceeding 5 hours), strong corrosion resistance, and convenient installation. Widely used in cable trench fire protection projects and electrical panel cabinet hole plugging.',
    image: fanghuo06,
    icon: Headphones,
    application: "Suitable for cable penetration hole plugging in power facilities, petrochemicals, and construction industries, especially suitable for fire protection of cable trays, electrical panel cabinets, and lightweight partition walls.",
    specs: {
      "Standard": "GB23864-2023",
      "Fire performance": "Fire integrity and heat insulation are both ≥ 2 hours (A2 level, some products have a fire resistance limit of 2 hours, and the highest fire resistance temperature is 1580-1770℃).",
      "Environmental characteristics": "Gases released upon expansion when exposed to fire are halogen-free and harmless.",
      "Physical properties": "Area density 8kg/m2, bending strength ≥ 0.10MPa, water resistance, oil resistance, acid and alkali resistance, 30-year long-term fire performance"

    },

  },
  {
    slug: 'fanghuo-7',
    title: 'Composite Fireproof Metal Board',
    category: 'fire-sealing',
    
    fullDescription: 'Intumescent metal composite fireproof board is an innovative building material that combines a metal substrate with a special fireproof coating, designed specifically for modern building fire safety. Its core principle is to form a dense carbonized layer through expansion when exposed to fire, blocking the spread of flames, high temperatures, and toxic gases, gaining valuable time for personnel evacuation and fire rescue.',
    image: fanghuo07,
    icon: Headphones,
    application: "The product is widely used in scenarios such as building exterior walls, indoor partitions, cable tray plugging, and pipe penetration hole protection, combining multiple functions such as fire protection, weather resistance, light weight, and decoration.",
  },
  {
    slug: 'fanghuo-8',
    title: 'Flexible Organic Plugging Material (Plastic Type)',
    category: 'fire-sealing',
    
    fullDescription: 'Organic fireproof plugging material is a new product successfully developed by our company according to the GB23864-2023 standard. It has the characteristics of high fire resistance limit and low smoke emission. The product also has good plasticity, acid resistance, alkali resistance, and corrosion resistance. Construction and maintenance are relatively convenient, and it can be used in combination with other sealing materials (such as fire barrier pillows, etc.). Organic fireproof plugging material is suitable for hole plugging when wires and cables penetrate walls in industrial and mining enterprises, high-rise buildings, shipbuilding, metallurgy, power generation, and posts and telecommunications, to prevent flames from spreading from the hole to the adjacent room when a fire occurs.',
    specs: {
      "Standard": "GB23864-2023"
    },
    application: "Suitable for hole plugging when wires and cables penetrate walls in industrial and mining enterprises, high-rise buildings, shipbuilding, metallurgy, power generation, and posts and telecommunications, to prevent flames from spreading from the hole to the adjacent room when a fire occurs.",
    image: fanghuo08,
    icon: Headphones, features: [
      'Non-toxic, odorless, non-corrosive',
      'Water resistance, oil resistance, damp heat resistance',
      'Freeze-thaw cycle resistance',
      'Expansion controlled within a local range',
      'Fire resistance limit up to 180min or more (when plugging thickness is 200mm)'
    ],
  },
  {
    slug: 'fanghuo-9',
    title: 'Fire Barrier Pillow',

    category: 'fire-sealing',
    
    fullDescription: 'Fire barrier pillow is a fireproof supporting refractory material developed by our company. The shape of the fire barrier pillow is like a small pillow. The outer layer is made of treated glass fiber cloth, and the inside is filled with a mixture of inorganic non-combustible materials and special additives. The product is non-toxic, odorless, non-corrosive, water-resistant, oil-resistant, damp-heat resistant, freeze-thaw cycle resistant, and expansion is controlled within a local range. When the plugging thickness reaches 200mm, the fire resistance limit can reach more than 180min.',
    image: fanghuo09,

    specs: {
      "Standard": "GB23864-2023"
    },
    application: "Suitable for fire plugging in electric power, telecommunications, postal services, chemicals, industrial and mining enterprises, construction, and underground engineering, as well as plugging of holes formed when various penetrations such as cables, oil pipes, air ducts, and metal pipes pass through partition walls or floors. It can prevent flame spread and is suitable for important parts where cables are frequently replaced.",
    usage: [
      "1. Clean the holes as necessary and embed the fire barrier pillows flatly into the gaps of the cables. When stacking fire barrier pillows, they should be crossed, dense and firm, and it is qualified if no light is seen on both sides.",
      "2. When building a fire barrier wall in a cable trench, use brick piers at the bottom of the fire barrier wall and leave drainage holes. At the same time, fix both sides of the fire barrier wall with fireproof partition boards to prevent collapse.",
      "3. Fire barrier pillows are easy to install and construct, can be reused, and can also be used as temporary isolation measures for fire sources at construction sites.",
      "4. Fire barrier pillows are generally used in conjunction with flexible organic plugging materials and fireproof partition boards. When the plugging thickness reaches 200mm or more, the fire resistance limit can reach more than 180min.",
    ],
    precautions: [
      "1. The inner packaging of this product is a polyethylene plastic bag, the outer is a fireproof cloth bag, and then packaged in a woven bag. Common specifications are 720 type, 400 type, 250 type, and other specifications can be processed according to user requirements.",
      "2. During transportation, this product should avoid hooking and rain, and should be stored in a cool and dry place.",
      "3. The effective storage period of the product is 1 year."
    ]
  },
  {
    slug: 'fanghuo-10',
    title: 'Inorganic Plugging Material',
    category: 'fire-sealing',
    
    fullDescription: 'Inorganic plugging material is a new product successfully developed by our company according to the GB23864-2023 (Fire Stopping Material) national standard. Inorganic plugging material is a uniform powder with flame retardant and freeze-thaw cycle resistance characteristics. It is easy to construct. After mixing with a certain proportion of water, it can cure quickly to form a solid fire-blocking and heat-insulating layer, thereby achieving the purpose of fire prevention, fire blocking, and preventing flame spread.',
    image: fanghuo10,
    icon: Headphones, features: [
      'Non-toxic, odorless, non-corrosive',
      'Water resistance, oil resistance, damp heat resistance',
      'Freeze-thaw cycle resistance',
      'Expansion controlled within a local range',
      'Fire resistance limit up to 180min or more (when plugging thickness is 200mm)'
    ],
    specs: {
      "Standard": "GB23864-2023"
    },
    application: "Suitable for fire plugging in electric power, telecommunications, postal services, chemicals, industrial and mining enterprises, construction, and underground engineering, as well as plugging of holes formed when various penetrations such as cables, oil pipes, wind pipes, gas pipes, and metal pipes pass through walls or floors. It can prevent flame spread, especially suitable for smaller cable penetration holes, gaps, and other irregular holes that are not suitable for plugging with other fire-blocking materials, and parts where cables are replaced frequently.",
    usage: [
      "1. During construction, estimate the amount of plugging material according to the size of the hole to be plugged, then put the plugging material into the container. Determine the plugging thickness according to the construction instructions and needs, generally not less than 15cm.",
      "2. To facilitate construction, use brackets and pallets to separate the cable channels, and remove impurities and oil stains on the surface of the cables.",
      "3. Unused materials after construction must be sealed and placed in a dry warehouse, and the time should not exceed 3 months.",
      "4. Be especially careful of rain and long-term exposure to the sun during transportation and storage. Storage temperature -35℃~45℃ has no effect."
    ],
    packagingAndTransportation: [
      "1. The inner packaging of this product is a polyethylene plastic bag, and the outer is a woven bag.",
      "2. The weight of each bag is 25kg.",
      "3. The effective storage period of the product is 6 months."
    ]
  },
  {
    slug: 'fanghuo-11',
    title: 'Inorganic Fireproof Partition Board',
    category: 'fire-sealing',
    
    fullDescription: 'Inorganic fireproof partition board is also called non-combustible fire barrier board, etc. This board is made of a variety of non-combustible materials through scientific blending and pressing. It has the characteristics of good flame retardancy, high mechanical strength, non-explosive, water resistance, oil resistance, and strong chemical corrosion resistance. In the combustion test of inorganic fireproof partition board (fireproof board), it does not deform when the flame temperature reaches 1000℃. All indicators meet the requirements of GB23864-2023, and the combustion performance reaches the A-level (non-combustible) standard specified in GB8624.',
    image: fanghuo11,
    icon: Headphones,
    application: "Mainly suitable for fire protection and fire separation of cables of various voltage levels when laid on brackets or bridges. It is widely used in fire retardant projects for cable engineering in cable-intensive places such as various power plants, chemical enterprises, steel smelting enterprises, and mines in China. It is also an excellent fire retardant material for indoor decoration fire retardant projects in public places such as large shopping malls, hotels, guesthouses, cultural and sports centers, closed clothing markets, light industrial markets, and theaters.",
    specs: {
      "Standard": "GB23864-2023"
    },
  },
  {
    slug: 'fanghuo-12',
    title: 'Organic Fireproof Board',
    category: 'fire-sealing',
    
    fullDescription: 'Organic fireproof board is a fireproof board made of synthetic resin as the main adhesive and adding various non-combustible materials (such as glass fiber, etc.) through composite pressing. It is specially used for cable fire protection and fire separation scenarios.',
    image: fanghuo12,
    icon: Headphones,
    applications: [
      "Cable engineering fire protection: Used in cable-intensive places such as power plants, substations, and tunnels to prevent fire spread caused by cable short circuits.",
      "Typical installation locations: Including cable shafts, tunnel interfaces, distribution room holes, etc. (refer to cable fire protection design points in search results).",
    ],
    features: [
      "High mechanical strength: Excellent compressive and bending strength, suitable for cable bracket or bridge laying.",
      "Environmental corrosion resistance: Waterproof, oil-resistant, acid and alkali resistant, suitable for harsh environments such as chemicals and steel.",
      "Lightweight and processable: Density is lower than inorganic boards, easy to cut into required shapes, high construction flexibility."
    ],
    specs: {
      "Standard": "GB23864-2023",
      "Fire performance": "Maintain structural integrity for more than 3 hours under 1000℃ flame",
      "Combustion performance": "Meet non-combustible [A1 level] requirements",
    },
    precautions:[
      "Compared with inorganic fireproof boards, its fire resistance limit is slightly lower (inorganic boards usually reach Class A standards), but it still has efficient flame retardant capabilities through resin composite technology."
    ]

  },
  {
    slug: 'fanghuo-13',
    title: 'Self-adhesive Fireproof Tape',
    category: 'fire-sealing',
    
    fullDescription: 'Fireproof tape is a fireproof material wrapped around the outside of the cable, mainly used for fire isolation of large and important cables. When exposed to flame, the fireproof tape expands rapidly to form a carbonized layer, preventing the flame from igniting the combustible materials of the cable, effectively ensuring the safe operation of power transmission and distribution and communication lines. This product is suitable for fire plugging in high temperature, humid environments and gaps between single or bundled cables. During construction, it is usually wrapped around the cable with 1/2 overlap. Wrapping two layers gives better results. Self-adhesive fireproof tape has the characteristics of safety, odorlessness, and convenient construction. It can upgrade the fire rating of non-flame retardant cables to Class A standards, and its life span is synchronized with the cable.',
    image: fanghuo13,
    application: "Suitable for wrapping around various single cables to provide fire isolation protection. When the cable catches fire, the fireproof tape can rapidly expand to form a heat-insulating and oxygen-blocking carbonized layer to isolate the spread of flames. In addition, the product can also provide long-term protection such as waterproofing, acid protection, and pollution protection for cables, and prevent fault arcs from burning adjacent cables.",
  },
  {
    slug: 'fanghuo-14',
    title: 'Fire Barrier Module',
    category: 'fire-sealing',
    
    fullDescription: 'The new fire barrier module is China\'s third-generation fire plugging product. It uses natural occlusion during installation, without the need for glue such as formaldehyde. It is composed of a variety of organic substances, dissolves in the natural environment, and has a long fire resistance time: the fire resistance time of the new fire barrier module has increased to more than 5 hours. The new fire barrier module has no flying smoke, good heat insulation effect, fast heat dissipation, scientific and reasonable design, no falling off, convenient use, and long validity period.',
    image: fanghuo14,
    icon: Headphones, features: [
      'Non-toxic, odorless, non-corrosive',
      'Water resistance, oil resistance, damp heat resistance',
      'Freeze-thaw cycle resistance',
      'Expansion controlled within a local range',
      'Fire resistance limit up to 180min or more (when plugging thickness is 200mm)'
    ],
    highlights: ['No flying smoke, no falling off, good heat insulation effect, fast heat dissipation, scientific and reasonable design, convenient use, long validity period, etc.'],
  },
  {
    slug: 'fanghuo-15',
    title: 'L-shaped Fireproof Partition Board',
    category: 'fire-sealing',
    fullDescription: 'L-shaped fireproof partition board is a fire retardant board made of inorganic materials (such as medium-alkali glass fiber cloth reinforcement), mainly used for fire separation of flammable areas such as cables and pipes.',
    image: fanghuo15,
    icon: Headphones,
    applications: [
      "Cable engineering: Used for fire separation in cable-intensive places such as power plants, chemical enterprises, and steel smelting, effectively preventing cables from spreading horizontally.",
      "Public places: Suitable for indoor decoration projects requiring fire retardancy such as shopping malls, hotels, and cultural and sports centers.",
      "Pipes and equipment: Can plug openings where air ducts, oil pipes, etc. pass through floors or walls to prevent fire spread."
    ],
    constructionMethods: [
      "Installation method: Cut into the required shape with a cutting saw and fix with steel brackets or expansion bolts.",
      "Maintenance requirements: Regularly check whether the fireproof coating falls off and whether the board is damaged."
    ]
  }
];


export const fireSealingProducts: Product[] = rawProducts.map(product => ({
  ...product,
  description: (product.fullDescription ? product.fullDescription.substring(0, 100) + '...' : ''),
  category: 'fire-sealing',
  labels: ['Source Manufacturer', 'Stable Supply', 'Fast Delivery'],
}));
