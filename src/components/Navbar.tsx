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
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-2 sm:py-2.5'
          : 'bg-white shadow-sm border-b border-slate-100 py-2.5 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 flex justify-between items-center">
        {/* Brand Logo & Title */}
        <Link href="#home" className="flex items-center gap-2.5 sm:gap-3.5 group max-w-[78%] sm:max-w-none">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#0b1f44] to-[#1e3a8a] border-2 border-amber-400 flex items-center justify-center text-amber-400 shadow-md group-hover:scale-105 transition-transform shrink-0">
            <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div className="min-w-0">
            <span className="text-xs sm:text-base lg:text-lg font-black tracking-tight text-[#0b1f44] leading-tight block truncate sm:whitespace-normal">
              {t('OXFORD ENGLISH MEDIUM SCHOOL', 'ಆಕ್ಸ್‌ಫರ್ಡ್ ಇಂಗ್ಲಿಷ್ ಮೀಡಿಯಂ ಶಾಲೆ')}
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap mt-0.5">
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-500">
                Govt. Recognised • Co-Ed
              </span>
              <span className="inline-flex items-center text-[9px] sm:text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 sm:px-2 py-0.2 rounded-full border border-emerald-200 shrink-0">
                📍 Bukkapatna
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

        {/* Action Button for Tablet & Desktop */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenAdmission}
            className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition active:scale-95 shrink-0"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>{t('Apply Online', 'ಆನ್‌ಲೈನ್ ಪ್ರವೇಶಾತಿ')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition shrink-0 ml-1 border border-slate-200"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-5 shadow-2xl animate-in slide-in-from-top-3 duration-200 max-h-[85vh] overflow-y-auto">
          {/* Quick Apply button at top of drawer */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAdmission();
            }}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black py-3 rounded-xl shadow mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span>{t('Apply Online (2026-27)', 'ಆನ್‌ಲೈನ್ ಪ್ರವೇಶಾತಿ (2026-27)')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Links list */}
          <nav className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-slate-800 hover:text-blue-700 py-2.5 px-3 rounded-lg hover:bg-slate-50 transition border-b border-slate-100 last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile contact & language row */}
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <a
              href="tel:+919448215689"
              className="flex items-center justify-center gap-2 bg-blue-50 text-blue-900 font-bold text-xs py-2.5 rounded-xl border border-blue-100"
            >
              <span>📞 {t('Call Helpdesk: +91 94482 15689', 'ಕರೆ ಮಾಡಿ: +91 94482 15689')}</span>
            </a>

            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 px-1">
              <span>{t('Language:', 'ಭಾಷೆ:')}</span>
              <div className="flex items-center bg-slate-100 rounded-full p-0.5 border border-slate-200">
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition ${
                    lang === 'en' ? 'bg-[#0b1f44] text-white shadow' : 'text-slate-600'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLang('kn')}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition ${
                    lang === 'kn' ? 'bg-[#0b1f44] text-white shadow' : 'text-slate-600'
                  }`}
                >
                  ಕನ್ನಡ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
