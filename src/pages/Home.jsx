import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Heart, Sun, ArrowRight, Users, Building2, Award } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-slate-900 overflow-hidden">
        {/* IMAGE PLACEHOLDER: Replace with Main Building Render */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#003399]/95 via-[#003399]/70 to-black/50 z-10" />
          {/* PLACEHOLDER: Replace this div with your actual hero image */}
          <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            <span className="text-slate-600 text-lg">[HERO IMAGE: Cliftonville Building Exterior]</span>
          </div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-2 px-4 mb-6 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b] text-[#f59e0b] font-bold text-sm uppercase tracking-wider backdrop-blur-sm">
              Welcome to Cliftonville
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Care Facility <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                with a Difference.
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl">
              A holistic wellness community for adults (18+) in need of personal care. 
              We combine medical expertise with the warmth of home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about" className="px-8 py-4 bg-[#f59e0b] text-white rounded-full font-bold shadow-lg hover:bg-orange-600 transition flex items-center justify-center gap-2">
                Discover More <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-[#003399] transition">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-t-3xl shadow-2xl p-8 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#003399]">67+</div>
                <div className="text-gray-500 text-sm mt-1">Total Units</div>
              </div>
              <div className="text-center border-x border-gray-200">
                <div className="text-3xl md:text-4xl font-bold text-[#003399]">24/7</div>
                <div className="text-gray-500 text-sm mt-1">Care Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#003399]">13+</div>
                <div className="text-gray-500 text-sm mt-1">Amenities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#f59e0b] font-bold uppercase tracking-widest text-sm">Our Foundation</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mt-4">Our Core Values</h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Sun, title: "Serenity", desc: "A peaceful and tranquil environment for residents to relax and find inner peace.", color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-200" },
              { icon: Heart, title: "Support", desc: "Comprehensive assistance and emotional care to help residents thrive.", color: "text-[#f59e0b]", bg: "bg-orange-50", border: "border-orange-200" },
              { icon: Shield, title: "Safety", desc: "The well-being and security of all residents is a priority.", color: "text-green-600", bg: "bg-green-50", border: "border-green-200" },
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group p-10 rounded-3xl border ${item.border} hover:shadow-2xl transition-all duration-300 bg-white hover:-translate-y-2`}
              >
                <div className={`w-20 h-20 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <item.icon size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* IMAGE PLACEHOLDER */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-[#003399]/10 rounded-3xl transform -rotate-3"></div>
              {/* PLACEHOLDER: Replace with actual facility image */}
              <div className="relative rounded-3xl shadow-2xl w-full h-[500px] bg-slate-200 flex items-center justify-center overflow-hidden">
                <span className="text-slate-400 text-center p-4">[IMAGE: Nursing Staff Group Photo or Facility Interior]</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#f59e0b] font-bold uppercase tracking-widest text-sm">About Cliftonville</span>
              <h2 className="text-4xl font-bold text-[#003399] mt-4 mb-6">We Nurture Responsibly</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Welcome to Cliftonville, a premier supported living community designed to provide exceptional care and support for adults aged 18 and above.
              </p>
              <div className="bg-white p-6 rounded-2xl border-l-4 border-[#f59e0b] shadow-sm mb-8">
                <p className="text-slate-700 italic text-lg">
                  "To create a safe, nurturing environment where residents can thrive and lead fulfilling lives."
                </p>
                <p className="text-[#003399] font-bold mt-2">— Our Mission</p>
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-[#003399] font-bold text-lg hover:text-[#f59e0b] transition-colors">
                Learn More About Us <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#f59e0b] font-bold uppercase tracking-widest text-sm">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mt-4">World-Class Facilities</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: "Modern Accommodation", desc: "67 beautifully designed residential units across 3 apartment blocks." },
              { icon: Users, title: "Professional Staff", desc: "Trained caregivers providing 24/7 compassionate support." },
              { icon: Award, title: "Premium Amenities", desc: "Golf course, gym, spa, pool, and restaurant on-site." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="w-14 h-14 bg-[#003399] rounded-xl flex items-center justify-center text-white mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#003399] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f59e0b] rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Learn More?</h2>
            <p className="text-blue-200 mb-10 text-xl max-w-2xl mx-auto">
              Our team is ready to answer any questions and help you explore how Cliftonville can support you or your loved ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-block bg-[#f59e0b] text-white font-bold px-10 py-4 rounded-full hover:bg-orange-600 transition shadow-lg">
                Get in Touch
              </Link>
              <Link to="/facilities" className="inline-block bg-white text-[#003399] font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition">
                View Facilities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
