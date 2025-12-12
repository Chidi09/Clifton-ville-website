import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Target, Eye, Users, Award, Clock } from 'lucide-react';
import nursingStaffImage from '../assets/lady helping a woman on crutches.jpg';

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#003399] to-blue-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-2 px-4 mb-6 rounded-full bg-white/10 text-white font-bold text-sm uppercase tracking-wider">
              About Cliftonville
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Who We Are</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We nurture responsibly. Discover the heart behind Cliftonville and our commitment to exceptional care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* IMAGE PLACEHOLDER */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -inset-4 bg-[#f59e0b]/20 rounded-3xl transform -rotate-3"></div>
              {/* Nursing Staff Group Photo - The professional team caring for residents */}
              <div className="relative rounded-3xl shadow-2xl w-full h-[550px] overflow-hidden">
                <img 
                  src={nursingStaffImage} 
                  alt="Cliftonville Gardens Professional Nursing Staff - Caring team helping residents" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-[#f59e0b] font-bold uppercase tracking-widest text-sm">Our Story</span>
              <h2 className="text-4xl font-bold text-[#003399] mt-4 mb-6">A Safe and Nurturing Community</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Welcome to Cliftonville, a premier supported living community designed to provide exceptional care and support for adults aged 18 and above.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Cliftonville is more than just a supported living community; it's a place where residents can thrive and create lasting memories. Our dedicated team works around the clock to ensure dignity, respect, and joy for every resident.
              </p>
              
              {/* Mission Card */}
              <div className="bg-[#003399] p-8 rounded-2xl text-white mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="text-[#f59e0b]" size={28} />
                  <h3 className="text-xl font-bold">Our Mission</h3>
                </div>
                <p className="text-blue-100 italic text-lg leading-relaxed">
                  "To create a safe, nurturing environment where residents can thrive and lead fulfilling lives."
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="text-[#003399]" size={28} />
                  <h3 className="text-xl font-bold text-slate-800">Our Vision</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  To be the leading supported living community in Nigeria, setting the standard for compassionate care, modern facilities, and holistic wellness.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#003399]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm">What Drives Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Our Values</h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Compassion", desc: "We treat every resident with kindness, empathy, and understanding." },
              { icon: Users, title: "Community", desc: "Building meaningful connections and a sense of belonging." },
              { icon: Award, title: "Excellence", desc: "Striving for the highest standards in everything we do." },
              { icon: Clock, title: "Dedication", desc: "24/7 commitment to the well-being of our residents." },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-blue-900/50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-blue-800/50"
              >
                <div className="w-16 h-16 bg-yellow-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-yellow-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/90 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-[#003399] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#f59e0b] font-bold uppercase tracking-widest text-sm">Our Location</span>
              <h2 className="text-4xl font-bold mt-4 mb-6">Where to Find Us</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                Cliftonville is nestled in the serene environment of Itori, Ewekoro LGA, Ogun State, Nigeria. Our location offers the perfect balance of peaceful surroundings and accessibility.
              </p>
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-2">Address</h3>
                <p className="text-blue-100">Itori, Ewekoro LGA, Abeokuta, Ogun State, Nigeria</p>
              </div>
            </motion.div>

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31696.071567361!2d3.2!3d6.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bafa737e3ff75%3A0xe915b8b36bbe8fd9!2sItori%20110106%2C%20Ogun%20State!5e0!3m2!1sen!2sng!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cliftonville Gardens Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003399] mb-6">Ready to Visit Cliftonville?</h2>
          <p className="text-slate-600 text-lg mb-8">
            We'd love to show you around and answer any questions you may have about our community.
          </p>
          <Link to="/contact" className="inline-block bg-[#f59e0b] text-white font-bold px-10 py-4 rounded-full hover:bg-orange-600 transition shadow-lg">
            Schedule a Visit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
