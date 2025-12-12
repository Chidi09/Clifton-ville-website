import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path 
    ? "text-[#003399] font-bold" 
    : "text-gray-600 hover:text-[#003399]";

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800">
      
      {/* Top Bar (Contact Info - Very Professional Look) */}
      <div className="bg-[#003399] text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <p>A Supported Living Community for Adults (18+)</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14}/> +234 911 1111 102</span>
            <span className="flex items-center gap-2"><Mail size={14}/> Laidegr.cliftonville@outlook.com</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between h-20 items-center">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3 group">
              {/* PLACEHOLDER FOR LOGO IMAGE */}
              <div className="h-12 w-12 bg-[#003399] rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:bg-[#f59e0b] transition-colors">
                C
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-[#003399] leading-none">Cliftonville</span>
                <span className="text-[0.65rem] text-[#f59e0b] uppercase tracking-widest font-bold">Supported Living</span>
              </div>
            </Link>
            
            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link to="/" className={`${isActive('/')} transition-colors`}>Home</Link>
              <Link to="/about" className={`${isActive('/about')} transition-colors`}>About Us</Link>
              <Link to="/services" className={`${isActive('/services')} transition-colors`}>Services</Link>
              <Link to="/facilities" className={`${isActive('/facilities')} transition-colors`}>Facilities</Link>
              <Link to="/contact" className="bg-[#f59e0b] text-white px-6 py-2.5 rounded-full font-medium hover:bg-orange-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Contact Us
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
            <div className="flex flex-col p-4 space-y-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="py-2 text-gray-700 font-medium border-b border-gray-50">Home</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="py-2 text-gray-700 font-medium border-b border-gray-50">About Us</Link>
              <Link to="/services" onClick={() => setIsMenuOpen(false)} className="py-2 text-gray-700 font-medium border-b border-gray-50">Services</Link>
              <Link to="/facilities" onClick={() => setIsMenuOpen(false)} className="py-2 text-gray-700 font-medium border-b border-gray-50">Facilities</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="py-3 text-[#003399] font-bold">Contact Us</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
               {/* PLACEHOLDER FOR LOGO IMAGE */}
               <div className="h-10 w-10 bg-[#003399] rounded-full flex items-center justify-center text-white font-bold">C</div>
               <span className="font-bold text-2xl text-white">Cliftonville</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              A safe, nurturing environment where residents can thrive and lead fulfilling lives. Located in the heart of Ogun State.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-[#f59e0b] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#f59e0b] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#f59e0b] transition-colors">Services</Link></li>
              <li><Link to="/facilities" className="hover:text-[#f59e0b] transition-colors">Facilities</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#f59e0b] mt-1" size={18} />
                <span>Itori, Ewekoro LGA, Abeokuta,<br/>Ogun State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#f59e0b]" size={18} />
                <span>+447 846325256 | +234 8125935055</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#f59e0b]" size={18} />
                <span>Laidegr.cliftonville@outlook.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Cliftonville. All rights reserved.</p>
          <p>Designed by: Alexander Nelson Consulting</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
