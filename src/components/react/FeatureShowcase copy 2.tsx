import { useState } from 'react';
import { motion, useMotionValue, useAnimationFrame, animate } from 'motion/react';
import { Warehouse, Truck, Package, BarChart3, Shield, Headphones, ChevronLeft, ChevronRight } from 'lucide-react';

import warehouseImg from '@assets/photo-1553413077-190dd305871c.jpg';
import truckImg from '@assets/photo-1601584115197-04ecc0da31d7.jpg';
import packageImg from '@assets/photo-1581091226825-a6a2a5aee158.jpg';
import barChart3Img from '@assets/photo-1551288049-bebda4e38f71.jpg';
import shieldImg from '@assets/photo-1563013544-824ae1b704d3.jpg';
import headphonesImg from '@assets/photo-1486312338219-ce68d2c6f44d.jpg';

// 原始数据 (6个)
const originalFeatures = [
  {
    icon: Warehouse,
    title: 'Advanced Warehousing',
    description: 'Climate-controlled facilities with automated inventory systems.',
    image: warehouseImg,
  },
  {
    icon: Truck,
    title: 'Fast Transportation',
    description: 'Multi-modal logistics network ensuring rapid delivery.',
    image: truckImg,
  },
  {
    icon: Package,
    title: 'Quality Manufacturing',
    description: 'ISO-certified production with precision engineering.',
    image: packageImg,
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Complete supply chain visibility with advanced tracking.',
    image: barChart3Img,
  },
  {
    icon: Shield,
    title: 'Secure Operations',
    description: 'Industry-leading security protocols protecting assets.',
    image: shieldImg,
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated teams available around the clock.',
    image: headphonesImg,
  },
];

// 扩充数据：复制一份以实现无缝滚动 (6 -> 12)
const features = [...originalFeatures, ...originalFeatures];

export default function FeatureShowcase() {
  // 使用 MotionValue 来驱动 X 轴位移，这样可以随时读取和修改它
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  // 配置参数
  const CARD_WIDTH = 300;
  const GAP = 32;
  const TOTAL_ITEM_WIDTH = CARD_WIDTH + GAP;
  // 一半的总宽度（即原始6个数据的宽度），这是循环的临界点
  const HALF_CONTENT_WIDTH = TOTAL_ITEM_WIDTH * originalFeatures.length;

  // 每一帧都会执行的动画循环
  useAnimationFrame((time, delta) => {
    // 如果鼠标悬停，则不更新位置（实现暂停）
    if (isHovered) return;

    // 移动速度：0.05px/ms (约等于 3秒移动一个卡片)
    const speed = 0.05; 
    let newX = x.get() - (speed * delta);

    // 无限循环逻辑：
    // 1. 向左滚动超过一半时，瞬间重置回 0
    if (newX <= -HALF_CONTENT_WIDTH) {
      newX = 0;
    }
    // 2. 向右滚动超过 0 时（比如点了左箭头），瞬间重置回 -HALF_CONTENT_WIDTH
    if (newX > 0) {
      newX = -HALF_CONTENT_WIDTH;
    }

    x.set(newX);
  });

  // 处理手动点击箭头
  const handleManualScroll = (direction: 'left' | 'right') => {
    const currentX = x.get();
    // 点击一次移动一个卡片的距离
    const targetX = direction === 'left' ? currentX + TOTAL_ITEM_WIDTH : currentX - TOTAL_ITEM_WIDTH;
    
    // 使用 animate 平滑过渡到新位置
    animate(x, targetX, { 
      duration: 0.5, 
      ease: "circOut",
      onUpdate: (latest) => {
        // 在手动动画过程中也要检查边界，防止出现空白
        if (latest <= -HALF_CONTENT_WIDTH) x.set(latest + HALF_CONTENT_WIDTH);
        if (latest > 0) x.set(latest - HALF_CONTENT_WIDTH);
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
        style={{ x }} // 将 MotionValue 绑定到 style.x
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
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
                
                {/* Icon overlay */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg z-10">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-200 opacity-90">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}