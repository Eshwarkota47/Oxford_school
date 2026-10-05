'use client';

import React from 'react';
import { MapPin, Phone, Clock, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface TopBarProps {
  onOpenParentPortal: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenParentPortal }) => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="bg-[#0b1f44] text-slate-200 text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
        {/* Contact info - responsive */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>
              {t(
                'Main Road, Bukkapatna - 572115, Sira Tq, Tumakuru Dist, Karnataka',
                'ಮುಖ್ಯ ರಸ್ತೆ, ಬುಕ್ಕಾಪಟ್ಟಣ - 572115, ಶಿರಾ ತಾಲ್ಲೂಕು, ತುಮಕೂರು ಜಿಲ್ಲೆ'
              )}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300 text-[11px] sm:text-xs">
            <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <a href="tel:+919448215689" className="hover:text-amber-400 transition font-bold sm:font-medium">
              +91 94482 15689
            </a>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <a href="tel:+919845078214" className="hover:text-amber-400 transition hidden sm:inline">
              +91 98450 78214
            </a>
          </div>
        </div>

        {/* Right tools - language & portal */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>8:45 AM - 4:15 PM</span>
          </div>

          <button
            onClick={onOpenParentPortal}
            className="text-[11px] sm:text-xs text-amber-300 hover:text-white font-bold underline underline-offset-2 transition flex items-center gap-1"
          >
            <span>{t('Portal 🔐', 'ಪೋರ್ಟಲ್ 🔐')}</span>
          </button>

          <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/15 shrink-0">
            <button
              onClick={() => setLang('en')}
              className={`px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-black transition ${
                lang === 'en' ? 'bg-amber-400 text-slate-900 shadow' : 'text-slate-300 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('kn')}
              className={`px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-black transition ${
                lang === 'kn' ? 'bg-amber-400 text-slate-900 shadow' : 'text-slate-300 hover:text-white'
              }`}
            >
              ಕನ್ನಡ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
