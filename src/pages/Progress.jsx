import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Image as ImageIcon, Video, ChevronLeft, ChevronRight } from 'lucide-react';

// Import all construction images
import img0044 from '../assets/construction/IMG-20251212-WA0044.jpg';
import img0045 from '../assets/construction/IMG-20251212-WA0045.jpg';
import img0046 from '../assets/construction/IMG-20251212-WA0046.jpg';
import img0047 from '../assets/construction/IMG-20251212-WA0047.jpg';
import img0048 from '../assets/construction/IMG-20251212-WA0048.jpg';
import img0049 from '../assets/construction/IMG-20251212-WA0049.jpg';
import img0050 from '../assets/construction/IMG-20251212-WA0050.jpg';
import img0051 from '../assets/construction/IMG-20251212-WA0051.jpg';
import img0052 from '../assets/construction/IMG-20251212-WA0052.jpg';
import img0053 from '../assets/construction/IMG-20251212-WA0053.jpg';
import img0054 from '../assets/construction/IMG-20251212-WA0054.jpg';
import img0055 from '../assets/construction/IMG-20251212-WA0055.jpg';
import img0056 from '../assets/construction/IMG-20251212-WA0056.jpg';
import img0057 from '../assets/construction/IMG-20251212-WA0057.jpg';
import img0058 from '../assets/construction/IMG-20251212-WA0058.jpg';
import img0059 from '../assets/construction/IMG-20251212-WA0059.jpg';
import img0060 from '../assets/construction/IMG-20251212-WA0060.jpg';
import img0061 from '../assets/construction/IMG-20251212-WA0061.jpg';
import img0062 from '../assets/construction/IMG-20251212-WA0062.jpg';
import img0063 from '../assets/construction/IMG-20251212-WA0063.jpg';
import img0064 from '../assets/construction/IMG-20251212-WA0064.jpg';
import img0065 from '../assets/construction/IMG-20251212-WA0065.jpg';
import img0066 from '../assets/construction/IMG-20251212-WA0066.jpg';

const constructionImages = [
  img0044, img0045, img0046, img0047, img0048, img0049, img0050, img0051,
  img0052, img0053, img0054, img0055, img0056, img0057, img0058, img0059,
  img0060, img0061, img0062, img0063, img0064, img0065, img0066,
];

// Import all construction videos
import vid0001 from '../assets/construction/VID-20251212-WA0001.mp4';
import vid0002 from '../assets/construction/VID-20251212-WA0002.mp4';
import vid0003 from '../assets/construction/VID-20251212-WA0003.mp4';
import vid0004 from '../assets/construction/VID-20251212-WA0004.mp4';
import vid0006 from '../assets/construction/VID-20251212-WA0006.mp4';
import vid0007 from '../assets/construction/VID-20251212-WA0007.mp4';
import vidWhatsApp1 from '../assets/construction/WhatsApp Video 2025-12-12 at 15.29.49_90dd1dde.mp4';
import vidWhatsApp2 from '../assets/construction/WhatsApp Video 2025-12-12 at 15.29.49_a08e3769.mp4';

const constructionVideos = [
  vid0001, vid0002, vid0003, vid0004, vid0006, vid0007, vidWhatsApp1, vidWhatsApp2,
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

  const closeLightbox = () => {
    setSelectedMedia(null);
    setSelectedType(null);
  };

  const navigateMedia = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredMedia.length
      : (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
    
    const media = filteredMedia[newIndex];
    setSelectedMedia(media.src);
    setSelectedType(media.type);
    setCurrentIndex(newIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedMedia) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateMedia('prev');
      if (e.key === 'ArrowRight') navigateMedia('next');
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedMedia, filteredMedia]);

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
            <span className="inline-block py-2 px-4 mb-6 rounded-full bg-white/10 text-white font-bold text-sm uppercase tracking-wider">
              Project Updates
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Construction Progress</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Watch our community take shape. See the latest developments and milestones as we build Cliftonville Gardens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#003399] mb-2">{constructionImages.length}</div>
              <div className="text-sm text-slate-600 uppercase tracking-wide">Progress Photos</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#003399] mb-2">{constructionVideos.length}</div>
              <div className="text-sm text-slate-600 uppercase tracking-wide">Progress Videos</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#f59e0b] mb-2">In Progress</div>
              <div className="text-sm text-slate-600 uppercase tracking-wide">Status</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#003399] mb-2">2025</div>
              <div className="text-sm text-slate-600 uppercase tracking-wide">Target Year</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-slate-50 sticky top-0 z-40 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-4">
            {[
              { id: 'all', label: 'All Media', count: allMedia.length },
              { id: 'images', label: 'Photos', count: constructionImages.length },
              { id: 'videos', label: 'Videos', count: constructionVideos.length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  closeLightbox();
                }}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#003399] text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {filteredMedia.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.03 }}
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-slate-900"
                  onClick={() => openLightbox(item.src, item.type, idx)}
                >
                  {item.type === 'image' ? (
                    <img
                      src={item.src}
                      alt={`Construction progress ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <>
                      <video
                        src={item.src}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        muted
                        playsInline
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Play className="text-white ml-1" size={24} />
                        </div>
                      </div>
                    </>
                  )}
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="flex items-center gap-2 text-white text-xs">
                        {item.type === 'image' ? (
                          <ImageIcon size={14} />
                        ) : (
                          <Video size={14} />
                        )}
                        <span className="font-medium">
                          {item.type === 'image' ? 'Photo' : 'Video'}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#003399] mb-6">Want to See It In Person?</h2>
            <p className="text-slate-600 text-lg mb-8">
              Schedule a site visit to see the construction progress firsthand and learn more about available apartments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-block bg-[#f59e0b] text-white font-bold px-10 py-4 rounded-full hover:bg-orange-600 transition shadow-lg"
              >
                Schedule a Visit
              </a>
              <a 
                href="/contact" 
                className="inline-block bg-[#003399] text-white font-bold px-10 py-4 rounded-full hover:bg-blue-800 transition"
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
