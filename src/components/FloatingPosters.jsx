import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import poster images
import poster1 from '../assets/posters/IMG-20251212-WA0006.jpg';
import poster2 from '../assets/posters/IMG-20251212-WA0007.jpg';
import poster3 from '../assets/posters/IMG-20251212-WA0008.jpg';
import poster4 from '../assets/posters/IMG-20251212-WA0014.jpg';

const FloatingPosters = () => {
  const { scrollYProgress } = useScroll();
  
  // Different parallax speeds for each poster
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const rotate4 = useTransform(scrollYProgress, [0, 1], [0, -8]);
  
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.9]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 1.1]);

  const posters = [
    {
      src: poster1,
      y: y1,
      rotate: rotate1,
      scale: scale1,
      // Mobile: bottom-left, Desktop: bottom-left
      position: 'bottom-4 left-2 md:bottom-20 md:left-4 lg:bottom-32 lg:left-8',
      size: 'w-14 h-20 md:w-20 md:h-28 lg:w-24 lg:h-32',
      zIndex: 'z-10',
      showOn: 'block', // Always visible
    },
    {
      src: poster2,
      y: y2,
      rotate: rotate2,
      scale: scale2,
      // Mobile: top-right, Desktop: top-right
      position: 'top-24 right-2 md:top-32 md:right-4 lg:top-40 lg:right-8',
      size: 'w-14 h-20 md:w-20 md:h-28 lg:w-24 lg:h-32',
      zIndex: 'z-10',
      showOn: 'block', // Always visible
    },
    {
      src: poster3,
      y: y3,
      rotate: rotate3,
      scale: scale1,
      // Hidden on mobile, visible tablet+
      position: 'top-48 left-2 md:top-60 md:left-6 lg:top-72 lg:left-10',
      size: 'w-16 h-24 md:w-20 md:h-28 lg:w-24 lg:h-32',
      zIndex: 'z-10',
      showOn: 'hidden md:block',
    },
    {
      src: poster4,
      y: y4,
      rotate: rotate4,
      scale: scale2,
      // Hidden on mobile/tablet, visible desktop only
      position: 'bottom-40 right-4 lg:bottom-52 lg:right-10',
      size: 'w-20 h-28 lg:w-24 lg:h-32',
      zIndex: 'z-10',
      showOn: 'hidden lg:block',
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 5 }}>
      {posters.map((poster, index) => (
        <motion.div
          key={index}
          className={`absolute ${poster.position} ${poster.showOn}`}
          style={{
            y: poster.y,
            rotate: poster.rotate,
            scale: poster.scale,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: index * 0.2 + 0.5, 
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          <motion.div
            className={`${poster.size} ${poster.zIndex} rounded-lg overflow-hidden shadow-2xl ring-2 ring-white/20 backdrop-blur-sm`}
            whileHover={{ scale: 1.1 }}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              y: {
                duration: 3 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }
            }}
          >
            <img
              src={poster.src}
              alt={`Cliftonville Poster ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-sky-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingPosters;
