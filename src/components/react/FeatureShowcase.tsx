import { useState, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, animate } from 'motion/react';
import { Warehouse, Truck, Package, BarChart3, Shield, Headphones, ChevronLeft, ChevronRight } from 'lucide-react';

import warehouseImg from '@assets/防火封堵材料/防火封堵材料-L型防火隔板.jpg';
import truckImg from '@assets/photo-1601584115197-04ecc0da31d7.jpg';
import packageImg from '@assets/photo-1581091226825-a6a2a5aee158.jpg';
import barChart3Img from '@assets/photo-1551288049-bebda4e38f71.jpg';
import shieldImg from '@assets/photo-1563013544-824ae1b704d3.jpg';
import headphonesImg from '@assets/photo-1486312338219-ce68d2c6f44d.jpg';

import fanghuo1 from '@assets/防火封堵材料/防火封堵材料-电缆防火涂料.jpg';
import fanghuo2 from '@assets/防火封堵材料/防火封堵材料-多组分封堵材料1.jpg';
import fanghuo3 from '@assets/防火封堵材料/防火封堵材料-防爆胶泥.jpg';
import fanghuo4 from '@assets/防火封堵材料/防火封堵材料-防火槽盒.jpg';
import fanghuo5 from '@assets/防火封堵材料/防火封堵材料-防火密封胶.jpg';
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

// 原始数据 (6个)
const originalFeatures = [
  {
    icon: Warehouse,
    // title: 'Advanced Warehousing',
    // description: 'Climate-controlled facilities with automated inventory systems.',
    image: fanghuo1,
  },
  {
    icon: Truck,
    title: 'Fast Transportation',
    description: 'Multi-modal logistics network ensuring rapid delivery.',
    image: fanghuo2,
  },
  {
    icon: Package,
    title: 'Quality Manufacturing',
    description: 'ISO-certified production with precision engineering.',
    image: fanghuo3,
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Complete supply chain visibility with advanced tracking.',
    image: fanghuo4,
  },
  {
    icon: Shield,
    title: 'Secure Operations',
    description: 'Industry-leading security protocols protecting assets.',
    image: fanghuo5,
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated teams available around the clock.',
    image: fanghuo6,
  },
    {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated teams available around the clock.',
    image: fanghuo7,
  },
    {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated teams available around the clock.',
    image: fanghuo8,
  },
    {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated teams available around the clock.',
    image: fanghuo9,
  },
    {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated teams available around the clock.',
    image: fanghuo10,
  },
    {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated teams available around the clock.',
    image: fanghuo11,
  },
    {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated teams available around the clock.',
    image: fanghuo12,
  },
    {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated teams available around the clock.',
    image: fanghuo13,
  },
    {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated teams available around the clock.',
    image: fanghuo14,
  },
    {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated teams available around the clock.',
    image: fanghuo15,
  },
];

// 扩充数据：复制一份以实现无缝滚动 (6 -> 12)
const features = [...originalFeatures, ...originalFeatures];
// const features = [...originalFeatures];

export default function FeatureShowcase() {
  const x = useMotionValue(0);
  // 使用 ref 来追踪精确位置，避免依赖 x.get() 带来的潜在延迟或冲突
  const xRef = useRef(0);
  // 标记是否正在进行手动滚动动画
  const isAnimating = useRef(false);
  const [isHovered, setIsHovered] = useState(false);

  // 配置参数
  const CARD_WIDTH = 300;
  const GAP = 32;
  const TOTAL_ITEM_WIDTH = CARD_WIDTH + GAP;
  const HALF_CONTENT_WIDTH = TOTAL_ITEM_WIDTH * originalFeatures.length;

  // 每一帧都会执行的动画循环
  useAnimationFrame((time, delta) => {
    // 如果鼠标悬停 或 正在进行手动动画，则停止自动滚动逻辑
    if (isHovered || isAnimating.current) return;

    // 移动速度：0.05px/ms
    const speed = 0.05; 
    
    // 基于 ref 更新位置
    xRef.current -= speed * delta;

    // 无限循环逻辑：边界检查
    if (xRef.current <= -HALF_CONTENT_WIDTH) {
      xRef.current = 0;
    }
    if (xRef.current > 0) {
      xRef.current = -HALF_CONTENT_WIDTH;
    }

    // 同步给 MotionValue
    x.set(xRef.current);
  });

  // 处理手动点击箭头
  const handleManualScroll = (direction: 'left' | 'right') => {
    // 如果正在动画中，忽略点击，防止连点导致计算错误
    if (isAnimating.current) return;

    isAnimating.current = true;
    
    const currentX = xRef.current;
    const targetX = direction === 'left' ? currentX + TOTAL_ITEM_WIDTH : currentX - TOTAL_ITEM_WIDTH;
    
    animate(x, targetX, { 
      duration: 0.5, 
      ease: "circOut",
      onUpdate: (latest) => {
        // 关键：在手动动画过程中，必须实时更新 xRef，否则动画结束后自动滚动会跳回旧位置
        xRef.current = latest;

        // 同样需要边界检查，实现无缝切换
        if (latest <= -HALF_CONTENT_WIDTH) {
          x.set(latest + HALF_CONTENT_WIDTH);
          xRef.current = latest + HALF_CONTENT_WIDTH;
        }
        if (latest > 0) {
          x.set(latest - HALF_CONTENT_WIDTH);
          xRef.current = latest - HALF_CONTENT_WIDTH;
        }
      },
      onComplete: () => {
        isAnimating.current = false;
      }
    });
  };

  return (
    <div 
      className="relative w-full overflow-hidden py-8 group/container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 渐变遮罩 */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-linear-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-linear-to-l from-white to-transparent pointer-events-none" />

      {/* 左箭头按钮 */}
      <button 
        onClick={() => handleManualScroll('left')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all opacity-0 group-hover/container:opacity-100 hover:scale-110 cursor-pointer border border-slate-100"
        aria-label="Scroll Left"
      >
        <ChevronLeft className="w-6 h-6 text-slate-800" />
      </button>
      
      {/* 右箭头按钮 */}
      <button 
        onClick={() => handleManualScroll('right')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all opacity-0 group-hover/container:opacity-100 hover:scale-110 cursor-pointer border border-slate-100"
        aria-label="Scroll Right"
      >
        <ChevronRight className="w-6 h-6 text-slate-800" />
      </button>

      {/* 滚动轨道 */}
      <motion.div
        className="flex gap-8 w-max px-4"
        style={{ x }} 
      >
        {features.map((feature, index) => (
          <div
            key={`${feature.title}-${index}`}
            className="relative w-[300px] shrink-0 group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-[400px]">
              {/* Image */}
              <div className="relative h-full overflow-hidden">
                <img
                  src={feature.image.src}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async" // 异步解码，防止阻塞主线程导致动画卡顿
                />
                {/* <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" /> */}
                
                {/* Icon overlay */}
                {/* <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg z-10">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div> */}
              </div>

              {/* Content */}
              {/* <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-200 opacity-90">{feature.description}</p>
              </div> */}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}