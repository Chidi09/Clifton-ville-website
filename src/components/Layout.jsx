import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../assets/logo.jpg';
import navLogo from '../assets/logo-trimmed.png';

// Social media icons
const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const XIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TikTokIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Work in Progress', path: '/progress' },
  ];

  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/cliftonville__', icon: InstagramIcon },
    { name: 'X', url: 'https://x.com/Cliftonville__', icon: XIcon },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/cliftonville-home/', icon: LinkedInIcon },
    { name: 'TikTok', url: 'https://www.tiktok.com/@cliftonville_home', icon: TikTokIcon },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800 bg-stone-50 selection:bg-sky-600 selection:text-white">
      {/* Top Bar - Sleek & Dark */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2.5 hidden lg:block tracking-wide">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="opacity-80">A Supported Living Community for Adults (18+)</span>
          <div className="flex gap-8">
            <a href="tel:+447846324245" className="flex items-center gap-2 hover:text-white transition-colors"><Phone size={13}/> +447846324245</a>
            <a href="mailto:info@cliftonvillegardens.com" className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={13}/> info@cliftonvillegardens.com</a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Glassmorphism */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-0 border-stone-200' : 'bg-white py-0 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative z-10 h-32 md:h-40 lg:h-48 -my-8 md:-my-12 lg:-my-14 w-auto flex items-center transition-all duration-300">
              <img 
                src={navLogo} 
                alt="Cliftonville Gardens" 
                className="h-full w-auto object-contain object-left group-hover:scale-[1.02] transition-transform duration-300 drop-shadow-sm"
              />
            </div>
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`text-sm transition-colors duration-300 relative py-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sky-600 after:transition-all hover:after:w-full ${location.pathname === link.path ? "text-sky-600 after:w-full" : "text-slate-600 hover:text-sky-600"}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-sky-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(2,132,199,0.3)] hover:bg-sky-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden text-slate-800 p-2">
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-white lg:hidden flex flex-col"
          >
            <div className="p-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img src={navLogo} alt="Cliftonville" className="h-28 w-auto object-contain" />
                <span className="font-bold text-xl text-slate-800">Cliftonville</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-600">
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-8 p-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold text-slate-800 hover:text-sky-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="bg-sky-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg mt-4"
              >
                Contact Us
              </Link>
            </div>
            {/* Mobile Social Links */}
            <div className="p-6 flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-sky-600 hover:text-white transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer - Updated Info & Brand Blue Design */}
      <footer className="bg-[#003399] text-white py-20 border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
               <div className="relative">
                 <div className="absolute inset-0 bg-white rounded-xl blur-sm opacity-30"></div>
                 <img src={logoImage} alt="Cliftonville Gardens" className="relative h-20 w-20 rounded-xl object-cover drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]" />
               </div>
               <span className="font-bold text-2xl tracking-tight text-white">Cliftonville Gardens</span>
            </div>
            <p className="leading-relaxed mb-8 max-w-sm">
              A safe, nurturing environment where residents can thrive and lead fulfilling lives. Located in the heart of Ogun State.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors cursor-pointer"
                >
                  <social.icon size={18}/>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white hover:text-sky-300 transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Visit Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-sky-400 shrink-0" size={18} />
                <span className="text-white">Itori, Ewekoro LGA, Abeokuta,<br/>Ogun State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-sky-400 shrink-0" size={18} />
                <span className="text-white">+447846324245<br/>+234 8125935055</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-sky-400 shrink-0" size={18} />
                <span className="break-all text-white">info@cliftonvillegardens.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-blue-800 text-center text-sm text-white/90">
          <p>© {new Date().getFullYear()} Cliftonville Gardens. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
