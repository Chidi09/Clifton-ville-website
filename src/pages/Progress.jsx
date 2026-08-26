import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Image as ImageIcon, Video, ChevronLeft, ChevronRight } from 'lucide-react';

// Import site layout image
import siteLayoutImage from '../assets/site layout.jpg';

// Latest construction images (August 2026)
import imgAug25_1 from '../assets/construction/WhatsApp-Image-2026-08-25-3.13.27-PM.jpeg';
import imgAug25_2 from '../assets/construction/WhatsApp-Image-2026-08-25-3.13.27-PM-1.jpeg';
import imgAug25_3 from '../assets/construction/WhatsApp-Image-2026-08-25-3.13.28-PM.jpeg';
import imgAug25_4 from '../assets/construction/WhatsApp-Image-2026-08-25-3.13.28-PM-1.jpeg';
import imgAug25_5 from '../assets/construction/WhatsApp-Image-2026-08-25-3.14.20-PM.jpeg';
import imgAug25_6 from '../assets/construction/WhatsApp-Image-2026-08-25-3.14.21-PM.jpeg';
import imgAug25_7 from '../assets/construction/WhatsApp-Image-2026-08-25-3.14.21-PM-1.jpeg';
import imgAug25_8 from '../assets/construction/WhatsApp-Image-2026-08-25-3.14.21-PM-2.jpeg';
import imgAug25_9 from '../assets/construction/WhatsApp-Image-2026-08-25-3.14.50-PM.jpeg';

// Latest construction videos (August 2026)
import vidAug25_1 from '../assets/construction/WhatsApp-Video-2026-08-25-3.13.27-PM.mp4';
import vidAug25_2 from '../assets/construction/WhatsApp-Video-2026-08-25-3.13.27-PM-1.mp4';
import vidAug25_3 from '../assets/construction/WhatsApp-Video-2026-08-25-3.14.06-PM.mp4';
import vidAug25_4 from '../assets/construction/WhatsApp-Video-2026-08-25-3.16.04-PM.mp4';

const constructionImages = [
  imgAug25_1,
  imgAug25_2,
  imgAug25_3,
  imgAug25_4,
  imgAug25_5,
  imgAug25_6,
  imgAug25_7,
  imgAug25_8,
  imgAug25_9,
];

// Construction videos
const constructionVideos = [
  vidAug25_1,
  vidAug25_2,
  vidAug25_3,
  vidAug25_4,
];

