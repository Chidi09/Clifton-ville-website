import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, Dumbbell, UtensilsCrossed, Stethoscope, Waves, TreePine, Gamepad2, Car } from 'lucide-react';

const Facilities = () => {
  const facilityCategories = [
    {
      title: "Recreation & Sports",
      icon: Gamepad2,
      items: [
        { name: "Mini-Golf Course", image: "[IMAGE: Mini-Golf Course]" },
        { name: "Golf Cart", image: "[IMAGE: Golf Cart]" },
        { name: "Croquet Course", image: "[IMAGE: Croquet Court]" },
        { name: "Tennis Court", image: "[IMAGE: Tennis Court]" },
        { name: "Modern GYM", image: "[IMAGE: Gym Equipment]" },
      ]
    },
    {
      title: "Wellness & Relaxation",
      icon: Waves,
      items: [
        { name: "Luxury SPA", image: "[IMAGE: Spa Facilities]" },
        { name: "Pool Area", image: "[IMAGE: Swimming Pool]" },
        { name: "Outdoor Sitting Area", image: "[IMAGE: Outdoor Seating]" },
      ]
    },
    {
      title: "Dining & Social",
      icon: UtensilsCrossed,
      items: [
        { name: "Restaurant/Lounge", image: "[IMAGE: Restaurant]" },
        { name: "Central Hall", image: "[IMAGE: Central Hall]" },
        { name: "Event Space", image: "[IMAGE: Event Space]" },
      ]
    },
    {
      title: "Convenience & Medical",
      icon: Stethoscope,
      items: [
        { name: "On-site Clinic", image: "[IMAGE: Medical Clinic]" },
        { name: "Mini-Mart", image: "[IMAGE: Mini-Mart]" },
        { name: "Ample Greenery", image: "[IMAGE: Gardens/Greenery]" },
      ]
    },
  ];

  const stats = [
    { number: "3", label: "Apartment Blocks", desc: "Modern residential buildings" },
    { number: "16", label: "1-Bed Units", desc: "Comfortable single bedrooms" },
    { number: "6", label: "2-Bed Units", desc: "Spacious double bedrooms" },
    { number: "67", label: "Total Units", desc: "Across all blocks" },
  ];

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
              World-Class Amenities
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Facilities</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              State-of-the-art facilities for unmatched comfort and convenience in Itori, Ewekoro LGA, Ogun State.
            </p>
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
              <span className="text-[#f59e0b] font-bold uppercase tracking-widest text-sm">Accommodation</span>
              <h2 className="text-4xl font-bold text-[#003399] mt-4 mb-6">The Estate</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Our beautifully designed estate features 67 residential units spread across 3 modern apartment blocks. Each unit is thoughtfully designed to provide comfort, independence, and accessibility.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-xl text-center">
                    <div className="text-4xl font-bold text-[#003399]">{stat.number}</div>
                    <div className="text-[#f59e0b] font-bold">{stat.label}</div>
                    <div className="text-sm text-slate-500">{stat.desc}</div>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 bg-[#f59e0b] text-white px-6 py-3 rounded-full font-bold animate-pulse">
                <Building2 size={20} />
                COMING SOON!
              </div>
            </motion.div>

            {/* IMAGE PLACEHOLDER */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-[#003399]/10 rounded-3xl transform rotate-3"></div>
              {/* PLACEHOLDER: Replace with estate/building exterior image */}
              <div className="relative rounded-3xl shadow-2xl w-full h-[500px] bg-slate-200 flex items-center justify-center overflow-hidden">
                <span className="text-slate-400 text-center p-4">[IMAGE: Estate Overview / Building Exterior Render]</span>
              </div>
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
              <div className="w-14 h-14 bg-[#003399] rounded-xl flex items-center justify-center text-white">
                <category.icon size={28} />
              </div>
              <h2 className="text-3xl font-bold text-[#003399]">{category.title}</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {category.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
                >
                  {/* PLACEHOLDER: Replace with actual facility images */}
                  <div className="h-48 bg-slate-200 flex items-center justify-center group-hover:bg-slate-300 transition-colors">
                    <span className="text-slate-400 text-xs text-center p-4">{item.image}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-800 group-hover:text-[#003399] transition-colors">{item.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Stats Banner */}
      <section className="py-20 bg-[#003399] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">By The Numbers</h2>
            <p className="text-blue-200 mt-2">Everything you need in one beautiful location</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-5xl md:text-6xl font-bold text-[#f59e0b] mb-2">13+</div>
              <div className="uppercase tracking-widest text-sm">Amenities</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6"
            >
              <div className="text-5xl md:text-6xl font-bold text-[#f59e0b] mb-2">67</div>
              <div className="uppercase tracking-widest text-sm">Residential Units</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6"
            >
              <div className="text-5xl md:text-6xl font-bold text-[#f59e0b] mb-2">24/7</div>
              <div className="uppercase tracking-widest text-sm">Support Staff</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6"
            >
              <div className="text-5xl md:text-6xl font-bold text-[#f59e0b] mb-2">1</div>
              <div className="uppercase tracking-widest text-sm">On-site Clinic</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#f59e0b] font-bold uppercase tracking-widest text-sm">Visual Tour</span>
            <h2 className="text-4xl font-bold text-[#003399] mt-4">Facility Gallery</h2>
          </div>

          {/* GALLERY PLACEHOLDER */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.05 }}
                className={`${item === 1 || item === 6 ? 'col-span-2 row-span-2' : ''} bg-slate-200 rounded-xl overflow-hidden h-48 ${item === 1 || item === 6 ? 'md:h-auto' : ''} flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer`}
              >
                <span className="text-slate-400 text-sm">[GALLERY IMAGE {item}]</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#003399] mb-6">Want to See More?</h2>
            <p className="text-slate-600 text-lg mb-8">
              Schedule a visit to experience our world-class facilities firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-block bg-[#f59e0b] text-white font-bold px-10 py-4 rounded-full hover:bg-orange-600 transition shadow-lg">
                Schedule a Visit
              </Link>
              <Link to="/services" className="inline-block bg-[#003399] text-white font-bold px-10 py-4 rounded-full hover:bg-blue-800 transition">
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
