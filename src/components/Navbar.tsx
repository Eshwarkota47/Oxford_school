'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface NavbarProps {
  onOpenAdmission: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmission }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('Home', 'ಮುಖಪುಟ') },
    { href: '#about', label: t('About Us', 'ಶಾಲೆಯ ಬಗ್ಗೆ') },
    { href: '#academics', label: t('Academics', 'ಶಿಕ್ಷಣ ವಿಭಾಗ') },
    { href: '#facilities', label: t('Facilities', 'ಸೌಲಭ್ಯಗಳು') },
    { href: '#admissions', label: t('Admissions', 'ದಾಖಲಾತಿ') },
    { href: '#gallery', label: t('Gallery', 'ಗ್ಯಾಲರಿ') },
    { href: '#achievements', label: t('Achievements', 'ಸಾಧನೆಗಳು') },
    { href: '#contact', label: t('Contact', 'ಸಂಪರ್ಕಿಸಿ') },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200 py-2.5'
          : 'bg-white shadow-sm border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Brand Logo & Title */}
        <Link href="#home" className="flex items-center gap-3.5 group">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0b1f44] to-[#1e3a8a] border-2 border-amber-400 flex items-center justify-center text-amber-400 shadow-md group-hover:scale-105 transition-transform shrink-0">
            <GraduationCap className="w-7 h-7" />
          </div>
          <div>
            <span className="text-base sm:text-lg font-black tracking-tight text-[#0b1f44] leading-tight block">
              {t('OXFORD ENGLISH MEDIUM SCHOOL', 'ಆಕ್ಸ್‌ಫರ್ಡ್ ಇಂಗ್ಲಿಷ್ ಮೀಡಿಯಂ ಶಾಲೆ')}
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-semibold text-slate-500">
                Govt. Recognised • Co-Ed
              </span>
              <span className="inline-flex items-center text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                📍 Bukkapatna - 572115
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-slate-700 hover:text-blue-700 transition relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-700 hover:after:w-full after:transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenAdmission}
            className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>{t('Apply Online 2026-27', 'ಆನ್‌ಲೈನ್ ಪ್ರವೇಶಾತಿ')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3 mb-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-slate-800 hover:text-blue-700 py-2 border-b border-slate-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAdmission();
            }}
            className="w-full flex items-center justify-center gap-2 bg-amber-500 text-slate-950 font-extrabold py-3 rounded-xl shadow"
          >
            <Sparkles className="w-4 h-4" />
            <span>{t('Apply Online (2026-27)', 'ಆನ್‌ಲೈನ್ ಪ್ರವೇಶಾತಿ')}</span>
          </button>
        </div>
      )}
    </header>
  );
};
