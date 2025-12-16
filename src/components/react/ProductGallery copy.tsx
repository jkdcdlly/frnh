import { useState, useEffect,useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  mainImage: ImageMetadata;
  images?: ImageMetadata[];
  title: string;
}

interface ImageMetadata {
  src: string;
  width: number;
  height: number;
  format: string;
}

export default function ProductGallery({ mainImage, images = [], title }: ProductGalleryProps) {
  const galleryImages = images.length > 0 ? images : [mainImage, mainImage, mainImage, mainImage];
  
  // 使用 useEffect 确保当 props 改变时（例如切换产品），重置选中图片
  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);
  // 新增状态：是否支持 hover
  const [canHover, setCanHover] = useState(false);
   // 检测设备是否支持 hover
  useEffect(() => {
    // 媒体查询：(hover: hover) 表示主输入设备支持悬停（通常是鼠标）
    const mediaQuery = window.matchMedia('(hover: hover)');
    setCanHover(mediaQuery.matches);

    // 监听变化（例如用户连接了鼠标）
    const handler = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div className="flex flex-col h-full">
      {/* 大图显示区域 */}
      <div className="relative h-64 sm:h-80 lg:h-140 bg-slate-100 rounded-xl overflow-hidden mb-4 border border-slate-200">
        <AnimatePresence mode="wait">
          <motion.img
            // 使用 src 作为 key，确保图片切换时触发动画
            key={selectedImage.src}
            src={selectedImage.src}
            alt={title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* 缩略图列表 */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide bg-slate-100 px-1">
        {galleryImages.map((img, index) => (
          <button
            key={`${img.src}-${index}`}
            // 修改：同时支持点击和鼠标悬停，但在移动端主要靠点击
            onClick={() => setSelectedImage(img)}
            // 保留 PC 端悬停切换体验，但添加简单的防抖或直接使用
            onMouseEnter={() => canHover && setSelectedImage(img)}
            className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
              // 比较 src 来判断是否选中，而不是比较对象引用
              selectedImage.src === img.src
                ? 'border-blue-600 ring-2 ring-blue-100 opacity-100'
                : 'border-slate-200 hover:border-blue-400 opacity-70 hover:opacity-100'
            }`}
            type="button" // 明确指定按钮类型，防止在表单中意外提交
            aria-label={`View image ${index + 1}`}
          >
            <img
              src={img.src}
              alt=""
              className="w-full h-full object-cover"
              draggable={false} // 防止拖拽图片
            />
          </button>
        ))}
      </div>
    </div>
  );
}