import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
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
  Building2,
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
  Clock,
  Heart,
  Star,
  Check,
  CheckCircle
} from 'lucide-react';

// Abeokuta Media Assets
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

// Video Tours
import livingRoomTour from '../assets/abeokuta/living-room-tour.mp4';
import kitchenTour from '../assets/abeokuta/kitchen-tour.mp4';
import bedroomTour from '../assets/abeokuta/bedroom-tour.mp4';
import bathroomTour from '../assets/abeokuta/bathroom-tour.mp4';
import interiorLoungeTour from '../assets/abeokuta/interior-lounge-tour.mp4';
import bedroomDetailTour from '../assets/abeokuta/bedroom-detail-tour.mp4';

// Service Photography Assets
import caregiverImage from '../assets/services images/Black professional caregiver assisting elderly resident at night modern home interior.jpg';
import homeCareImage from '../assets/services images/Black occupational therapist helping senior Black woman with daily living skills in home setting.jpg';
import consultationImage from '../assets/services images/Black elderly adult care consultation with nurse in modern supported living community.jpg';
import medicationImage from '../assets/services images/Black nurse administering medication to elderly Black resident in clinic setting.jpg';
import wellnessImage from '../assets/services images/Group of Black seniors playing indoor games in bright lounge assisted living.jpg';
import mealChefImage from '../assets/services images/Black chef presenting healthy meal to senior Black couple in modern restaurant lounge.jpg';

// Typewriter component for lively animated headline
const TypewriterText = ({ text, delay = 0, speed = 40, className = "" }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setShowCursor(false);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay, speed]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && <span className="animate-blink ml-1">|</span>}
    </span>
  );
};

