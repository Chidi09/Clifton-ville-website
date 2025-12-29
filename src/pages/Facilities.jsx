import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, Dumbbell, UtensilsCrossed, Stethoscope, Waves, TreePine, Gamepad2, Scissors, Sparkles, UserCheck, Brain, ChevronLeft, ChevronRight } from 'lucide-react';

// Import actual facility images
import buildingImage1 from '../assets/IMG-20251017-WA0008.jpg';
import buildingImage2 from '../assets/IMG-20251017-WA0007.jpg';
import buildingImage3 from '../assets/IMG-20251017-WA0006.jpg';
import buildingImage4 from '../assets/IMG-20251017-WA0005.jpg';
import golfImage from '../assets/Mini-golf course or Golf Cart..jpg';
import croquetImage from '../assets/The green lawn area.jpg';
import tennisImage from '../assets/Tennis.jpg';
import gymImage from '../assets/The exercise equipment.jpg';
import poolImage from '../assets/Pool.jpg';
import greeneryImage from '../assets/Greenery.jpg';
import restaurantImage from '../assets/The dining area tables.jpg';
import clinicImage from '../assets/Clinic.jpg';
import minimartImage from '../assets/Mini-mart.jpg';

// Import new facility images
import salonImage from '../assets/facilities images/barbing and hairdressing saloon.jpg';
import hotTubImage from '../assets/facilities images/hot tub.jpg';
import saunaImage from '../assets/facilities images/sauna.jpg';
import massageImage from '../assets/facilities images/massage therapy room.jpg';
import therapyImage from '../assets/facilities images/therapy.jpg';
import counselingImage from '../assets/facilities images/counselling room.jpg';

// Import WhatsApp images for dynamic slideshow
import whatsappImg1 from '../assets/WhatsApp Image 2025-12-29 at 9.56.02 AM.jpeg';
import whatsappImg2 from '../assets/WhatsApp Image 2025-12-29 at 9.56.04 AM (1).jpeg';
import whatsappImg3 from '../assets/WhatsApp Image 2025-12-29 at 9.56.04 AM.jpeg';
import whatsappImg4 from '../assets/WhatsApp Image 2025-12-29 at 9.56.05 AM (1).jpeg';
import whatsappImg5 from '../assets/WhatsApp Image 2025-12-29 at 9.56.05 AM.jpeg';
import whatsappImg6 from '../assets/WhatsApp Image 2025-12-29 at 9.56.06 AM.jpeg';

const whatsappImages = [whatsappImg1, whatsappImg2, whatsappImg3, whatsappImg4, whatsappImg5, whatsappImg6];

