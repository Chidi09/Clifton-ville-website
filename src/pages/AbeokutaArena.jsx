import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Zap, 
  Compass, 
  CreditCard, 
  FileCheck2, 
  Award, 
  HeartHandshake, 
  Home, 
  Building, 
  Pill, 
  Smile, 
  Utensils, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  CheckCircle2, 
  Play, 
  Pause,
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Sparkles,
  UserCheck,
  Eye,
  MessageSquare,
  Maximize2,
  Volume2,
  VolumeX,
  Layers,
  Grid,
  Film,
  Bed,
  Tv,
  Bath,
  Flame,
  Check,
  RotateCcw
} from 'lucide-react';

// Images
import exteriorNightFront from '../assets/abeokuta/exterior-night-front.jpeg';
import exteriorNightAerial from '../assets/abeokuta/exterior-night-aerial.jpeg';
import exteriorDayFront from '../assets/abeokuta/exterior-day-front.jpeg';
import exteriorDayFull from '../assets/abeokuta/exterior-day-full.jpeg';
import thumbLivingRoom from '../assets/abeokuta/thumb-living-room.jpg';
import thumbKitchen from '../assets/abeokuta/thumb-kitchen.jpg';
import thumbBedroom from '../assets/abeokuta/thumb-bedroom.jpg';
import thumbBathroom from '../assets/abeokuta/thumb-bathroom.jpg';
import thumbLounge from '../assets/abeokuta/thumb-lounge.jpg';
import thumbBedroomDetail from '../assets/abeokuta/thumb-bedroom-detail.jpg';

// Videos
import livingRoomTour from '../assets/abeokuta/living-room-tour.mp4';
import kitchenTour from '../assets/abeokuta/kitchen-tour.mp4';
import bedroomTour from '../assets/abeokuta/bedroom-tour.mp4';
import bathroomTour from '../assets/abeokuta/bathroom-tour.mp4';
import interiorLoungeTour from '../assets/abeokuta/interior-lounge-tour.mp4';
import bedroomDetailTour from '../assets/abeokuta/bedroom-detail-tour.mp4';