// Lightbox component for viewing media
const Lightbox = ({ media, type, isOpen, onClose, onNext, onPrev, currentIndex, totalItems }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {/* Previous button */}
          {currentIndex > 0 && (
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Next button */}
          {currentIndex < totalItems - 1 && (
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Media display */}
          <div className="w-full h-full flex items-center justify-center">
            {type === 'image' ? (
              <img
                src={media}
                alt="Construction progress"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            ) : (
              <video
                src={media}
                controls
                autoPlay
                className="max-w-full max-h-[90vh] rounded-lg"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          {/* Counter */}
          {totalItems > 0 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
              {currentIndex + 1} / {totalItems}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Media Item Component for proper ref handling
const MediaItem = ({ item, idx, onOpenLightbox }) => {
  const videoRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.02 }}
      className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-500"
      onClick={() => onOpenLightbox(item.src, item.type, idx)}
      onMouseEnter={() => {
        if (item.type === 'video' && videoRef.current) {
          videoRef.current.play().catch(() => {});
        }
      }}
      onMouseLeave={() => {
        if (item.type === 'video' && videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      {item.type === 'image' ? (
        <img
          src={item.src}
          alt={`Construction progress ${idx + 1}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
      ) : (
        <video
          ref={videoRef}
          src={item.src}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          muted
          playsInline
          loop
        />
      )}
      
      {/* Elegant overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center gap-2 text-white text-xs font-medium">
            {item.type === 'image' ? (
              <ImageIcon size={16} className="opacity-90" />
            ) : (
              <Video size={16} className="opacity-90" />
            )}
            <span className="opacity-90">
              {item.type === 'image' ? 'Photo' : 'Video'}
            </span>
          </div>
        </div>
      </div>
      
      {/* Subtle border on hover */}
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-2xl transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
};

const Progress = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'images', 'videos'

  // Combine all media for navigation
  const allMedia = [
    ...constructionImages.map((img, idx) => ({ type: 'image', src: img, index: idx })),
    ...constructionVideos.map((vid, idx) => ({ type: 'video', src: vid, index: idx + constructionImages.length })),
  ];

  const filteredMedia = activeTab === 'all' 
    ? allMedia 
    : activeTab === 'images' 
    ? allMedia.filter(m => m.type === 'image')
    : allMedia.filter(m => m.type === 'video');

  const openLightbox = (media, type, index) => {
    setSelectedMedia(media);
    setSelectedType(type);
    // Find index in filtered media
    const filteredIndex = filteredMedia.findIndex(m => m.src === media);
    setCurrentIndex(filteredIndex >= 0 ? filteredIndex : 0);
  };

  const closeLightbox = useCallback(() => {
    setSelectedMedia(null);
    setSelectedType(null);
  }, []);

  const navigateMedia = useCallback((direction) => {
    if (!selectedMedia || filteredMedia.length === 0) return;
    
    const currentMediaIndex = filteredMedia.findIndex(m => m.src === selectedMedia);
    if (currentMediaIndex === -1) return;
    
    const newIndex = direction === 'next' 
      ? (currentMediaIndex + 1) % filteredMedia.length
      : (currentMediaIndex - 1 + filteredMedia.length) % filteredMedia.length;
    
    const media = filteredMedia[newIndex];
    setSelectedMedia(media.src);
    setSelectedType(media.type);
    setCurrentIndex(newIndex);
  }, [selectedMedia, filteredMedia]);

  // Keyboard navigation
  useEffect(() => {
    if (!selectedMedia) return;
    
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigateMedia('prev');
      } else if (e.key === 'ArrowRight') {
        navigateMedia('next');
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedMedia, navigateMedia, closeLightbox]);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#003399] to-blue-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f59e0b] rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block py-2.5 px-5 mb-6 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold text-xs uppercase tracking-widest border border-white/20">
              Project Updates
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">Progress on the Whole Project</h1>
            <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
              Watch our community take shape. See the latest developments and milestones as we build Cliftonville Gardens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Premium Site Layout Showcase */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="inline-block py-2 px-4 mb-4 rounded-full bg-[#003399]/10 text-[#003399] font-bold text-xs uppercase tracking-wider">
              Project Overview
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
              Site Layout & Design
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              Explore our comprehensive site layout showcasing the thoughtful design and strategic placement of all facilities
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="relative rounded-3xl md:rounded-[2rem] overflow-hidden shadow-2xl border-4 border-[#003399]/20 bg-slate-900">
              <motion.img
                src={siteLayoutImage}
                alt="Cliftonville Gardens Site Layout"
                className="w-full h-auto object-contain"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              />
              {/* Premium overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              {/* Premium border glow on hover */}
              <div className="absolute inset-0 border-4 border-[#003399]/0 hover:border-[#003399]/30 rounded-3xl md:rounded-[2rem] transition-all duration-500 pointer-events-none" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#f59e0b]/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#003399]/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-gradient-to-b from-white to-slate-50 sticky top-0 z-40 border-b border-slate-200/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-3">
            {[
              { id: 'all', label: 'All Media' },
              { id: 'images', label: 'Photos' },
              { id: 'videos', label: 'Videos' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  closeLightbox();
                }}
                className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#003399] text-white shadow-lg shadow-[#003399]/20 scale-105'
                    : 'bg-white/80 text-slate-600 hover:bg-white hover:text-[#003399] border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white via-slate-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {filteredMedia.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200 max-w-xl mx-auto">
              <Video className="mx-auto text-slate-400 mb-3" size={40} />
              <h3 className="text-xl font-bold text-slate-800 mb-1">New Videos Coming Soon</h3>
              <p className="text-slate-500 text-sm">We are currently updating our on-site video records. Check out our photo progress gallery above!</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-4">
              {filteredMedia.map((item, idx) => (
                <MediaItem
                  key={idx}
                  item={item}
                  idx={idx}
                  onOpenLightbox={openLightbox}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003399] mb-4 md:mb-6">Want to See It In Person?</h2>
            <p className="text-slate-600 text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a site visit to see the construction progress firsthand and learn more about available apartments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-block bg-[#f59e0b] text-white font-bold px-8 md:px-10 py-3 md:py-4 rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300"
              >
                Schedule a Visit
              </a>
              <a 
                href="/contact" 
                className="inline-block bg-[#003399] text-white font-bold px-8 md:px-10 py-3 md:py-4 rounded-full hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:scale-105 duration-300"
              >
                Buy Your Apartment Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        media={selectedMedia}
        type={selectedType}
        isOpen={!!selectedMedia}
        onClose={closeLightbox}
        onNext={() => navigateMedia('next')}
        onPrev={() => navigateMedia('prev')}
        currentIndex={currentIndex}
        totalItems={filteredMedia.length}
      />
    </div>
  );
};

export default Progress;
