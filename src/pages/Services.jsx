import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Pill, Smile, Utensils, Activity, Heart, Stethoscope, Users, CalendarCheck, Scissors, Waves, Sparkles, UserCheck, Brain, Beaker } from 'lucide-react';

// Import service images
import personalizedCareImage from '../assets/services images/Black elderly adult care consultation with nurse in modern supported living community.jpg';
import supportStaffImage from '../assets/services images/Black professional caregiver assisting elderly resident at night modern home interior.jpg';
import medicationImage from '../assets/services images/Black nurse administering medication to elderly Black resident in clinic setting.jpg';
import recreationalImage from '../assets/services images/Group of Black seniors playing indoor games in bright lounge assisted living.jpg';
import mealPrepImage from '../assets/services images/Black chef presenting healthy meal to senior Black couple in modern restaurant lounge.jpg';
import healthWellnessImage from '../assets/services images/Black seniors participating in light exercise program with instructor in assisted living gym.jpg';
import salonImage from '../assets/services images/Professional Black stylist cutting hair for elderly Black man in on-site salon.jpg';
import therapeuticImage from '../assets/services images/Black seniors relaxing in a modern sauna or hot tub in luxury wellness center.jpg';
import wellbeingImage from '../assets/services images/Team of professional Black nurses and medical consultants discussing charts in clinic.jpg';
import occupationalTherapyImage from '../assets/services images/Black occupational therapist helping senior Black woman with daily living skills in home setting.jpg';
import mentalHealthImage from '../assets/services images/Black psychologist counseling elderly Black patient in private therapy room.jpg';
import clinicLabImage from '../assets/services images/Black nurse performing diagnostic test on senior Black resident in modern on-site clinic laboratory.jpg';