const AbeokutaArena = () => {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'videos', 'photos', 'interior', 'exterior'
  const [viewMode, setViewMode] = useState('theater'); // 'theater' or 'grid'
  
  // Theater mode state
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const mainVideoRef = useRef(null);

  // Lightbox Modal state
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [selectedMediaType, setSelectedMediaType] = useState('video');
  const [selectedMediaTitle, setSelectedMediaTitle] = useState('');
  const [selectedMediaSubtitle, setSelectedMediaSubtitle] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
    interest: 'Site Visit & Inspection',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const galleryItems = [
    {
      id: 1,
      type: 'photo',
      category: 'exterior',
      spaceTag: 'Architecture',
      icon: Building,
      title: 'Architectural Facade (Daytime View)',
      subtitle: 'Modern dual-level architecture with private cantilevered balcony, floor-to-ceiling tinted glazing, and textured brick accents.',
      src: exteriorDayFull,
      thumb: exteriorDayFull,
      highlights: [
        'Contemporary Geometric Elevation',
        'Private Master Suite Balcony',
        'Floor-to-Ceiling Thermal Glazing',
        'Decorative Brick Finish & Cornices',
      ],
    },
    {
      id: 2,
      type: 'photo',
      category: 'exterior',
      spaceTag: 'Entrance & Courtyard',
      icon: Compass,
      title: 'Front Entrance & Landscaped Driveway',
      subtitle: 'Grand entrance foyer and extensive interlocked concrete parking court with manicured perimeter planters.',
      src: exteriorDayFront,
      thumb: exteriorDayFront,
      highlights: [
        'Stamped Interlocked Paved Court',
        'Contemporary Architectural Planters',
        'Recessed Porch Downlights',
        'Multiple Vehicle Parking Capacity',
      ],
    },
    {
      id: 3,
      type: 'photo',
      category: 'exterior',
      spaceTag: 'Night Illumination',
      icon: Sparkles,
      title: 'Architectural Facade (Night Illumination)',
      subtitle: 'Atmospheric exterior architectural lighting highlighting facade textures, entrance portals, and perimeter security.',
      src: exteriorNightFront,
      thumb: exteriorNightFront,
      highlights: [
        'Warm Ambient Facade Sconces',
        'Integrated Soffit LED Downlighting',
        'High-Security Compound Illumination',
        'Striking Nighttime Aesthetic',
      ],
    },
    {
      id: 4,
      type: 'photo',
      category: 'exterior',
      spaceTag: 'Aerial View',
      icon: Shield,
      title: 'Aerial View of the Compound',
      subtitle: 'Elevated bird’s-eye perspective illustrating the spacious perimeter boundary, security gatehouse, and paved driveway.',
      src: exteriorNightAerial,
      thumb: exteriorNightAerial,
      highlights: [
        'High Perimeter Security Walls',
        'Dedicated Gated Access Point',
        'Wide Access Circulation Pathways',
        'Peaceful GRA Ibara Residential Enclave',
      ],
    },
    {
      id: 5,
      type: 'video',
      category: 'interior',
      spaceTag: 'Main Living Room',
      icon: Tv,
      title: 'Living Room & Entertainment Lounge',
      subtitle: 'Designer living area with fluted acoustic wood slat feature wall, 4K Smart display, tray ceiling LED illumination, and plush seating.',
      src: livingRoomTour,
      thumb: thumbLivingRoom,
      highlights: [
        'Acoustic Fluted Wood Paneling',
        'Concealed Ambient LED Strip Lighting',
        'High-Grade Italian Ceramic Flooring',
        'High-Efficiency Climate Inverter AC',
      ],
    },
    {
      id: 6,
      type: 'video',
      category: 'interior',
      spaceTag: 'Chef Kitchen',
      icon: Flame,
      title: 'Fully Fitted Modern Kitchen',
      subtitle: 'Custom high-gloss cabinetry, marble-veined quartz surfaces, integrated gas cooktop, extractor hood, and front-load laundry.',
      src: kitchenTour,
      thumb: thumbKitchen,
      highlights: [
        'Marble-Patterned Quartz Countertops',
        'Under-Cabinet Warm LED Task Lighting',
        'Built-in Gas Burner & Glass Range Hood',
        'Integrated Front-Loading Washing Machine',
      ],
    },
    {
      id: 7,
      type: 'video',
      category: 'interior',
      spaceTag: 'Master Suite',
      icon: Bed,
      title: 'Luxury Master Bedroom Suite',
      subtitle: 'Serene master bedroom featuring tufted velvet headboard, fluted accent wall, dual-tier drapery, and independent climate control.',
      src: bedroomTour,
      thumb: thumbBedroom,
      highlights: [
        'Tufted Velvet King Headboard',
        'Floor-to-Ceiling Privacy Drapery',
        'Designer False Ceiling & Indirect Blue Light',
        'Ensuite Wardrobe & Private Access',
      ],
    },
    {
      id: 8,
      type: 'video',
      category: 'interior',
      spaceTag: 'Ensuite Spa',
      icon: Bath,
      title: 'Designer Ensuite Bathroom',
      subtitle: 'Spa-inspired bathroom fitted with matte black thermostatic rainfall shower fixtures, porcelain tiling, and water-efficient suite.',
      src: bathroomTour,
      thumb: thumbBathroom,
      highlights: [
        'Matte Black Overhead Rainfall Shower',
        'Porcelain Marble-Style Wall Tiles',
        'Dual-Mode Handheld Shower Wand',
        'Modern Wall-Hung Water Closet',
      ],
    },
    {
      id: 9,
      type: 'video',
      category: 'interior',
      spaceTag: 'Living Corridor',
      icon: Home,
      title: 'Interior Corridor & Living Space',
      subtitle: 'Seamless flow and immaculate finishes connecting the living reception, private suites, and dining lounge.',
      src: interiorLoungeTour,
      thumb: thumbLounge,
      highlights: [
        'Wide Hallways for Easy Mobility',
        'Reflective Polished Tilework',
        'Energy-Efficient Concealed Lighting',
        'Solid Core Luxury Interior Doors',
      ],
    },
    {
      id: 10,
      type: 'video',
      category: 'interior',
      spaceTag: 'Bedroom Comfort',
      icon: Bed,
      title: 'Bedroom Comfort & Interior Finishes',
      subtitle: 'Detailed view of the premium bedding, integrated bedside power hubs, and tranquil ambiance crafted for restful living.',
      src: bedroomDetailTour,
      thumb: thumbBedroomDetail,
      highlights: [
        'Orthopedic Sleep System',
        'Integrated Bedside Power & Lighting',
        'Hypoallergenic Modern Finishes',
        'Optimal Natural Light & Ventilation',
      ],
    },
  ];

  const filteredGallery = galleryItems.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'videos') return item.type === 'video';
    if (activeTab === 'photos') return item.type === 'photo';
    if (activeTab === 'interior') return item.category === 'interior';
    if (activeTab === 'exterior') return item.category === 'exterior';
    return true;
  });

  // Keep active theater item valid when switching tabs
  const activeItem = filteredGallery[activeItemIndex] || filteredGallery[0] || galleryItems[0];

  // Video play/pause in theater
  const togglePlay = () => {
    if (!mainVideoRef.current) return;
    if (mainVideoRef.current.paused) {
      mainVideoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      mainVideoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!mainVideoRef.current) return;
    mainVideoRef.current.muted = !mainVideoRef.current.muted;
    setIsMuted(mainVideoRef.current.muted);
  };

  // Switch active item in theater
  const handleSelectTheaterItem = (index) => {
    setActiveItemIndex(index);
    setIsPlaying(true);
  };

  // Next / Prev in theater
  const handleNextTheater = () => {
    setActiveItemIndex((prev) => (prev + 1) % filteredGallery.length);
    setIsPlaying(true);
  };

  const handlePrevTheater = () => {
    setActiveItemIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length);
    setIsPlaying(true);
  };

  // Lightbox Modal Controls
  const openLightbox = (item, idx) => {
    setSelectedMedia(item.src);
    setSelectedMediaType(item.type);
    setSelectedMediaTitle(item.title);
    setSelectedMediaSubtitle(item.subtitle);
    setCurrentIndex(idx);
  };

  const closeLightbox = useCallback(() => {
    setSelectedMedia(null);
  }, []);

  const nextMedia = useCallback(() => {
    if (!selectedMedia) return;
    const nextIdx = (currentIndex + 1) % filteredGallery.length;
    const item = filteredGallery[nextIdx];
    setSelectedMedia(item.src);
    setSelectedMediaType(item.type);
    setSelectedMediaTitle(item.title);
    setSelectedMediaSubtitle(item.subtitle);
    setCurrentIndex(nextIdx);
  }, [currentIndex, filteredGallery, selectedMedia]);

  const prevMedia = useCallback(() => {
    if (!selectedMedia) return;
    const prevIdx = (currentIndex - 1 + filteredGallery.length) % filteredGallery.length;
    const item = filteredGallery[prevIdx];
    setSelectedMedia(item.src);
    setSelectedMediaType(item.type);
    setSelectedMediaTitle(item.title);
    setSelectedMediaSubtitle(item.subtitle);
    setCurrentIndex(prevIdx);
  }, [currentIndex, filteredGallery, selectedMedia]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextMedia();
      if (e.key === 'ArrowLeft') prevMedia();
    };
    if (selectedMedia) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMedia, nextMedia, prevMedia, closeLightbox]);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSubmitError('');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('https://formspree.io/f/xvgedroq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subdivision: 'Abeokuta Residential Arena (GRA Ibara)',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date: formData.date,
          timeSlot: formData.timeSlot,
          interest: formData.interest,
          message: formData.message,
          recipientEmail: 'Laidegr.Cliftonville@outlook.com',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          timeSlot: 'Morning (10:00 AM - 1:00 PM)',
          interest: 'Site Visit & Inspection',
          message: '',
        });
      } else {
        setSubmitError('Unable to send request right now. Please call or WhatsApp us directly.');
      }
    } catch (err) {
      setSubmitError('Network error. Please call or WhatsApp us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: Shield,
      title: '24/7 Security',
      desc: 'A safe and worry-free environment with around-the-clock perimeter monitoring and access control.',
      color: 'from-blue-600 to-sky-700',
    },
    {
      icon: Compass,
      title: 'Good Road Network',
      desc: 'Paved, smooth roads ensuring easy, seamless access within and surrounding the estate.',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: Zap,
      title: 'Reliable Utilities',
      desc: 'Consistent, uninterrupted power and dependable treated water supply throughout all residences.',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: CreditCard,
      title: 'Flexible Payment Options',
      desc: 'Tailored payment structures designed to make luxury supported homeownership stress-free.',
      color: 'from-indigo-500 to-blue-600',
    },
    {
      icon: FileCheck2,
      title: 'Hassle-Free Documentation',
      desc: 'Prompt legal processing, deed documentation, and clear verified property records.',
      color: 'from-sky-500 to-cyan-600',
    },
    {
      icon: Award,
      title: 'Secure Ownership',
      desc: '100% verified titles and protected investment value in a high-growth GRA location.',
      color: 'from-purple-500 to-indigo-600',
    },
  ];

  const services = [
    {
      icon: UserCheck,
      title: 'Live-in Carer',
      desc: 'Compassionate, round-the-clock professional live-in carers providing personalized assistance with utmost dignity.',
    },
    {
      icon: Home,
      title: 'Care in Your Own Home',
      desc: 'Specialized supported living and domiciliary assistance brought directly into the comfort of your residence.',
    },
    {
      icon: Building,
      title: 'Care in Our Facility',
      desc: 'Full access to our modern, medically equipped supported living community and dedicated care team.',
    },
    {
      icon: Pill,
      title: 'Medication Management',
      desc: 'Meticulous scheduling, secure storage, and timely administration of medications by qualified staff.',
    },
    {
      icon: Smile,
      title: 'Recreational & Wellness Activities',
      desc: 'Engaging social gatherings, wellness sessions, and recreational pursuits that promote mental and physical vitality.',
    },
    {
      icon: Utensils,
      title: 'Meal Preparation',
      desc: 'Nutritious, chef-curated culinary meals prepared fresh daily to suit individual dietary requirements and tastes.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden">
        {/* Background Image with Ken Burns zoom effect */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            src={exteriorNightFront} 
            alt="Cliftonville Residential Arena Abeokuta" 
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-slate-950/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-24 text-center lg:text-left grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/20 border border-sky-400/40 backdrop-blur-md mb-6"
            >
              <Sparkles size={16} className="text-sky-400" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-sky-200">
                A Subdivision of Cliftonville Gardens
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
            >
              Abeokuta <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-200 to-white">
                Residential Arena
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-slate-300 text-base md:text-lg mb-6"
            >
              <MapPin size={20} className="text-sky-400 shrink-0" />
              <span>GRA IBARA Housing Cluster 2, Abeokuta, Ogun State</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto lg:mx-0 mb-8 font-light leading-relaxed"
            >
              <strong className="text-white font-semibold">Invest in Your Tomorrow. Own a Home in Cliftonville Gardens Today!</strong>{' '}
              Experience a blend of contemporary architectural elegance, 24/7 security, and world-class care in Abeokuta's premier residential enclave.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#book-visit"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-full font-bold text-base shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar size={18} />
                Book a Site Visit Today
              </a>
              <a
                href="#virtual-tour"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-base transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Play size={18} />
                Explore Virtual Tour
              </a>
            </motion.div>
          </div>

          {/* Quick Highlight Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 text-left shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300">
                <Building size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Turnkey Residence</h3>
                <p className="text-xs text-sky-200 uppercase tracking-wider">GRA Ibara Cluster 2</p>
              </div>
            </div>

            <ul className="space-y-3.5 text-sm text-slate-200 mb-6">
              <li className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                <span>24/7 Monitored Estate Security</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                <span>Modern Paved Road Infrastructure</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                <span>Dedicated Power & Water Supply</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                <span>Custom Supported Living Services</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                <span>Flexible Structured Payment Plans</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/10 text-center">
              <p className="text-xs text-slate-300 mb-2">Direct Inquiries:</p>
              <div className="flex flex-col gap-1 text-sm font-semibold text-white">
                <a href="tel:+2348125935055" className="hover:text-sky-300 transition-colors flex items-center justify-center gap-2">
                  <Phone size={14} className="text-sky-400" /> +234 812 593 5055
                </a>
                <a href="mailto:Laidegr.Cliftonville@outlook.com" className="hover:text-sky-300 transition-colors flex items-center justify-center gap-2 text-xs">
                  <Mail size={13} className="text-sky-400" /> Laidegr.Cliftonville@outlook.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          WHY CHOOSE CLIFTONVILLE GARDENS? (FEATURES)
          ============================================ */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block py-2 px-4 mb-4 rounded-full bg-[#003399]/10 text-[#003399] font-bold text-xs uppercase tracking-wider">
              Estate Value Proposition
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Why Choose Cliftonville Gardens?
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              We deliver the best care, world-class infrastructure, and peaceful living in a secure, master-planned residential community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                  <feature.icon size={30} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#003399] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#003399] to-blue-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-2xl font-bold mb-2">We Deliver the Best Care & Support Services</h3>
              <p className="text-blue-100 text-sm md:text-base max-w-2xl">
                Whether you desire an independent luxury home, assisted living support, or complete 24/7 care, our dedicated healthcare professionals are on hand.
              </p>
            </div>
            <a
              href="#services"
              className="px-8 py-3.5 bg-white text-[#003399] hover:bg-sky-50 rounded-full font-bold text-sm whitespace-nowrap transition-all shadow-md hover:scale-105"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================================
          UPGRADED: EXCLUSIVE PROPERTY SHOWCASE & CINEMATIC VIRTUAL TOUR
          ========================================================== */}
      <section id="virtual-tour" className="py-20 md:py-32 bg-slate-950 text-white relative overflow-hidden">
        {/* Subtle decorative background light blurs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-sky-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 md:mb-14 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-200 font-bold text-xs uppercase tracking-widest mb-4">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                Exclusive Property Showcase
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Virtual Video & Architectural Tour
              </h2>
              <p className="text-slate-400 text-sm md:text-lg max-w-2xl mt-3 font-light leading-relaxed">
                Take an immersive visual walkthrough of the newly finished Abeokuta Residential Arena in GRA Ibara Housing Cluster 2.
              </p>
            </motion.div>

            {/* View Mode Switcher + Filter Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Theater vs Grid Switcher */}
              <div className="flex bg-slate-900/90 p-1 rounded-2xl border border-slate-800 shadow-inner">
                <button
                  onClick={() => setViewMode('theater')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
                    viewMode === 'theater'
                      ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Film size={15} />
                  Theater Tour
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Grid size={15} />
                  Grid View
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {[
              { label: 'All Spaces (10)', value: 'all' },
              { label: 'Video Walkthroughs (6)', value: 'videos' },
              { label: 'Exterior Photos (4)', value: 'photos' },
              { label: 'Interior Living & Suites', value: 'interior' },
              { label: 'Architectural Exterior', value: 'exterior' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => {
                  setActiveTab(tab.value);
                  setActiveItemIndex(0);
                }}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.value
                    ? 'bg-white text-slate-950 font-bold shadow-lg shadow-white/10 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ========================================================
              MODE 1: CINEMATIC THEATER VIEW (DEFAULT & HIGH IMPACT)
              ======================================================== */}
          {viewMode === 'theater' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Main Theater Display Grid */}
              <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Left / Center: The Big Cinematic Player */}
                <div className="lg:col-span-8 bg-black rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl relative flex flex-col justify-center aspect-[16/10] sm:aspect-[16/9] group">
                  
                  {activeItem.type === 'video' ? (
                    <div className="relative w-full h-full bg-black flex items-center justify-center">
                      <video
                        key={activeItem.src}
                        ref={mainVideoRef}
                        src={activeItem.src}
                        poster={activeItem.thumb}
                        playsInline
                        autoPlay
                        loop
                        muted={isMuted}
                        className="w-full h-full object-contain"
                      />

                      {/* Custom Video Control Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 pointer-events-none">
                        
                        {/* Top bar controls */}
                        <div className="flex justify-between items-center pointer-events-auto">
                          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-bold text-white">
                            <activeItem.icon size={14} className="text-sky-400" />
                            {activeItem.spaceTag}
                          </span>

                          <button
                            onClick={() => openLightbox(activeItem, activeItemIndex)}
                            className="p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all"
                            title="Expand Fullscreen"
                          >
                            <Maximize2 size={16} />
                          </button>
                        </div>

                        {/* Bottom bar controls */}
                        <div className="flex items-center justify-between pointer-events-auto">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={togglePlay}
                              className="w-12 h-12 rounded-full bg-sky-500 hover:bg-sky-400 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                              title={isPlaying ? "Pause" : "Play"}
                            >
                              {isPlaying ? <Pause size={20} /> : <Play size={20} className="translate-x-0.5" />}
                            </button>

                            <button
                              onClick={toggleMute}
                              className="p-3 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-md transition-colors"
                              title={isMuted ? "Unmute" : "Mute"}
                            >
                              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                            </button>

                            <span className="text-xs font-medium text-slate-300 hidden sm:inline">
                              HD Video Tour • Click sound icon to hear audio
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={handlePrevTheater}
                              className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-colors"
                              title="Previous Space"
                            >
                              <ChevronLeft size={18} />
                            </button>
                            <button
                              onClick={handleNextTheater}
                              className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-colors"
                              title="Next Space"
                            >
                              <ChevronRight size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* High-Res Photo View in Theater */
                    <div className="relative w-full h-full bg-black flex items-center justify-center">
                      <motion.img
                        key={activeItem.src}
                        src={activeItem.src}
                        alt={activeItem.title}
                        initial={{ opacity: 0.4, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="w-full h-full object-cover"
                      />

                      {/* Photo Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                      {/* Top badge */}
                      <div className="absolute top-6 left-6 z-10">
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-bold text-sky-300">
                          <Eye size={14} /> High-Res Daytime / Night Photo
                        </span>
                      </div>

                      {/* Fullscreen Button */}
                      <div className="absolute top-6 right-6 z-10">
                        <button
                          onClick={() => openLightbox(activeItem, activeItemIndex)}
                          className="p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110"
                          title="Open in High-Res Lightbox"
                        >
                          <Maximize2 size={18} />
                        </button>
                      </div>

                      {/* Bottom Arrows */}
                      <div className="absolute bottom-6 right-6 z-10 flex gap-2">
                        <button
                          onClick={handlePrevTheater}
                          className="p-3 rounded-full bg-black/60 hover:bg-sky-600 text-white backdrop-blur-md border border-white/20 transition-colors"
                          title="Previous Space"
                        >
                          <ChevronLeft size={18} />
                        </button>
                        <button
                          onClick={handleNextTheater}
                          className="p-3 rounded-full bg-black/60 hover:bg-sky-600 text-white backdrop-blur-md border border-white/20 transition-colors"
                          title="Next Space"
                        >
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Corner indicator badge */}
                  <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
                    <span className="px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md text-[11px] font-mono text-slate-300 border border-white/10">
                      Space {activeItemIndex + 1} of {filteredGallery.length}
                    </span>
                  </div>
                </div>

                {/* Right: Architectural Details & Highlights Card */}
                <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800 rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between shadow-2xl backdrop-blur-md">
                  <div>
                    {/* Header info */}
                    <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800">
                      <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-widest">
                        <activeItem.icon size={16} />
                        <span>{activeItem.spaceTag}</span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-slate-800 text-[11px] font-semibold text-slate-300 border border-slate-700">
                        {activeItem.type === 'video' ? 'Full Video Tour' : 'Master Photo'}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-tight">
                      {activeItem.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                      {activeItem.subtitle}
                    </p>

                    {/* Specification / Highlights List */}
                    <div className="space-y-2.5 mb-8">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Space Highlights:</p>
                      {activeItem.highlights?.map((spec, i) => (
                        <div key={i} className="flex items-start gap-2.5 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                          <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-xs font-medium text-slate-200">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3 pt-4 border-t border-slate-800">
                    <a
                      href="#book-visit"
                      className="w-full py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold rounded-2xl text-sm shadow-lg shadow-sky-500/20 transition-all flex items-center justify-center gap-2"
                    >
                      <Calendar size={16} />
                      Schedule Site Walkthrough
                    </a>

                    <button
                      onClick={() => openLightbox(activeItem, activeItemIndex)}
                      className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold rounded-2xl text-sm border border-slate-700 transition-all flex items-center justify-center gap-2"
                    >
                      <Maximize2 size={16} />
                      View Fullscreen Theater
                    </button>
                  </div>
                </div>

              </div>

              {/* Interactive Thumbnail Filmstrip Selector */}
              <div className="bg-slate-900/60 p-4 rounded-3xl border border-slate-800/80">
                <div className="flex items-center justify-between mb-3 px-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Layers size={14} className="text-sky-400" />
                    Select a Room or Space to Tour:
                  </span>
                  <span className="text-xs text-slate-500">
                    {activeItemIndex + 1} / {filteredGallery.length} Selected
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3">
                  {filteredGallery.map((item, idx) => {
                    const isCurrent = idx === activeItemIndex;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSelectTheaterItem(idx)}
                        className={`group relative rounded-2xl overflow-hidden aspect-[4/3] text-left transition-all duration-300 ${
                          isCurrent
                            ? 'ring-2 ring-sky-400 ring-offset-2 ring-offset-slate-950 scale-[1.03] shadow-lg shadow-sky-500/30'
                            : 'opacity-60 hover:opacity-100 hover:scale-[1.02] border border-slate-800'
                        }`}
                      >
                        <img
                          src={item.thumb}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                        {/* Play badge for video */}
                        {item.type === 'video' && (
                          <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-sky-500 text-white flex items-center justify-center shadow">
                            <Play size={10} className="fill-white translate-x-0.5" />
                          </div>
                        )}

                        <div className="absolute bottom-1.5 left-2 right-2">
                          <p className="text-[10px] font-bold text-white truncate leading-tight">
                            {item.spaceTag}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================
              MODE 2: INTERACTIVE GALLERY GRID VIEW
              ======================================================== */}
          {viewMode === 'grid' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredGallery.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  onClick={() => openLightbox(item, idx)}
                  className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer bg-slate-950 border border-slate-800 hover:border-sky-500/60 shadow-xl hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-500"
                >
                  <img
                    src={item.thumb}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                      {item.type === 'video' ? (
                        <>
                          <Play size={11} className="text-sky-400 fill-sky-400" /> Video Tour
                        </>
                      ) : (
                        <>
                          <Eye size={11} className="text-sky-300" /> HD Photo
                        </>
                      )}
                    </span>

                    <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-semibold text-slate-300">
                      {item.spaceTag}
                    </span>
                  </div>

                  {/* Play Button Icon for Video */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-sky-500/90 text-white flex items-center justify-center shadow-xl shadow-sky-500/40 group-hover:scale-115 group-hover:bg-sky-400 transition-all duration-300">
                        <Play size={26} className="fill-white translate-x-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Caption info at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h4 className="text-white font-bold text-base md:text-lg mb-1 group-hover:text-sky-300 transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-slate-300 text-xs line-clamp-2 font-light">
                      {item.subtitle}
                    </p>

                    {/* Quick Pill list */}
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/10">
                      {item.highlights?.slice(0, 2).map((h, i) => (
                        <span key={i} className="text-[10px] bg-white/10 text-slate-200 px-2 py-0.5 rounded-md">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Quick info note below showcase */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-slate-900/80 px-6 py-3 rounded-full border border-slate-800 text-xs md:text-sm text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>All 10 media tours showcase the actual finished units at GRA Ibara Housing Cluster 2, Abeokuta.</span>
              <a href="#book-visit" className="text-sky-400 font-bold hover:underline flex items-center gap-1">
                Book private inspection <ArrowRight size={13} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================
          OUR SERVICES SECTION
          ============================================ */}
      <section id="services" className="py-20 md:py-28 bg-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block py-2 px-4 mb-4 rounded-full bg-[#003399]/10 text-[#003399] font-bold text-xs uppercase tracking-wider">
              Supported Living & Wellness
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Our Services
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Tailored care and support services customized to every resident's unique lifestyle, wellness, and independence needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl border border-slate-200/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#003399]/10 text-[#003399] flex items-center justify-center mb-6">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center text-[#003399] font-bold text-xs uppercase tracking-wider gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span>Available on request</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          COMMUNITY CALLOUT: BE A PART OF CLIFTONVILLE
          ============================================ */}
      <section className="py-20 bg-gradient-to-br from-[#003399] via-blue-900 to-indigo-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="inline-block py-2 px-5 mb-6 rounded-full bg-white/10 backdrop-blur-md text-sky-200 font-bold text-xs uppercase tracking-widest border border-white/20">
              Community Membership
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Be a Part of Cliftonville Gardens
            </h2>
            <p className="text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              Join a growing community of proud homeowners who are investing in a better lifestyle, a safer tomorrow, and a greater future.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#book-visit"
                className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-slate-950 font-extrabold text-base shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                Book a Site Visit Today!
              </a>
              <a
                href="tel:+2348125935055"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-base transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Call Agent Directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          BOOK A SITE VISIT FORM & DIRECT CONTACT
          ============================================ */}
      <section id="book-visit" className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <span className="text-[#003399] font-bold uppercase tracking-widest text-xs mb-2 block">
                Schedule an In-Person Tour
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                See the Possibilities. <br />
                <span className="text-sky-600">Feel the Difference.</span>
              </h2>
              <p className="text-slate-600 text-base mb-8 leading-relaxed">
                Step inside our beautifully finished residences at GRA Ibara Housing Cluster 2, Abeokuta. Experience the serenity, quality craftsmanship, and dedicated care services firsthand.
              </p>

              <div className="space-y-6 bg-slate-50 p-8 rounded-3xl border border-slate-200/80 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#003399] text-white flex items-center justify-center shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Subdivision Address</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      GRA IBARA Housing Cluster 2,<br />
                      Abeokuta, Ogun State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#003399] text-white flex items-center justify-center shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Direct Phone Lines</h4>
                    <p className="text-slate-600 text-sm mt-1 space-y-1">
                      <a href="tel:+2348125935055" className="block hover:text-[#003399] font-medium">+234 812 593 5055 (Nigeria)</a>
                      <a href="tel:+447846324245" className="block hover:text-[#003399] font-medium">+44 7846 324245 (UK / Int'l)</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#003399] text-white flex items-center justify-center shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Official Email</h4>
                    <p className="text-slate-600 text-sm mt-1 break-all">
                      <a href="mailto:Laidegr.Cliftonville@outlook.com" className="block hover:text-[#003399] font-medium">Laidegr.Cliftonville@outlook.com</a>
                      <a href="mailto:info@cliftonvillegardens.com" className="block hover:text-[#003399]">info@cliftonvillegardens.com</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <a
                href="https://wa.me/2348125935055?text=Hello%20Cliftonville%20Team%2C%20I%20would%20like%20to%20inquire%20about%20the%20Abeokuta%20Residential%20Arena%20in%20GRA%20Ibara."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-colors shadow-lg shadow-emerald-600/20"
              >
                <MessageSquare size={20} />
                Chat with Us on WhatsApp
              </a>
            </motion.div>

            {/* Right Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Book Your Private Site Visit</h3>
              <p className="text-slate-500 text-sm mb-8">Fill out the form below to arrange a guided inspection of the estate.</p>

              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-900 mb-2">Site Visit Request Received!</h4>
                  <p className="text-emerald-700 text-sm mb-6">
                    Thank you! Our property advisory team will contact you shortly to confirm your scheduled appointment at GRA Ibara Housing Cluster 2.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-emerald-600 text-white rounded-full text-sm font-bold hover:bg-emerald-700 transition-colors"
                  >
                    Schedule Another Visit
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="e.g. Adebayo Johnson"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#003399] focus:ring-2 focus:ring-[#003399]/20 transition-all text-slate-800 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="e.g. +234 812 345 6789"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#003399] focus:ring-2 focus:ring-[#003399]/20 transition-all text-slate-800 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="e.g. johnson@example.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#003399] focus:ring-2 focus:ring-[#003399]/20 transition-all text-slate-800 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Primary Interest
                      </label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#003399] focus:ring-2 focus:ring-[#003399]/20 transition-all text-slate-800 text-sm bg-white"
                      >
                        <option value="Site Visit & Inspection">Site Visit & Inspection</option>
                        <option value="Home Purchase / Investment">Home Purchase / Investment</option>
                        <option value="Supported Living / Live-in Carer">Supported Living / Live-in Carer</option>
                        <option value="Care in Own Home">Care in Own Home</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#003399] focus:ring-2 focus:ring-[#003399]/20 transition-all text-slate-800 text-sm bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Preferred Time Slot
                      </label>
                      <select
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#003399] focus:ring-2 focus:ring-[#003399]/20 transition-all text-slate-800 text-sm bg-white"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                        <option value="Late Afternoon (4:00 PM - 6:00 PM)">Late Afternoon (4:00 PM - 6:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Additional Message / Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Let us know any specific questions or accommodations you require..."
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#003399] focus:ring-2 focus:ring-[#003399]/20 transition-all text-slate-800 text-sm"
                    />
                  </div>

                  {submitError && (
                    <p className="text-sm text-rose-600 font-medium">{submitError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#003399] to-blue-700 hover:from-blue-700 hover:to-[#003399] text-white font-bold rounded-2xl shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting Site Visit Request...' : 'Confirm Site Visit Booking'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          MEDIA LIGHTBOX / VIDEO PLAYER MODAL
          ============================================ */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Close"
              >
                <X size={22} />
              </button>

              {/* Prev / Next buttons */}
              <button
                onClick={prevMedia}
                className="absolute left-2 md:-left-14 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextMedia}
                className="absolute right-2 md:-right-14 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={24} />
              </button>

              {/* Media Content */}
              <div className="w-full flex items-center justify-center rounded-3xl overflow-hidden bg-black shadow-2xl">
                {selectedMediaType === 'photo' ? (
                  <img
                    src={selectedMedia}
                    alt={selectedMediaTitle}
                    className="max-h-[78vh] w-auto object-contain"
                  />
                ) : (
                  <video
                    src={selectedMedia}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[78vh] w-auto max-w-full rounded-2xl"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>

              {/* Caption */}
              <div className="mt-4 text-center max-w-2xl mx-auto">
                <h4 className="text-white font-bold text-lg">{selectedMediaTitle}</h4>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  {selectedMediaSubtitle}
                </p>
                <p className="text-sky-400 text-[11px] font-mono mt-1">
                  Item {currentIndex + 1} of {filteredGallery.length} • Abeokuta Residential Arena
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AbeokutaArena;