const Facilities = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImages] = useState(whatsappImages.slice(0, 3)); // Use first 3 images

  // Auto-rotate slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % selectedImages.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [selectedImages.length]);

  const facilityCategories = [
    {
      title: "Recreation & Sports",
      icon: Gamepad2,
      items: [
        { name: "Mini-Golf Course", image: golfImage },
        { name: "Croquet Course", image: croquetImage },
        { name: "Tennis Court", image: tennisImage },
        { name: "Modern GYM", image: gymImage },
      ]
    },
    {
      title: "Wellness & Relaxation",
      icon: Waves,
      items: [
        { name: "Pool Area", image: poolImage },
        { name: "Ample Greenery", image: greeneryImage },
        { name: "Hot Tub", image: hotTubImage },
        { name: "Sauna Facilities", image: saunaImage },
        { name: "Massage Therapy Room", image: massageImage },
      ]
    },
    {
      title: "Dining & Social",
      icon: UtensilsCrossed,
      items: [
        { name: "Restaurant/Lounge", image: restaurantImage },
      ]
    },
    {
      title: "Convenience & Medical",
      icon: Stethoscope,
      items: [
        { name: "On-site Clinic/Laboratory Services", image: clinicImage },
        { name: "Mini-Mart", image: minimartImage },
        { name: "Barbing and Hair Dressing Salon", image: salonImage },
      ]
    },
    {
      title: "Therapy & Support",
      icon: Brain,
      items: [
        { name: "Occupational Therapy Room", image: therapyImage },
        { name: "Mental Health & Counseling Rooms", image: counselingImage },
      ]
    },
  ];

  const stats = [
    { number: "3", label: "Apartment Blocks", desc: "Modern residential buildings" },
    { number: "16", label: "1-Bed Units", desc: "Comfortable single bedrooms" },
    { number: "6", label: "2-Bed Units", desc: "Spacious double bedrooms" },
    { number: "67", label: "Total Units", desc: "Across all blocks" },
  ];

  // Gallery images combining all building shots and facility images
  const galleryImages = [
    { src: buildingImage1, alt: "Cliftonville Building Exterior", large: true },
    { src: poolImage, alt: "Swimming Pool" },
    { src: buildingImage2, alt: "Building View" },
    { src: gymImage, alt: "Fitness Center" },
    { src: greeneryImage, alt: "Gardens" },
    { src: buildingImage3, alt: "Residential Block", large: true },
    { src: restaurantImage, alt: "Restaurant" },
    { src: buildingImage4, alt: "Community View" },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-sky-600 to-blue-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block py-2 px-4 mb-6 rounded-full bg-white/10 text-white font-bold text-sm uppercase tracking-wider">
              World-Class Amenities
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Facilities</h1>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto">
              State-of-the-art facilities for unmatched comfort and convenience in Itori, Ewekoro LGA, Ogun State.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dynamic Slideshow Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="inline-block py-2 px-4 mb-4 rounded-full bg-sky-600/10 text-sky-600 font-bold text-xs uppercase tracking-wider">
              Dynamic View
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
              A Dynamic View of Cliftonville
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              Experience the beauty and elegance of our world-class facilities through this captivating visual journey
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="relative rounded-3xl md:rounded-[2rem] overflow-hidden shadow-2xl bg-slate-900 aspect-[16/10] md:aspect-[16/9]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={selectedImages[currentSlide]}
                    alt={`Cliftonville Gardens view ${currentSlide + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Navigation arrows */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + selectedImages.length) % selectedImages.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % selectedImages.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Slide indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {selectedImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/80 w-2'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <span className="text-white text-sm font-semibold">
                  {currentSlide + 1} / {selectedImages.length}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accommodation Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Accommodation</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-4 mb-6">The Community</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Our beautifully designed community features 67 residential units spread across 3 modern apartment blocks. Each unit is thoughtfully designed to provide comfort, independence, and accessibility.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                    <div className="text-4xl font-bold text-sky-600">{stat.number}</div>
                    <div className="text-orange-500 font-bold">{stat.label}</div>
                    <div className="text-sm text-slate-500">{stat.desc}</div>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-bold animate-pulse">
                <Building2 size={20} />
                IN PROGRESS!
              </div>
            </motion.div>

            {/* Estate Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative grid grid-cols-2 gap-4"
            >
              <img 
                src={buildingImage1} 
                alt="Cliftonville Building" 
                className="rounded-2xl shadow-xl w-full h-60 object-cover col-span-2"
              />
              <img 
                src={buildingImage2} 
                alt="Building View" 
                className="rounded-2xl shadow-lg w-full h-40 object-cover"
              />
              <img 
                src={buildingImage3} 
                alt="Community" 
                className="rounded-2xl shadow-lg w-full h-40 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities by Category */}
      {facilityCategories.map((category, catIdx) => (
        <section key={catIdx} className={`py-20 ${catIdx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="w-14 h-14 bg-sky-600 rounded-xl flex items-center justify-center text-white">
                <category.icon size={28} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">{category.title}</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-800 group-hover:text-sky-600 transition-colors">{item.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Stats Banner */}
      <section className="py-20 bg-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">By The Numbers</h2>
            <p className="text-sky-100 mt-2">Everything you need in one beautiful location</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-5xl md:text-6xl font-bold text-orange-400 mb-2">13+</div>
              <div className="uppercase tracking-widest text-sm">Amenities</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6"
            >
              <div className="text-5xl md:text-6xl font-bold text-orange-400 mb-2">67</div>
              <div className="uppercase tracking-widest text-sm">Residential Units</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6"
            >
              <div className="text-5xl md:text-6xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="uppercase tracking-widest text-sm">Support Staff</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6"
            >
              <div className="text-5xl md:text-6xl font-bold text-orange-400 mb-2">1</div>
              <div className="uppercase tracking-widest text-sm">On-site Clinic/Lab</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Visual Tour</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-4">Facility Gallery</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`${image.large ? 'col-span-2 row-span-2' : ''} rounded-xl overflow-hidden group cursor-pointer`}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className={`w-full ${image.large ? 'h-full' : 'h-48'} object-cover group-hover:scale-105 transition-transform duration-500`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Want to See More?</h2>
            <p className="text-slate-600 text-lg mb-8">
              Schedule a visit to experience our world-class facilities firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-block bg-orange-500 text-white font-bold px-10 py-4 rounded-full hover:bg-orange-600 transition shadow-lg">
                Schedule a Visit
              </Link>
              <Link to="/services" className="inline-block bg-sky-600 text-white font-bold px-10 py-4 rounded-full hover:bg-sky-700 transition">
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
