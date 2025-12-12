import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Heart, Sun, ArrowRight, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';

// Import poster/flyer images for hero carousel
import poster1 from '../assets/posters/IMG-20251212-WA0006.jpg';
import poster2 from '../assets/posters/IMG-20251212-WA0007.jpg';
import poster3 from '../assets/posters/IMG-20251212-WA0008.jpg';
import poster4 from '../assets/posters/IMG-20251212-WA0014.jpg';

// Import facility images
import buildingImage from '../assets/IMG-20251017-WA0008.jpg';
import staffImage from '../assets/lady on blue nurse clothe.jpg';
import poolImage from '../assets/Pool.jpg';

// Typing animation component
const TypewriterText = ({ text, className, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i <= text.length) {
          setDisplayText(text.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 1000);
        }
      }, 80);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && <span className="animate-blink ml-1">|</span>}
    </span>
  );
};

// Particle component for floating effect
const Particles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 10,
    size: 4 + Math.random() * 8,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/30"
          style={{
            left: `${particle.left}%`,
            bottom: '-20px',
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Hero Carousel Image
const CarouselImage = ({ src, isActive, direction }) => {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={src}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.img
            src={src}
            alt="Cliftonville Gardens"
            className="w-full h-full object-cover"
            animate={{
              scale: [1, 1.08],
            }}
            transition={{
              scale: {
                duration: 8,
                ease: "linear",
              }
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const heroImages = [poster1, poster2, poster3, poster4];
  
  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  // Staggered word animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    }
  };

  return (
    <div className="overflow-x-hidden">
      
      {/* ============================================
          HERO SECTION - CINEMATIC FULLSCREEN
          ============================================ */}
      <section 
        ref={heroRef}
        className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
      >
        {/* Background Carousel */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          {heroImages.map((img, idx) => (
            <CarouselImage 
              key={idx} 
              src={img} 
              isActive={currentSlide === idx}
            />
          ))}
          
          {/* Gradient overlay - subtle, no blue tint */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        </motion.div>

        {/* Floating Particles */}
        <Particles />

        {/* Carousel Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                currentSlide === idx 
                  ? 'bg-white w-6 md:w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Carousel Arrows - Hidden on mobile */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all hidden md:block"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all hidden md:block"
        >
          <ChevronRight size={24} />
        </button>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center md:text-left"
          style={{ y: textY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 md:mb-6"
          >
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs md:text-sm font-bold uppercase tracking-wider border border-white/20">
              Supported Living Community
            </span>
          </motion.div>

          {/* Animated Headline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="perspective-1000"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.1] mb-4 md:mb-6">
              <motion.span variants={wordVariants} className="inline-block mr-2 md:mr-4">Care</motion.span>
              <motion.span variants={wordVariants} className="inline-block mr-2 md:mr-4">Facility</motion.span>
              <br className="hidden sm:block" />
              <motion.span 
                variants={wordVariants} 
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300"
              >
                <TypewriterText text="With a Difference." delay={1200} />
              </motion.span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-10 leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            A holistic wellness community for adults (18+) in need of personal care. 
            We combine world-class medical expertise with the warmth of home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <Link 
              to="/about" 
              className="group inline-flex items-center gap-2 md:gap-3 px-6 md:px-10 py-3 md:py-5 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-full font-bold text-sm md:text-base shadow-lg hover:shadow-2xl hover:shadow-sky-500/30 transition-all duration-300 hover:scale-105 animate-glow-pulse"
            >
              Discover More 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================
          WELCOME / ABOUT PREVIEW - IMMEDIATELY AFTER HERO
          ============================================ */}
      <section className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -80, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <motion.div 
              className="absolute -inset-4 bg-sky-600/20 rounded-3xl"
              animate={{ rotate: [6, 4, 6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img 
              src={poster2} 
              alt="Cliftonville Care" 
              className="relative rounded-3xl shadow-2xl w-full object-cover h-[350px] md:h-[500px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.4 }}
              className="inline-block px-4 py-1 border border-orange-500 rounded-full text-orange-400 text-sm font-bold mb-4 md:mb-6"
            >
              Welcome to Cliftonville
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              We Nurture <span className="text-sky-400">Responsibly.</span>
            </h2>
            
            <p className="text-slate-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Welcome to Cliftonville, a premier supported living community designed to provide exceptional care and support for adults aged 18 and above.
            </p>
            
            <motion.div 
              className="mb-6 md:mb-8 pl-4 md:pl-6 border-l-4 border-sky-500"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-lg md:text-xl italic font-light text-white">
                "To create a safe, nurturing environment where residents can thrive and lead fulfilling lives."
              </p>
              <p className="text-sky-400 font-bold mt-2">— Our Mission</p>
            </motion.div>

            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 text-white font-bold hover:text-sky-400 transition-colors group"
            >
              Learn more about us 
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          POSTERS / FLYERS GALLERY - DRAMATIC SHOWCASE
          ============================================ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-100 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2 block">Coming Soon</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">Something Big Is Coming</h2>
            <p className="text-slate-600 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base">
              A facility that will transform care giving in Itori, Ewekoro LGA, Ogun State.
            </p>
          </motion.div>

          {/* Mobile: Horizontal Scroll, Desktop: Grid */}
          <div className="relative">
            {/* Mobile Horizontal Scroll */}
            <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 scrollbar-hide">
              {[poster1, poster2, poster3, poster4].map((poster, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="flex-shrink-0 w-[280px] snap-center"
                >
                  <motion.div
                    className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]"
                    whileTap={{ scale: 0.98 }}
                  >
                    <img 
                      src={poster} 
                      alt={`Cliftonville Flyer ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Desktop Grid with 3D Tilt */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[poster1, poster2, poster3, poster4].map((poster, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50, rotateX: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.7, ease: "easeOut" }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    z: 50,
                  }}
                  className="perspective-1000 cursor-pointer"
                >
                  <motion.div
                    className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 aspect-[3/4] preserve-3d"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      y: {
                        duration: 3 + idx * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    }}
                  >
                    <img 
                      src={poster} 
                      alt={`Cliftonville Flyer ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Hover glow */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-sky-600/30 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CORE VALUES
          ============================================ */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2">Our Foundation</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Choose Cliftonville?</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                title: "Serenity", 
                desc: "A peaceful and tranquil environment for residents to relax and find inner peace.",
                icon: Sun,
                color: "text-sky-500",
                bg: "bg-sky-50"
              },
              { 
                title: "Support", 
                desc: "Comprehensive assistance and emotional care to help residents thrive.",
                icon: Heart,
                color: "text-rose-500",
                bg: "bg-rose-50"
              },
              { 
                title: "Safety", 
                desc: "The well-being and security of all residents is a priority.",
                icon: Shield,
                color: "text-emerald-500",
                bg: "bg-emerald-50"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-6 md:p-8 rounded-[2rem] bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <motion.div 
                  className={`w-14 h-14 md:w-16 md:h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <item.icon size={28} className="md:w-8 md:h-8" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 md:mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FACILITIES GLIMPSE
          ============================================ */}
      <section className="py-16 md:py-24 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">World-Class Facilities</h2>
              <p className="text-slate-600 text-sm md:text-base">Everything you need for a comfortable life.</p>
            </motion.div>
            <Link 
              to="/facilities" 
              className="px-4 md:px-6 py-2 md:py-3 bg-white text-slate-900 rounded-full font-bold shadow-sm hover:shadow-md transition text-sm md:text-base"
            >
              View All Facilities
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: "Modern Accommodation", desc: "67 beautifully designed residential units across 3 apartment blocks.", img: buildingImage },
              { title: "Professional Staff", desc: "Trained caregivers providing 24/7 compassionate support.", img: staffImage },
              { title: "Premium Amenities", desc: "Golf course, gym, spa, pool, and restaurant on-site.", img: poolImage },
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative h-64 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              >
                <motion.img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-6 md:p-8">
                  <h3 className="text-white text-lg md:text-xl font-bold mb-1 md:mb-2">{card.title}</h3>
                  <p className="text-slate-300 text-xs md:text-sm">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          STATS BAR
          ============================================ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl md:rounded-3xl p-6 md:p-10 grid grid-cols-3 gap-4 md:gap-8 text-center"
          >
            {[
              { label: "Total Units", value: "67+", icon: "🏠" },
              { label: "Care Support", value: "24/7", icon: "❤️" },
              { label: "Amenities", value: "13+", icon: "⛳" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                className="text-white"
              >
                <span className="text-2xl md:text-3xl mb-2 block">{stat.icon}</span>
                <h3 className="text-2xl md:text-4xl font-extrabold">{stat.value}</h3>
                <p className="text-slate-400 font-medium text-xs md:text-sm uppercase tracking-wide mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================
          CTA
          ============================================ */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-sky-600 to-blue-700 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl"
          >
            {/* Animated background pattern */}
            <motion.div 
              className="absolute inset-0 opacity-10"
              animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')",
                backgroundSize: '100px',
              }}
            />
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 relative z-10"
            >
              Ready to learn more?
            </motion.h2>
            <p className="text-sky-100 text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto relative z-10">
              Our team is ready to answer any questions and help you explore how Cliftonville Gardens can support you or your loved ones.
            </p>
            <Link 
              to="/contact" 
              className="relative z-10 inline-block bg-white text-sky-600 px-8 md:px-10 py-3 md:py-4 rounded-full font-bold hover:bg-sky-50 transition transform hover:-translate-y-1 hover:scale-105 shadow-lg text-sm md:text-base"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
