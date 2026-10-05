'use client';

import React from 'react';
import Link from 'next/link';
import { GraduationCap, Phone, MapPin, Mail, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface FooterProps {
  onOpenAdmission: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmission }) => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#061126] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0b1f44] to-[#1e3a8a] border border-amber-400 flex items-center justify-center text-amber-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="font-black text-white text-base leading-tight">
                OXFORD ENGLISH MEDIUM SCHOOL
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              A benchmark of quality English medium education, moral discipline, and 100% board excellence in Bukkapatna - 572115, Sira Taluk, Tumakuru District.
            </p>

            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Main Road, Bukkapatna - 572115, Karnataka</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91 94482 15689 / +91 98450 78214</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>oxfordbukkapatna@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-slate-800">
              {t('Navigation Links', 'ಮುಖಪುಟ ಸಂಪರ್ಕಗಳು')}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="#home" className="hover:text-amber-400 transition">
                  {t('Home Page', 'ಮುಖಪುಟ')}
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-amber-400 transition">
                  {t('About Oxford School', 'ಶಾಲೆಯ ಪರಿಚಯ')}
                </Link>
              </li>
              <li>
                <Link href="#academics" className="hover:text-amber-400 transition">
                  {t('Academic Wings & Curriculum', 'ಪಠ್ಯಕ್ರಮ ವಿಭಾಗ')}
                </Link>
              </li>
              <li>
                <Link href="#facilities" className="hover:text-amber-400 transition">
                  {t('Infrastructure & Labs', 'ಸೌಲಭ್ಯಗಳು & ಲ್ಯಾಬ್')}
                </Link>
              </li>
              <li>
                <Link href="#admissions" className="hover:text-amber-400 transition">
                  {t('Online Admissions 2026-27', 'ದಾಖಲಾತಿ ಪ್ರಕ್ರಿಯೆ')}
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-amber-400 transition">
                  {t('Photo Gallery', 'ಶಾಲಾ ಗ್ಯಾಲರಿ')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Downloads & Portals */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-slate-800">
              {t('Downloads', 'ಡೌನ್‌ಲೋಡ್ಸ್')}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#admissions" className="hover:text-amber-400 transition">
                  School Prospectus (PDF)
                </a>
              </li>
              <li>
                <a href="#notice" className="hover:text-amber-400 transition">
                  Academic Calendar 26-27
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-amber-400 transition">
                  Prescribed Book List
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-amber-400 transition">
                  Uniform Guidelines
                </a>
              </li>
              <li>
                <a href="#fee-calculator" className="hover:text-amber-400 transition">
                  Fee Structure Tool
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Apply CTA */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-slate-800">
              {t('Admissions Open', 'ಪ್ರವೇಶಾತಿ 2026-27')}
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Enrollments for Academic Session 2026-2027 are active for Nursery to 10th Standard (SSLC).
            </p>
            <button
              onClick={onOpenAdmission}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-xs sm:text-sm py-3 rounded-xl shadow transition"
            >
              {t('Apply Online Now 🚀', 'ಆನ್‌ಲೈನ್ ಪ್ರವೇಶಾತಿ 🚀')}
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            © 2026 Oxford English Medium School, Bukkapatna - 572115. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Govt. of Karnataka Recognised</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-amber-400 transition"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
