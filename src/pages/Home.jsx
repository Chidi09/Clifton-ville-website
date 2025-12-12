import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Heart, Sun, ArrowRight } from 'lucide-react';

// Import actual images
import heroImage from '../assets/heroimage.jpg';
import nursesImage from '../assets/unnamed (2).jpg';
import buildingImage from '../assets/IMG-20251017-WA0008.jpg';
import staffImage from '../assets/lady on blue nurse clothe.jpg';
import poolImage from '../assets/Pool.jpg';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      
      {/* --- HERO SECTION --- 
          Strategy: Clean typography on left, large emotive imagery on right. 
          Stats are separated into a floating bar below.
      */}
      <section className="relative pt-12 pb-32 lg:pt-24 lg:pb-48 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-600 text-xs font-bold uppercase tracking-wider">
                Supported Living
              </span>
              <span className="w-12 h-[1px] bg-sky-200"></span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Care Facility <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                With a Difference.
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
              A holistic wellness community for adults (18+) in need of personal care. 
              We combine world-class medical expertise with the warmth of home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about" className="px-8 py-4 bg-sky-600 text-white rounded-full font-bold shadow-[0_0_20px_rgba(2,132,199,0.3)] hover:bg-sky-500 hover:scale-105 transition-all flex items-center justify-center gap-2">
                Discover More <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold hover:bg-slate-50 hover:border-sky-400 hover:text-sky-600 transition-all">
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Right Image - Modern Shape */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px]"
          >
             {/* Decorative blob behind */}
             <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-sky-200 to-orange-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
             
             {/* Main Image - Cliftonville Building */}
             <img 
               src={heroImage} 
               alt="Cliftonville Gardens Facility" 
               className="relative z-10 w-full h-full object-cover rounded-[2.5rem] shadow-2xl border-4 border-white"
             />

             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                  <Shield size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Safety Rating</p>
                  <p className="text-slate-900 font-bold text-lg">100% Secure</p>
                </div>
             </div>
          </motion.div>
        </div>

        {/* --- FLOATING STATS BAR --- 
            Positioned overlapping the hero and next section for depth.
        */}
        <div className="max-w-6xl mx-auto px-6 mt-16 lg:mt-0 lg:absolute lg:bottom-12 lg:left-1/2 lg:-translate-x-1/2 w-full z-20">
          <div className="bg-white/80 backdrop-blur-md border border-white/50 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] rounded-3xl p-8 lg:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              { label: "Total Units", value: "67+", icon: "🏠" },
              { label: "Care Support", value: "24/7", icon: "❤️" },
              { label: "Premium Amenities", value: "13+", icon: "⛳" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center justify-center gap-4 pt-4 md:pt-0">
                <span className="text-3xl filter grayscale hover:grayscale-0 transition">{stat.icon}</span>
                <div>
                  <h3 className="text-3xl font-extrabold text-slate-800">{stat.value}</h3>
                  <p className="text-slate-500 font-medium text-sm uppercase tracking-wide">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2">Our Foundation</h4>
            <h2 className="text-4xl font-bold text-slate-900">Why Choose Cliftonville?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                whileHover={{ y: -10 }}
                key={idx} 
                className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT PREVIEW (Asymmetrical Layout) --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute -inset-4 bg-sky-600/20 rounded-3xl rotate-6"></div>
             {/* Nursing Staff Image */}
             <img 
               src={nursesImage} 
               alt="Cliftonville Nursing Staff" 
               className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px] grayscale hover:grayscale-0 transition duration-700"
             />
          </div>
          
          <div>
            <div className="inline-block px-4 py-1 border border-orange-500 rounded-full text-orange-400 text-sm font-bold mb-6">
              About Cliftonville
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              We Nurture <span className="text-sky-400">Responsibly.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Welcome to Cliftonville, a premier supported living community designed to provide exceptional care and support for adults aged 18 and above.
            </p>
            
            <div className="mb-8 pl-6 border-l-4 border-sky-500">
              <p className="text-xl italic font-light text-white">
                "To create a safe, nurturing environment where residents can thrive and lead fulfilling lives."
              </p>
              <p className="text-sky-400 font-bold mt-2">— Our Mission</p>
            </div>

            <Link to="/about" className="inline-flex items-center gap-2 text-white font-bold hover:text-sky-400 transition-colors">
              Learn more about us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- FACILITIES GLIMPSE --- */}
      <section className="py-24 bg-sky-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">World-Class Facilities</h2>
              <p className="text-slate-600">Everything you need for a comfortable life.</p>
            </div>
            <Link to="/facilities" className="hidden md:flex px-6 py-3 bg-white text-slate-900 rounded-full font-bold shadow-sm hover:shadow-md transition">
              View All Facilities
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Modern Accommodation", desc: "67 beautifully designed residential units across 3 apartment blocks.", img: buildingImage },
              { title: "Professional Staff", desc: "Trained caregivers providing 24/7 compassionate support.", img: staffImage },
              { title: "Premium Amenities", desc: "Golf course, gym, spa, pool, and restaurant on-site.", img: poolImage },
            ].map((card, idx) => (
              <div key={idx} className="group relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-white text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-slate-300 text-sm">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/facilities" className="inline-block px-6 py-3 bg-white text-slate-900 rounded-full font-bold shadow-sm">
              View All Facilities
            </Link>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20">
         <div className="max-w-5xl mx-auto px-6">
           <div className="bg-sky-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-[0_0_20px_rgba(2,132,199,0.3)]">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             
             <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to learn more?</h2>
             <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
               Our team is ready to answer any questions and help you explore how Cliftonville Gardens can support you or your loved ones.
             </p>
             <Link to="/contact" className="relative z-10 inline-block bg-white text-sky-600 px-10 py-4 rounded-full font-bold hover:bg-sky-50 transition transform hover:-translate-y-1 shadow-lg">
               Get in Touch
             </Link>
           </div>
         </div>
      </section>

    </div>
  );
};

export default Home;
