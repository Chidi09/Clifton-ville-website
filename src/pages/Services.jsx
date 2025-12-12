import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Pill, Smile, Utensils, Activity, Heart, Stethoscope, Users, CalendarCheck } from 'lucide-react';

const Services = () => {
  const services = [
    { 
      icon: CheckCircle, 
      title: "Personalized Care Plans", 
      desc: "Each resident receives a customized care plan tailored to their individual needs, ensuring they receive the support they require while maintaining their independence.",
      features: ["Individual assessment", "Regular care reviews", "Family involvement", "Flexible adjustments"]
    },
    { 
      icon: Clock, 
      title: "24/7 Support Staff", 
      desc: "Our dedicated team of caregivers is available round-the-clock to provide assistance, guidance, and companionship whenever needed.",
      features: ["Day and night coverage", "Emergency response", "Professional caregivers", "Continuous monitoring"]
    },
    { 
      icon: Pill, 
      title: "Medication Management", 
      desc: "Our trained staff ensures that residents receive their medications on time and as prescribed, promoting health and well-being.",
      features: ["Secure storage", "Timely administration", "Record keeping", "Doctor coordination"]
    },
    { 
      icon: Smile, 
      title: "Recreational Activities", 
      desc: "We offer a variety of engaging activities and events to keep residents stimulated, active, and connected within the community.",
      features: ["Social events", "Group activities", "Entertainment", "Community outings"]
    },
    { 
      icon: Utensils, 
      title: "Meal Preparation", 
      desc: "Our chefs create delicious and nutritious meals, accommodating special dietary needs and preferences.",
      features: ["Balanced nutrition", "Special diets", "Fresh ingredients", "Cultural preferences"]
    },
    { 
      icon: Activity, 
      title: "Health & Wellness", 
      desc: "Ongoing health monitoring and wellness programs to ensure physical health matches mental well-being.",
      features: ["Regular check-ups", "Exercise programs", "Mental wellness", "Therapy sessions"]
    },
  ];

  const additionalServices = [
    { icon: Heart, title: "Emotional Support", desc: "Compassionate care for mental and emotional well-being." },
    { icon: Stethoscope, title: "On-site Medical Care", desc: "Access to medical professionals and clinic facilities." },
    { icon: Users, title: "Family Engagement", desc: "Regular updates and involvement of family members." },
    { icon: CalendarCheck, title: "Activity Planning", desc: "Structured daily activities and special events." },
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
              What We Offer
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive care designed around the individual. We provide a full spectrum of services to ensure our residents live comfortably and happily.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100"
              >
                <div className="w-16 h-16 bg-[#003399]/10 rounded-2xl flex items-center justify-center text-[#003399] mb-6 group-hover:bg-[#003399] group-hover:text-white transition-colors">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm text-slate-500">
                      <CheckCircle size={16} className="text-[#f59e0b]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Strip */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003399]">Additional Support</h2>
            <p className="text-slate-600 mt-2">Beyond our core services, we provide specialized care in these areas.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-50 p-6 rounded-xl text-center hover:bg-[#003399] hover:text-white transition-colors group cursor-default"
              >
                <service.icon size={32} className="mx-auto mb-4 text-[#003399] group-hover:text-white transition-colors" />
                <h3 className="font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-slate-500 group-hover:text-blue-100 transition-colors">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#003399] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#f59e0b] font-bold uppercase tracking-widest text-sm">How It Works</span>
            <h2 className="text-4xl font-bold mt-4">Our Care Process</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Initial Consultation", desc: "We discuss your needs and assess how we can help." },
              { step: "02", title: "Care Assessment", desc: "Our team creates a comprehensive care evaluation." },
              { step: "03", title: "Personalized Plan", desc: "We develop a tailored care plan just for you." },
              { step: "04", title: "Ongoing Support", desc: "Continuous care with regular reviews and adjustments." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center relative"
              >
                <div className="text-6xl font-bold text-white/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-200">{item.desc}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 w-1/2 h-0.5 bg-white/20 transform translate-x-1/2"></div>
                )}
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#003399] mb-6">Need More Information?</h2>
            <p className="text-slate-600 text-lg mb-8">
              Contact us to learn more about our services and how we can support you or your loved ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-block bg-[#f59e0b] text-white font-bold px-10 py-4 rounded-full hover:bg-orange-600 transition shadow-lg">
                Contact Us
              </Link>
              <Link to="/facilities" className="inline-block bg-[#003399] text-white font-bold px-10 py-4 rounded-full hover:bg-blue-800 transition">
                View Facilities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
