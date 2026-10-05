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
    <div className="bg-[#0b1f44] text-slate-200 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>
              {t(
                'Main Road, Bukkapatna - 572115, Sira Tq, Tumakuru Dist, Karnataka',
                'ಮುಖ್ಯ ರಸ್ತೆ, ಬುಕ್ಕಾಪಟ್ಟಣ - 572115, ಶಿರಾ ತಾಲ್ಲೂಕು, ತುಮಕೂರು ಜಿಲ್ಲೆ'
              )}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <a href="tel:+919448215689" className="hover:text-amber-400 transition">
              +91 94482 15689
            </a>
            <span className="text-slate-500">|</span>
            <a href="tel:+919845078214" className="hover:text-amber-400 transition">
              +91 98450 78214
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Mon - Sat: 8:45 AM - 4:15 PM</span>
          </div>

          <button
            onClick={onOpenParentPortal}
            className="text-amber-300 hover:text-white font-semibold underline underline-offset-2 transition"
          >
            {t('Parent / Student Portal 🔐', 'ಪೋಷಕರ ಲಾಗಿನ್ 🔐')}
          </button>

          <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/15">
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold transition ${
                lang === 'en' ? 'bg-amber-400 text-slate-900 shadow' : 'text-slate-300 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('kn')}
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold transition ${
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
