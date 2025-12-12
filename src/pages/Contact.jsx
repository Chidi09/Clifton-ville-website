import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (connect to backend/email service)
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Address",
      details: ["Itori, Ewekoro LGA", "Abeokuta, Ogun State", "Nigeria"],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+447 846325256", "+234 8125935055", "+234 911 1111 102"],
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["Laidegr.cliftonville@outlook.com"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 8am - 6pm", "Saturday: 9am - 4pm", "Sunday: Emergencies only"],
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
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
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're here to help. Reach out for inquiries, referrals, or to schedule a visit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-[#003399]/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="text-[#003399]" size={24} />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                {item.details.map((detail, dIdx) => (
                  <p key={dIdx} className="text-slate-600 text-sm">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-[#003399] text-white p-10 rounded-3xl h-full">
                <h2 className="text-3xl font-bold mb-6">Let's Talk</h2>
                <p className="text-blue-100 mb-10 leading-relaxed">
                  Whether you're looking for care for yourself or a loved one, or simply want to learn more about Cliftonville, we're here to help. Fill out the form and we'll get back to you promptly.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#f59e0b]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Visit Us</h3>
                      <p className="text-blue-200 text-sm">Itori, Ewekoro LGA, Abeokuta, Ogun State, Nigeria</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="text-[#f59e0b]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Call Us</h3>
                      <p className="text-blue-200 text-sm">+447 846325256</p>
                      <p className="text-blue-200 text-sm">+234 8125935055</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-[#f59e0b]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email Us</h3>
                      <p className="text-blue-200 text-sm">Laidegr.cliftonville@outlook.com</p>
                    </div>
                  </div>
                </div>

                {/* Social Links Placeholder */}
                <div className="mt-12 pt-8 border-t border-white/20">
                  <p className="text-sm text-blue-200 mb-4">Follow us on social media</p>
                  <div className="flex gap-4">
                    {/* PLACEHOLDER: Add actual social media links */}
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#f59e0b] transition-colors cursor-pointer">
                      <span className="text-xs">FB</span>
                    </div>
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#f59e0b] transition-colors cursor-pointer">
                      <span className="text-xs">IG</span>
                    </div>
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#f59e0b] transition-colors cursor-pointer">
                      <span className="text-xs">TW</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white p-10 rounded-3xl shadow-xl">
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Referral Form</h2>
                <p className="text-slate-600 mb-8">Interested in Cliftonville? Send us a message and we'll respond within 24 hours.</p>

                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-green-600" size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Thank You!</h3>
                    <p className="text-slate-600">We've received your inquiry and will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">First Name *</label>
                        <input 
                          type="text" 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#003399] focus:border-transparent outline-none transition" 
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                        <input 
                          type="text" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#003399] focus:border-transparent outline-none transition" 
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#003399] focus:border-transparent outline-none transition" 
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Phone *</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#003399] focus:border-transparent outline-none transition" 
                          placeholder="+234 800 000 0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#003399] focus:border-transparent outline-none transition"
                      >
                        <option value="">Select a subject</option>
                        <option value="referral">New Referral</option>
                        <option value="inquiry">General Inquiry</option>
                        <option value="visit">Schedule a Visit</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Message / Inquiry *</label>
                      <textarea 
                        rows="5" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#003399] focus:border-transparent outline-none transition resize-none"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-[#f59e0b] text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition shadow-lg flex items-center justify-center gap-2"
                    >
                      <Send size={20} />
                      Submit Inquiry
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#f59e0b] font-bold uppercase tracking-widest text-sm">Location</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003399] mt-4">Find Us</h2>
          </div>

          {/* MAP PLACEHOLDER */}
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] bg-slate-200 flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="text-slate-400 mx-auto mb-4" size={48} />
              <p className="text-slate-500 text-lg font-medium">[MAP PLACEHOLDER]</p>
              <p className="text-slate-400 text-sm mt-2">Embed Google Maps here showing:<br />Itori, Ewekoro LGA, Ogun State, Nigeria</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
