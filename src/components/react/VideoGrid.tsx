import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface VideoItem {
  id: string;
  title: string;
  thumbnail: string; // 封面图 URL
  videoUrl: string;  // 视频 URL (可以是本地路径或 YouTube/Vimeo 链接)
  description?: string;
}

interface VideoGridProps {
  videos: VideoItem[];
}

export default function VideoGrid({ videos }: VideoGridProps) {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <>
      {/* 视频网格列表 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div key={video.id} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300">
            {/* 封面图区域 */}
            <div 
              className="relative aspect-video cursor-pointer overflow-hidden"
              onClick={() => setSelectedVideo(video)}
            >
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* 播放按钮遮罩 */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-blue-600 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
            
            {/* 文字内容 */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-1">{video.title}</h3>
              {video.description && (
                <p className="text-slate-600 text-sm line-clamp-2">{video.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 视频播放弹窗 */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl bg-black rounded-xl overflow-hidden shadow-2xl aspect-video"
              onClick={(e) => e.stopPropagation()} // 防止点击视频区域关闭弹窗
            >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <video 
                src={selectedVideo.videoUrl} 
                controls 
                autoPlay 
                className="w-full h-full"
              >
                Your browser does not support the video tag.
              </video>
              {/* 如果是 YouTube 视频，可以使用 iframe 替换上面的 video 标签 */}
              {/* <iframe 
                src={selectedVideo.videoUrl} 
                className="w-full h-full" 
                allow="autoplay; encrypted-media" 
                allowFullScreen 
              /> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}