const Services = () => {
  const servicesSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: servicesSectionRef,
    offset: ["start end", "end start"]
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.6, 0.6, 0.3]);

  const services = [
    { 
      icon: CheckCircle, 
      title: "Personalized Care Plans", 
      desc: "Each resident receives a customized care plan tailored to their individual needs, ensuring they receive the support they require while maintaining their independence.",
      features: ["Individual assessment", "Regular care reviews", "Family involvement", "Flexible adjustments"],
      image: personalizedCareImage
    },
    { 
      icon: Clock, 
      title: "24/7 Support Staff", 
      desc: "Our dedicated team of caregivers is available round-the-clock to provide assistance, guidance, and companionship whenever needed.",
      features: ["Day and night coverage", "Emergency response", "Professional caregivers", "Continuous monitoring"],
      image: supportStaffImage
    },
    { 
      icon: Pill, 
      title: "Medication Management", 
      desc: "Our trained staff ensures that residents receive their medications on time and as prescribed, promoting health and well-being.",
      features: ["Secure storage", "Timely administration", "Record keeping", "Doctor coordination"],
      image: medicationImage
    },
    { 
      icon: Smile, 
      title: "Recreational Activities", 
      desc: "We offer a variety of engaging activities and events to keep residents stimulated, active, and connected within the community.",
      features: ["Social events", "Group activities", "Entertainment", "Community outings"],
      image: recreationalImage
    },
    { 
      icon: Utensils, 
      title: "Meal Preparation", 
      desc: "Our chefs create delicious and nutritious meals, accommodating special dietary needs and preferences.",
      features: ["Balanced nutrition", "Special diets", "Fresh ingredients", "Cultural preferences"],
      image: mealPrepImage
    },
    { 
      icon: Activity, 
      title: "Health & Wellness", 
      desc: "Ongoing health monitoring and wellness programs to ensure physical health matches mental well-being.",
      features: ["Regular check-ups", "Exercise programs", "Mental wellness", "Therapy sessions"],
      image: healthWellnessImage
    },
    { 
      icon: Scissors, 
      title: "Barbing and Hair Dressing Salon", 
      desc: "Professional grooming services to help residents look and feel their best with convenient on-site salon facilities.",
      features: ["Professional stylists", "Hair cutting and styling", "Beard trimming", "Personal grooming"],
      image: salonImage
    },
    { 
      icon: Waves, 
      title: "Therapeutic Services", 
      desc: "Relaxation and therapeutic treatments to promote physical wellness and stress relief.",
      features: ["Massage therapy", "Hot tub access", "Sauna facilities", "Relaxation treatments"],
      image: therapeuticImage
    },
    { 
      icon: UserCheck, 
      title: "Wellbeing Services", 
      desc: "Comprehensive healthcare team including consultants, specialist nurses, and healthcare assistants dedicated to resident wellbeing.",
      features: ["Medical consultants", "Specialist nurses", "Geriatric nurses", "General nurses", "Auxiliary nurses", "Healthcare assistants"],
      image: wellbeingImage
    },
    { 
      icon: Activity, 
      title: "Occupational Therapy Services", 
      desc: "Professional occupational therapy to help residents maintain independence and improve daily living skills.",
      features: ["Daily living support", "Skill development", "Adaptive techniques", "Rehabilitation programs"],
      image: occupationalTherapyImage
    },
    { 
      icon: Brain, 
      title: "Mental Health Services", 
      desc: "Comprehensive mental health support using evidence-based therapeutic approaches including CBT, Psychodynamic, and EMDR to address trauma, addiction, family issues, and more.",
      features: ["Psychologist services", "Psychiatrist consultations", "Counseling services", "Specialist therapy (Trauma, Addiction, Family, Art)", "CBT, Psychodynamic, EMDR approaches"],
      image: mentalHealthImage
    },
    { 
      icon: Beaker, 
      title: "On-site Clinic/Laboratory Services", 
      desc: "On-site clinic and laboratory providing convenient diagnostic testing and health monitoring services.",
      features: ["Medical consultations", "Diagnostic testing", "Health screenings", "Blood work", "Quick results"],
      image: clinicLabImage
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
      <section ref={servicesSectionRef} className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div style={{ y: y1, opacity }} className="absolute top-20 left-10 w-72 h-72 bg-[#003399] rounded-full blur-3xl"></motion.div>
          <motion.div style={{ y: y2, opacity }} className="absolute bottom-20 right-10 w-96 h-96 bg-[#f59e0b] rounded-full blur-3xl"></motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-16 md:space-y-24 lg:space-y-32">
            {services.map((service, idx) => {
              const isEven = idx % 2 === 0;
              // Calculate parallax offset based on index and scroll progress
              const parallaxOffset = (idx % 3) * 20 - 20;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-150px" }}
                  transition={{ duration: 0.8, delay: idx * 0.05 }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-10 lg:gap-16 items-center group relative`}
                >
                  {/* Decorative Number Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                    className={`absolute ${isEven ? 'md:left-[-80px]' : 'md:right-[-80px]'} top-0 md:top-1/2 md:-translate-y-1/2 z-0 hidden md:block`}
                  >
                    <div className="text-8xl font-black text-slate-100 select-none">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                  </motion.div>

                  {/* Image Section */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -80 : 80, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                    className="flex-1 w-full md:w-1/2 relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl z-10"
                  >
                    <motion.div
                      whileInView={{ y: parallaxOffset }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="aspect-[4/3] md:aspect-[16/10] overflow-hidden relative"
                    >
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {/* Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                        style={{ width: '50%' }}
                      />
                      {/* Icon Badge on Hover */}
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        whileHover={{ opacity: 1, y: 0, scale: 1 }}
                        className="absolute bottom-6 left-6 right-6"
                      >
                        <div className="w-16 h-16 bg-[#003399] rounded-2xl flex items-center justify-center shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                          <service.icon size={32} className="text-white" />
                        </div>
                      </motion.div>
                    </motion.div>
                    {/* Decorative Border */}
                    <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#f59e0b]/50 rounded-2xl md:rounded-3xl transition-all duration-500 pointer-events-none"></div>
                  </motion.div>

                  {/* Content Section */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 80 : -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                    className="flex-1 w-full md:w-1/2 z-10"
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                    >
                      {/* Background Pattern */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#003399]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                      
                      <div className="relative z-10">
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#003399]/10 to-[#003399]/5 rounded-2xl flex items-center justify-center text-[#003399] mb-6 group-hover:bg-gradient-to-br group-hover:from-[#003399] group-hover:to-blue-800 group-hover:text-white transition-all duration-500 shadow-lg"
                        >
                          <service.icon size={32} className="md:w-10 md:h-10" />
                        </motion.div>
                        
                        <motion.h3
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 md:mb-6 group-hover:text-[#003399] transition-colors duration-300 leading-tight"
                        >
                          {service.title}
                        </motion.h3>
                        
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 }}
                          className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-base md:text-lg lg:text-xl"
                        >
                          {service.desc}
                        </motion.p>
                        
                        <motion.ul
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                          className="space-y-3 md:space-y-4"
                        >
                          {service.features.map((feature, fIdx) => (
                            <motion.li
                              key={fIdx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 + fIdx * 0.05, type: "spring" }}
                              whileHover={{ x: 5 }}
                              className="flex items-start gap-3 text-sm md:text-base lg:text-lg text-slate-700 group/item"
                            >
                              <motion.div
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.3 }}
                              >
                                <CheckCircle size={20} className="text-[#f59e0b] flex-shrink-0 mt-0.5" />
                              </motion.div>
                              <span className="group-hover/item:text-[#003399] transition-colors">{feature}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
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
