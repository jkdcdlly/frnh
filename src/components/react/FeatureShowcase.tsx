import { useState, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, animate } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getLocalizedPath } from '@/i18n/utils';

import { steelStructureProducts as zhSteelStructure } from '@/data/products/zh/steel-structure';
import { steelStructureProducts as enSteelStructure } from '@/data/products/en/steel-structure';
import { steelStructureProducts as viSteelStructure } from '@/data/products/vi/steel-structure';
// 原始数据 (6个)

// 建立语言映射
const productsMap = {
  zh: zhSteelStructure,
  en: enSteelStructure,
  vi: viSteelStructure,
} as const;

// 定义支持的语言类型为 productsMap 的键
type Language = keyof typeof productsMap;

// 定义 Props 接口
interface FeatureShowcaseProps {
  // 使用更通用且类型安全的写法
  lang?: Language;
}
import { defaultLang } from '@/i18n/ui';

export default function FeatureShowcase({ lang = defaultLang }: FeatureShowcaseProps) {
  // 根据传入的 lang 获取对应的数据，默认为 en
  const currentProducts = productsMap[lang] ?? productsMap.en;

  // 扩充数据：复制一份以实现无缝滚动
  const features = [...currentProducts, ...currentProducts];
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
  const HALF_CONTENT_WIDTH = TOTAL_ITEM_WIDTH * currentProducts.length;

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
                 <a 
                    href={getLocalizedPath(`/products/detail/${feature.slug}`, lang)} 
                    
                    // 防止拖拽时触发点击（如果以后加拖拽的话），目前可以直接点击
                    draggable={false}
                  >
                <img
                  src={feature.image.src}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 border border-blue-200 border-4"
                  loading="lazy"
                  decoding="async" // 异步解码，防止阻塞主线程导致动画卡顿
                /></a>
                {/* <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" /> */}
                
                {/* Icon overlay */}
                {/* <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg z-10">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div> */}
              </div>
              
              {/* <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10 backdrop-blur-sm bg-blue-700/70 rounded-b-lg"> */}
                {/* <h3 className="text-2xl font-bold mb-2">{feature.title}</h3> */}
                {/* <p className="text-sm text-gray-900 opacity-90">{feature.description}</p> */}
              {/* </div> */}
            </div>

                <div className="mt-4 px-4">
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-900 opacity-90">{feature.description}</p>
              </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