// Particle component for floating cinematic background depth
const Particles = () => {
  const viewportH = typeof window !== 'undefined' ? window.innerHeight : 900;
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 10,
    size: 4 + Math.random() * 6,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/25"
          style={{
            left: `${particle.left}%`,
            bottom: '-20px',
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -viewportH - 100],
            opacity: [0, 0.8, 0.8, 0],
            scale: [0, 1, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

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
      src: exteriorDayFront,
      thumb: exteriorDayFront,
      title: 'Architectural Facade — Daytime Elegance',
      subtitle: 'Modern architectural proportions, private balconies, textured perimeter facade, and premium gatehouse security entrance.',
      spaceTag: 'Daytime Facade',
      icon: Building,
      highlights: ['Textured masonry cladding', 'Private terrace balustrade', 'Modern drainage & paving', 'Security perimeter'],
    },
    {
      id: 2,
      type: 'video',
      category: 'interior',
      src: livingRoomTour,
      thumb: thumbLivingRoom,
      title: 'Grand Living Room & Dining Suite',
      subtitle: 'Double-volume lounge featuring polished porcelain tile flooring, contemporary recessed ambient cove lighting, and open layout.',
      spaceTag: 'Main Lounge',
      icon: Tv,
      highlights: ['Recessed LED cove ceiling', 'Polished porcelain tile flooring', 'Air conditioning ducting points', 'Natural daylighting'],
    },
    {
      id: 3,
      type: 'photo',
      category: 'exterior',
      src: exteriorDayFull,
      thumb: exteriorDayFull,
      title: 'Full Compound & Residential Enclave',
      subtitle: 'Interlocked wide driveway, dedicated resident parking bays, landscaped garden perimeter, and tranquil compound setting.',
      spaceTag: 'Compound Grounds',
      icon: Compass,
      highlights: ['Interlocked compound paving', 'Multi-vehicle parking bays', 'External security lighting', 'Private gated perimeter'],
    },
    {
      id: 4,
      type: 'video',
      category: 'interior',
      src: kitchenTour,
      thumb: thumbKitchen,
      title: 'Chef-Grade Modern Fitted Kitchen',
      subtitle: 'Custom dual-tone cabinetry, solid quartz-style countertops, integrated gas burner prep, stainless steel extractor, and pantry storage.',
      spaceTag: 'Chef Kitchen',
      icon: Utensils,
      highlights: ['Dual-tone custom soft-close cabinets', 'Solid composite countertops', 'Stainless extractor hood prep', 'Dedicated pantry & laundry point'],
    },
    {
      id: 5,
      type: 'video',
      category: 'interior',
      src: bedroomTour,
      thumb: thumbBedroom,
      title: 'Master Bedroom Suite with Private Balcony',
      subtitle: 'Expansive private master suite with custom floor-to-ceiling wardrobes, direct terrace balcony access, and serene garden views.',
      spaceTag: 'Master Suite',
      icon: Bed,
      highlights: ['Floor-to-ceiling fitted wardrobes', 'Walkout private viewing terrace', 'Ensuite bathroom layout', 'Cross-ventilation windows'],
    },
    {
      id: 6,
      type: 'video',
      category: 'interior',
      src: bedroomDetailTour,
      thumb: thumbBedroomDetail,
      title: 'Secondary Bedroom & Family Lounge',
      subtitle: 'Spacious guest/secondary suite crafted for maximum privacy, climate control, and supported living comfort.',
      spaceTag: 'Guest Suite',
      icon: Home,
      highlights: ['Full ensuite luxury', 'Custom wardrobe joinery', 'Generous natural light', 'Whisper-quiet acoustic insulation'],
    },
    {
      id: 7,
      type: 'video',
      category: 'interior',
      src: bathroomTour,
      thumb: thumbBathroom,
      title: 'Spa-Inspired Ensuite Bathroom',
      subtitle: 'Frameless glass walk-in rainfall shower enclosure, floating vanity basin, designer chrome tapware, and anti-slip floor tiles.',
      spaceTag: 'Ensuite Bath',
      icon: Bath,
      highlights: ['Frameless glass shower cubicle', 'Rainfall shower system', 'Modern water heater installed', 'Anti-slip porcelain floors'],
    },
    {
      id: 8,
      type: 'video',
      category: 'interior',
      src: interiorLoungeTour,
      thumb: thumbLounge,
      title: 'Upstairs Private Family Lounge & Gallery',
      subtitle: 'Exclusive upper-level relaxation lounge connecting bedrooms, ideal for intimate family gatherings or private retreat.',
      spaceTag: 'Upper Gallery',
      icon: Sparkles,
      highlights: ['Upper floor privacy zone', 'Wrought-iron stair balustrade', 'Modern spotlight fixtures', 'High ceiling volume'],
    },
    {
      id: 9,
      type: 'photo',
      category: 'exterior',
      src: exteriorNightFront,
      thumb: exteriorNightFront,
      title: 'Illuminated Night Architectural View',
      subtitle: 'Night perspective highlighting perimeter architectural lighting, secure compound illumination, and warm modern facade.',
      spaceTag: 'Night Facade',
      icon: Building,
      highlights: ['Architectural up-and-down wall sconces', 'Full compound illumination', 'High-security night ambiance', 'Modern facade finish'],
    },
    {
      id: 10,
      type: 'photo',
      category: 'exterior',
      src: exteriorNightAerial,
      thumb: exteriorNightAerial,
      title: 'Aerial Night Elevation & Grounds',
      subtitle: 'High-angle perspective showcasing estate layout, clean interlocked paved access, and prestigious GRA Ibara surroundings.',
      spaceTag: 'Aerial View',
      icon: Compass,
      highlights: ['Overhead compound layout view', 'GRA Ibara Cluster 2 setting', 'Serene, low-density neighborhood', 'Private gate & guard post'],
    },
  ];

  // Filtering gallery based on tabs
  const filteredGallery = galleryItems.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'videos') return item.type === 'video';
    if (activeTab === 'photos') return item.type === 'photo';
    if (activeTab === 'interior') return item.category === 'interior';
    if (activeTab === 'exterior') return item.category === 'exterior';
    return true;
  });

  const activeItem = filteredGallery[activeItemIndex] || filteredGallery[0] || galleryItems[0];

  const handleSelectTheaterItem = (index) => {
    setActiveItemIndex(index);
    setIsPlaying(true);
    if (mainVideoRef.current) {
      mainVideoRef.current.currentTime = 0;
      mainVideoRef.current.play().catch(() => {});
    }
  };

  const handlePrevTheater = () => {
    const newIdx = (activeItemIndex - 1 + filteredGallery.length) % filteredGallery.length;
    handleSelectTheaterItem(newIdx);
  };

  const handleNextTheater = () => {
    const newIdx = (activeItemIndex + 1) % filteredGallery.length;
    handleSelectTheaterItem(newIdx);
  };

  const togglePlay = () => {
    if (mainVideoRef.current) {
      if (isPlaying) {
        mainVideoRef.current.pause();
        setIsPlaying(false);
      } else {
        mainVideoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (mainVideoRef.current) {
      mainVideoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Lightbox Handlers
  const openLightbox = (item, index) => {
    setSelectedMedia(item.src);
    setSelectedMediaType(item.type);
    setSelectedMediaTitle(item.title);
    setSelectedMediaSubtitle(item.subtitle);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  const navigateLightbox = useCallback((direction) => {
    if (filteredGallery.length === 0) return;
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % filteredGallery.length
      : (currentIndex - 1 + filteredGallery.length) % filteredGallery.length;

    const targetItem = filteredGallery[newIndex];
    setSelectedMedia(targetItem.src);
    setSelectedMediaType(targetItem.type);
    setSelectedMediaTitle(targetItem.title);
    setSelectedMediaSubtitle(targetItem.subtitle);
    setCurrentIndex(newIndex);
  }, [currentIndex, filteredGallery]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedMedia) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMedia, navigateLightbox]);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          source: 'Abeokuta Residential Arena Site Visit Form',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date: formData.date,
          timeSlot: formData.timeSlot,
          interest: formData.interest,
          message: formData.message,
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
        setSubmitError('Unable to send request. Please call us directly.');
      }
    } catch (err) {
      setSubmitError('Network error. Please call +234 812 593 5055.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: Shield,
      title: '24/7 Monitored Security',
      desc: 'A safe and worry-free environment with around-the-clock perimeter monitoring, guard post access control, and motion-sensing night illumination.',
      color: 'from-blue-600 to-sky-700',
    },
    {
      icon: Compass,
      title: 'Good Road Network',
      desc: 'Paved, interlocked smooth internal roads ensuring easy, seamless vehicular access throughout and surrounding the estate.',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: Zap,
      title: 'Reliable Utilities',
      desc: 'Consistent, uninterrupted power integration and dependable treated pressurized water supply throughout all residential units.',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: CreditCard,
      title: 'Flexible Payment Options',
      desc: 'Tailored payment structures, installment milestones, and flexible terms designed to make luxury supported homeownership stress-free.',
      color: 'from-indigo-500 to-blue-600',
    },
    {
      icon: FileCheck2,
      title: 'Hassle-Free Documentation',
      desc: 'Prompt legal processing, deed of assignment documentation, survey plans, and clear verified property records.',
      color: 'from-sky-500 to-cyan-600',
    },
    {
      icon: Award,
      title: 'Secure Verified Ownership',
      desc: '100% verified titles and protected investment capital in one of Abeokuta\'s fastest appreciating premier residential districts.',
      color: 'from-purple-500 to-indigo-600',
    },
  ];

  const services = [
    {
      icon: UserCheck,
      image: caregiverImage,
      title: 'Live-in Carer Support',
      desc: 'Compassionate, round-the-clock professional live-in carers providing personalized assistance, companionship, and daily care with utmost dignity.',
    },
    {
      icon: Home,
      image: homeCareImage,
      title: 'Care in Your Own Home',
      desc: 'Specialized supported living and domiciliary assistance brought directly into the comfort and privacy of your Abeokuta residence.',
    },
    {
      icon: Building,
      image: consultationImage,
      title: 'Care in Our Facility',
      desc: 'Full access to our modern, medically equipped supported living community, wellness center, and dedicated multidisciplinary care team.',
    },
    {
      icon: Pill,
      image: medicationImage,
      title: 'Medication Management',
      desc: 'Meticulous scheduling, secure storage, and timely administration of prescribed medications by certified clinical personnel.',
    },
    {
      icon: Smile,
      image: wellnessImage,
      title: 'Recreational & Wellness Activities',
      desc: 'Engaging social gatherings, gentle fitness programs, and recreational pursuits that promote mental, physical, and emotional vitality.',
    },
    {
      icon: Utensils,
      image: mealChefImage,
      title: 'Nutritious Meal Preparation',
      desc: 'Nutritious, chef-curated culinary meals prepared fresh daily to suit individual dietary requirements, preferences, and nutritional plans.',
    },
  ];

  const abeokutaJsonLd = {
    "@type": ["RealEstateListing", "SingleFamilyResidence", "Place"],
    "@id": "https://cliftonvillegardens.com/abeokuta-arena#residence",
    "name": "Abeokuta Residential Arena - Cliftonville Gardens",
    "description": "Newly completed luxury turnkey residence and supported living community at GRA IBARA Housing Cluster 2, Abeokuta, Ogun State.",
    "url": "https://cliftonvillegardens.com/abeokuta-arena",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "GRA IBARA Housing Cluster 2",
      "addressLocality": "Abeokuta",
      "addressRegion": "Ogun State",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 7.1475,
      "longitude": 3.3619
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "24/7 Security", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Paved Road Network", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Reliable Power & Water", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Supported Living Care", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Designer Fitted Kitchen", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Master Suite with Balcony", "value": true }
    ],
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://cliftonvillegardens.com/abeokuta-arena#book-visit",
        "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
      },
      "result": {
        "@type": "Reservation",
        "name": "Site Inspection Booking"
      }
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen font-sans text-slate-100 overflow-x-hidden">
      <SEO
        title="Abeokuta Residential Arena | GRA Ibara Turnkey Homes & Care"
        description="Explore the newly finished Abeokuta Residential Arena in GRA Ibara Housing Cluster 2. 24/7 security, turnkey luxury homes, virtual video walkthroughs, and supported care."
        keywords={['Abeokuta Residential Arena', 'GRA Ibara Abeokuta homes', 'supported living Abeokuta', 'turnkey homes Ogun State', 'Cliftonville Gardens subdivision']}
        canonical="/abeokuta-arena"
        badge="GRA Ibara Housing Cluster 2"
        jsonLd={abeokutaJsonLd}
      />

      {/* ============================================
          HERO SECTION - CINEMATIC FULLSCREEN
          ============================================ */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden">
        {/* Background Image with Ken Burns zoom effect */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            src={exteriorNightFront} 
            alt="Cliftonville Residential Arena Abeokuta" 
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          {/* Multi-layered cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-slate-950/75 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
        </div>

        {/* Floating Particles for Ambient Energy */}
        <Particles />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20 lg:py-28 text-center lg:text-left grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8">
            {/* Live Status Pill with Pulsing Green Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-lg"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-sky-200">
                A Subdivision of Cliftonville Gardens • GRA Ibara
              </span>
            </motion.div>

            {/* Dynamic Typewriter Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
            >
              Abeokuta <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-cyan-300">
                <TypewriterText text="Residential Arena" delay={600} speed={45} />
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-2.5 text-slate-300 text-sm md:text-lg mb-6 font-medium"
            >
              <MapPin size={20} className="text-sky-400 shrink-0" />
              <span>GRA IBARA Housing Cluster 2, Abeokuta, Ogun State</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto lg:mx-0 mb-8 font-light leading-relaxed"
            >
              <strong className="text-white font-semibold">Invest in Your Tomorrow. Own a Home in Cliftonville Gardens Today!</strong>{' '}
              Experience a blend of contemporary architectural elegance, 24/7 security, reliable utilities, and dedicated care services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#book-visit"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-full font-bold text-sm md:text-base shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 animate-glow-pulse"
              >
                <Calendar size={18} />
                Book a Site Visit Today
              </a>
              <a
                href="#virtual-tour"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-sm md:text-base transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Play size={18} />
                Explore 10-Space Tour
              </a>
            </motion.div>
          </div>

          {/* Quick Highlight Box on the Right */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 text-left shadow-2xl relative overflow-hidden group hover:border-sky-400/50 transition-colors"
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
              <p className="text-xs text-slate-300 mb-2">Direct Advisory Line:</p>
              <div className="flex flex-col gap-1 text-sm font-semibold text-white">
                <a href="tel:+2348125935055" className="hover:text-sky-300 transition-colors flex items-center justify-center gap-2">
                  <Phone size={14} className="text-sky-400" /> +234 812 593 5055
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ============================================
          FLOATING STATS BAR (MIRRORING HOME.JSX PATTERN)
          ============================================ */}
      <section className="py-12 md:py-16 bg-slate-950 relative z-20 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-6 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center shadow-2xl border border-slate-700/60"
          >
            {[
              { label: "Status", value: "Turnkey", icon: Building2, color: "text-sky-400" },
              { label: "Security & Power", value: "24/7", icon: Shield, color: "text-emerald-400" },
              { label: "Virtual Tours", value: "10 Spaces", icon: Play, color: "text-blue-400" },
              { label: "Location", value: "GRA Ibara", icon: MapPin, color: "text-amber-400" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                className="text-white"
              >
                <div className={`${stat.color} mb-2 flex justify-center`}>
                  <stat.icon size={30} className="md:w-9 md:h-9" />
                </div>
                <h3 className="text-xl md:text-3xl font-extrabold">{stat.value}</h3>
                <p className="text-slate-400 font-medium text-xs md:text-sm uppercase tracking-wide mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================
          ARCHITECTURAL MASTERPIECE / ABOUT PREVIEW (MIRRORING HOME.JSX 3D CARD)
          ============================================ */}
      <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Tilted 3D Backdrop Image Card */}
          <motion.div 
            initial={{ opacity: 0, x: -60, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div 
              className="absolute -inset-4 bg-sky-600/20 rounded-3xl"
              animate={{ rotate: [4, 2, 4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img 
              src={exteriorDayFront} 
              alt="Abeokuta Arena Architectural Facade" 
              className="relative rounded-3xl shadow-2xl w-full object-cover h-[380px] md:h-[500px] border border-slate-700/60"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute bottom-6 left-6 right-6 z-10 bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs text-sky-400 font-bold uppercase tracking-wider">Finished Enclave</p>
                <p className="text-white font-bold text-sm">GRA IBARA Housing Cluster 2</p>
              </div>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-full">
                Ready Now
              </span>
            </div>
          </motion.div>

          {/* Right Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.3 }}
              className="inline-block px-4 py-1.5 border border-sky-500/50 bg-sky-500/10 rounded-full text-sky-400 text-xs md:text-sm font-bold uppercase tracking-wider mb-4 md:mb-6"
            >
              Estate Enclave Overview
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Invest in Your Tomorrow. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-300">
                Own a Home in Cliftonville Today.
              </span>
            </h2>
            
            <p className="text-slate-300 text-base md:text-lg mb-6 leading-relaxed font-light">
              Nestled in the prestigious, peaceful GRA Ibara neighborhood of Abeokuta, the Residential Arena delivers a seamless harmony of modern architectural craftsmanship, uninterrupted utilities, and personalized supported living.
            </p>
            
            <motion.div 
              className="mb-8 pl-4 md:pl-6 border-l-4 border-sky-500 bg-slate-950/40 p-4 rounded-r-2xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-base md:text-lg italic font-light text-slate-200">
                "Join a growing community of proud homeowners who are investing in a better lifestyle, a safer tomorrow, and a greater future."
              </p>
              <p className="text-sky-400 font-bold text-sm mt-2">— Cliftonville Gardens Advisory</p>
            </motion.div>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {['24/7 Perimeter Security', 'Fitted Designer Kitchen', 'Private Master Balconies', 'Treated Water System', 'Verified Title Records'].map((pill, i) => (
                <span key={i} className="px-3.5 py-1.5 bg-slate-800/80 border border-slate-700 text-xs font-semibold text-slate-200 rounded-xl flex items-center gap-1.5">
                  <Check size={13} className="text-sky-400" />
                  {pill}
                </span>
              ))}
            </div>

            <a 
              href="#virtual-tour" 
              className="inline-flex items-center gap-2 text-white font-bold hover:text-sky-400 transition-colors group text-base"
            >
              Take the virtual property walkthrough 
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform text-sky-400" />
            </a>
          </motion.div>

        </div>
      </section>

      {/* ============================================
          WHY CHOOSE CLIFTONVILLE GARDENS? (VIBRANT FEATURES)
          ============================================ */}
      <section className="py-20 md:py-28 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block py-2 px-4 mb-4 rounded-full bg-sky-500/10 text-sky-400 font-bold text-xs uppercase tracking-wider border border-sky-500/20">
              Why Choose Cliftonville Gardens?
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Estate Value Pillars
            </h2>
            <p className="text-slate-400 text-base md:text-lg font-light">
              We deliver the best care, robust infrastructure, and peaceful living in a secure, master-planned community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/50 shadow-xl hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <feature.icon size={30} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base font-light">
                    {feature.desc}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-800 flex items-center text-xs font-bold text-sky-400 uppercase tracking-wider gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Guaranteed Standard</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action banner */}
          <div className="mt-16 p-8 md:p-10 rounded-3xl bg-gradient-to-r from-blue-900 via-[#003399] to-indigo-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-sky-500/20">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-2 text-white">We Deliver the Best Care & Support Services</h3>
              <p className="text-blue-100 text-sm md:text-base max-w-2xl font-light">
                Whether you desire an independent luxury home, assisted living support, or complete 24/7 care, our dedicated healthcare professionals are on hand.
              </p>
            </div>
            <a
              href="#services"
              className="px-8 py-4 bg-white text-[#003399] hover:bg-sky-50 rounded-full font-bold text-sm whitespace-nowrap transition-all shadow-xl hover:scale-105 shrink-0"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================================
          EXCLUSIVE PROPERTY SHOWCASE & CINEMATIC VIRTUAL TOUR (10 SPACES)
          ========================================================== */}
      <section id="virtual-tour" className="py-20 md:py-32 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
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

          {/* MODE 1: CINEMATIC THEATER VIEW */}
          {viewMode === 'theater' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Left: Video & Photo Main Player */}
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

                      {/* Custom Overlay Controls */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 pointer-events-none">
                        
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

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                      <div className="absolute top-6 left-6 z-10">
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-bold text-sky-300">
                          <Eye size={14} /> High-Res Daytime / Night Photo
                        </span>
                      </div>

                      <div className="absolute top-6 right-6 z-10">
                        <button
                          onClick={() => openLightbox(activeItem, activeItemIndex)}
                          className="p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110"
                          title="Open in High-Res Lightbox"
                        >
                          <Maximize2 size={18} />
                        </button>
                      </div>

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

                  <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
                    <span className="px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md text-[11px] font-mono text-slate-300 border border-white/10">
                      Space {activeItemIndex + 1} of {filteredGallery.length}
                    </span>
                  </div>
                </div>

                {/* Right: Space Specifications & Booking Card */}
                <div className="lg:col-span-4 bg-slate-900/95 border border-slate-800 rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between shadow-2xl backdrop-blur-md">
                  <div>
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

          {/* MODE 2: INTERACTIVE GALLERY GRID VIEW */}
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

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

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

                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-sky-500/90 text-white flex items-center justify-center shadow-xl shadow-sky-500/40 group-hover:scale-115 group-hover:bg-sky-400 transition-all duration-300">
                        <Play size={26} className="fill-white translate-x-0.5" />
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h4 className="text-white font-bold text-base md:text-lg mb-1 group-hover:text-sky-300 transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-slate-300 text-xs line-clamp-2 font-light">
                      {item.subtitle}
                    </p>

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
          OUR SERVICES SECTION (WITH PHOTOGRAPHIC CARDS)
          ============================================ */}
      <section id="services" className="py-20 md:py-28 bg-slate-900 text-white relative border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block py-2 px-4 mb-4 rounded-full bg-sky-500/10 text-sky-400 font-bold text-xs uppercase tracking-wider border border-sky-500/20">
              Supported Living & Wellness
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Our Services
            </h2>
            <p className="text-slate-400 text-base md:text-lg font-light">
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
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-slate-950 rounded-3xl overflow-hidden shadow-xl border border-slate-800 hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-2xl bg-sky-500/90 text-white flex items-center justify-center shadow-lg">
                    <service.icon size={22} />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                      {service.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-800 flex items-center text-sky-400 font-bold text-xs uppercase tracking-wider gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400" />
                    <span>Available on request</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          COMMUNITY CALLOUT: BE A PART OF CLIFTONVILLE
          ============================================ */}
      <section className="py-24 bg-gradient-to-br from-[#003399] via-blue-900 to-indigo-950 text-white relative overflow-hidden border-t border-blue-800/40">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500 rounded-full blur-3xl" />
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
      <section id="book-visit" className="py-20 md:py-28 bg-slate-950 relative border-t border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <span className="text-sky-400 font-bold uppercase tracking-widest text-xs mb-2 block">
                Schedule an In-Person Tour
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                See the Possibilities. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-300">
                  Feel the Difference.
                </span>
              </h2>
              <p className="text-slate-400 text-base mb-8 leading-relaxed font-light">
                Step inside our beautifully finished residences at GRA Ibara Housing Cluster 2, Abeokuta. Experience the serenity, quality craftsmanship, and dedicated care services firsthand.
              </p>

              <div className="space-y-6 bg-slate-900/90 p-8 rounded-3xl border border-slate-800 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Subdivision Address</h4>
                    <p className="text-slate-400 text-sm mt-1">
                      GRA IBARA Housing Cluster 2,<br />
                      Abeokuta, Ogun State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Direct Phone Lines</h4>
                    <p className="text-slate-400 text-sm mt-1 space-y-1">
                      <a href="tel:+2348125935055" className="block hover:text-sky-300 font-medium">+234 812 593 5055 (Nigeria)</a>
                      <a href="tel:+447846324245" className="block hover:text-sky-300 font-medium">+44 7846 324245 (UK / Int'l)</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Official Email</h4>
                    <p className="text-slate-400 text-sm mt-1 break-all">
                      <a href="mailto:Laidegr.Cliftonville@outlook.com" className="block hover:text-sky-300 font-medium">Laidegr.Cliftonville@outlook.com</a>
                      <a href="mailto:info@cliftonvillegardens.com" className="block hover:text-sky-300">info@cliftonvillegardens.com</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <a
                href="https://wa.me/2348125935055?text=Hello%20Cliftonville%20Team%2C%20I%20would%20like%20to%20inquire%20about%20the%20Abeokuta%20Residential%20Arena%20in%20GRA%20Ibara."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-emerald-600/20 hover:scale-105"
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
              className="lg:col-span-7 bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-800"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Book Your Private Site Visit</h3>
              <p className="text-slate-400 text-sm mb-8">Fill out the form below to arrange a guided inspection of the estate.</p>

              {isSubmitted ? (
                <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Site Visit Request Received!</h4>
                  <p className="text-emerald-200 text-sm mb-6">
                    Thank you! Our property advisory team will contact you shortly to confirm your scheduled appointment at GRA Ibara Housing Cluster 2.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-emerald-600 text-white rounded-full text-sm font-bold hover:bg-emerald-500 transition-colors"
                  >
                    Schedule Another Visit
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="e.g. Adebayo Johnson"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all text-white text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="e.g. +234 812 345 6789"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all text-white text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="e.g. johnson@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all text-white text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Primary Interest
                      </label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all text-white text-sm"
                      >
                        <option value="Site Visit & Inspection">Site Visit & Inspection</option>
                        <option value="Home Purchase / Investment">Home Purchase / Investment</option>
                        <option value="Supported Living / Live-in Carer">Supported Living / Live-in Carer</option>
                        <option value="Care in Own Home">Care in Own Home</option>
                        <option value="Full Facility Placement">Full Facility Placement</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Preferred Inspection Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all text-white text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Preferred Time Window
                      </label>
                      <select
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all text-white text-sm"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                        <option value="Late Afternoon (4:00 PM - 6:00 PM)">Late Afternoon (4:00 PM - 6:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Additional Requests or Questions (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Let us know if you need specific accommodation details, wheelchair accessibility, or special inquiries..."
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all text-white text-sm resize-none"
                    />
                  </div>

                  {submitError && (
                    <div className="p-4 bg-red-950/80 border border-red-500/40 rounded-xl text-red-300 text-xs font-medium">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white rounded-xl font-extrabold text-base shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Submitting Visit Request...
                      </span>
                    ) : (
                      <>
                        <Calendar size={18} />
                        Confirm Site Inspection Request
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    Guaranteed confidential handling • No commitment required
                  </p>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================
          FULLSCREEN LIGHTBOX MODAL
          ============================================ */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Modal Container */}
            <div
              className="relative w-full max-w-6xl max-h-[90vh] bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-800 bg-slate-900/80">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider border border-sky-400/30">
                    Space {currentIndex + 1} of {filteredGallery.length}
                  </span>
                  <div>
                    <h3 className="font-bold text-white text-base md:text-lg leading-snug">{selectedMediaTitle}</h3>
                    <p className="text-slate-400 text-xs truncate max-w-md hidden sm:block">{selectedMediaSubtitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={closeLightbox}
                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Media Body */}
              <div className="relative flex-1 bg-black flex items-center justify-center min-h-[350px] md:min-h-[500px]">
                {selectedMediaType === 'video' ? (
                  <video
                    key={selectedMedia}
                    src={selectedMedia}
                    controls
                    autoPlay
                    playsInline
                    className="max-w-full max-h-[70vh] object-contain"
                  />
                ) : (
                  <img
                    src={selectedMedia}
                    alt={selectedMediaTitle}
                    className="max-w-full max-h-[70vh] object-contain"
                  />
                )}

                {/* Left/Right Navigation Buttons */}
                <button
                  onClick={() => navigateLightbox('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-sky-600 text-white backdrop-blur-md transition-colors border border-white/10"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => navigateLightbox('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-sky-600 text-white backdrop-blur-md transition-colors border border-white/10"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Footer Bar */}
              <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-400 text-center sm:text-left">
                  GRA IBARA Housing Cluster 2, Abeokuta • Use arrow keys ← → to navigate
                </p>
                <a
                  href="#book-visit"
                  onClick={closeLightbox}
                  className="px-6 py-2.5 bg-sky-500 hover:bg-sky-400 text-white rounded-full text-xs font-bold transition-all shadow-md flex items-center gap-2"
                >
                  <Calendar size={14} />
                  Schedule Private Viewing
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default AbeokutaArena;
