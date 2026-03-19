import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, HeartPulse, ShieldCheck, Sparkles } from 'lucide-react';

const plans = [
  {
    title: 'Independent',
    subtitle: 'Retirement Living',
    price: '₦1.2M',
    accent: 'from-sky-500 to-blue-600',
    ring: 'ring-sky-200',
    points: [
      'Ideal for residents with a high level of personal independence',
      'Comfort-focused apartment lifestyle with community support',
      'Access to core services and facilities across the estate',
    ],
    icon: Sparkles,
  },
  {
    title: 'Semi Independent',
    subtitle: 'Assisted Living',
    price: '₦1.55M',
    accent: 'from-[#003399] to-blue-800',
    ring: 'ring-blue-200',
    featured: true,
    points: [
      'Balanced care model for residents needing moderate support',
      'Daily assistance with routines while preserving dignity',
      'Structured wellbeing checks and responsive care coordination',
    ],
    icon: HeartPulse,
  },
  {
    title: 'Dependent Clients',
    subtitle: 'Nursing Home Care',
    price: '₦2.3M',
    accent: 'from-amber-500 to-orange-600',
    ring: 'ring-orange-200',
    points: [
      'Comprehensive support for residents with advanced care needs',
      'Closer clinical supervision and personalized care attention',
      'Continuous monitoring with specialist-led care planning',
    ],
    icon: ShieldCheck,
  },
];

const Pricing = () => {
  return (
    <div className="overflow-x-hidden bg-stone-50">
      <section className="bg-gradient-to-br from-[#003399] to-blue-900 py-24 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-white rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f59e0b] rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs md:text-sm uppercase tracking-widest font-bold"
          >
            Pricing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-5"
          >
            Care Packages Tailored to Need
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-base md:text-lg max-w-3xl mx-auto mt-5 leading-relaxed"
          >
            Our pricing is structured by care level so each resident receives the right support while maintaining comfort, dignity, and a high quality of life.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-7 md:gap-8">
            {plans.map((plan, idx) => (
              <motion.article
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: idx * 0.08 }}
                className={`relative rounded-3xl bg-white border border-slate-200 p-7 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ring-1 ${plan.ring} ${plan.featured ? 'lg:-translate-y-3' : ''}`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-6 rounded-full bg-[#003399] text-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide shadow-lg">
                    Most Selected
                  </div>
                )}

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.accent} text-white flex items-center justify-center shadow-lg`}>
                  <plan.icon size={26} />
                </div>

                <p className="text-slate-500 text-sm font-semibold uppercase tracking-wide mt-6">{plan.subtitle}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">{plan.title}</h2>

                <div className="mt-5 flex items-end gap-2">
                  <p className="text-4xl md:text-5xl font-extrabold text-slate-900">{plan.price}</p>
                  <span className="text-slate-500 font-semibold pb-1">Quarterly</span>
                </div>

                <div className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 my-6" />

                <ul className="space-y-4">
                  {plan.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-sm md:text-base">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 md:mt-12 rounded-3xl bg-slate-900 text-slate-200 p-6 md:p-8 border border-slate-700"
          >
            <p className="font-semibold text-white">Pricing note</p>
            <p className="mt-2 text-sm md:text-base leading-relaxed">
              Package placement is based on assessed care requirements at the point of onboarding to ensure each resident receives the right level of support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-sky-600 to-blue-700 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 text-white text-center shadow-2xl"
          >
            <h3 className="text-2xl md:text-4xl font-bold">Ready to choose a package?</h3>
            <p className="text-sky-100 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Speak with our team for availability, guidance on the right care level, and next steps for onboarding.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 bg-white text-sky-700 px-8 py-3.5 rounded-full font-bold hover:bg-sky-50 transition-all hover:scale-105"
            >
              Contact Admissions Team
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
