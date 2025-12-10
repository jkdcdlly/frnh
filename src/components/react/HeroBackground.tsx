import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// 定义图片接口
interface HeroImage {
  src: string;
  alt: string;
}

interface HeroBackgroundProps {
  images: HeroImage[];
  interval?: number; // 切换间隔，默认 5000ms
}

export default function HeroBackground({ images, interval = 5000 }: HeroBackgroundProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode='popLayout'>
        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }} // 淡入淡出时间
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      
      {/* 遮罩层保持不变，放在图片上面 */}
      <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50 z-10"></div>
    </div>
  );
}