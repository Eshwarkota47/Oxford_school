'use client';

import React from 'react';
import { Megaphone, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const AnnouncementTicker: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#0f2b5c] text-white py-2 border-b border-white/10 text-xs sm:text-sm overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-3">
        <div className="flex items-center gap-1.5 bg-amber-400 text-slate-900 font-extrabold px-3 py-1 rounded text-[11px] uppercase tracking-wider shrink-0 shadow">
          <Megaphone className="w-3.5 h-3.5" />
          <span>{t('Alerts', 'ಅಧಿಸೂಚನೆಗಳು')}</span>
        </div>

        <div className="overflow-hidden whitespace-nowrap flex-1">
          <div className="animate-ticker text-slate-200">
            <span className="mr-10 inline-flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              {t(
                'Admissions Open for Academic Year 2026-2027 (Pre-KG to 10th Standard / SSLC) — Collect forms from campus or apply online!',
                '2026-2027 ನೇ ಶೈಕ್ಷಣಿಕ ಸಾಲಿನ ಪ್ರವೇಶಾತಿ ಪ್ರಾರಂಭವಾಗಿದೆ (ನರ್ಸರಿಯಿಂದ 10ನೇ ತರಗತಿ / ಎಸ್.ಎಸ್.ಎಲ್.ಸಿ) — ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ!'
              )}
            </span>
            <span className="mr-10 inline-flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              {t(
                'Congratulations to our SSLC Batch for achieving 100% Board Results with 24 Distinctions!',
                'ಎಸ್.ಎಸ್.ಎಲ್.ಸಿ ಪರೀಕ್ಷೆಯಲ್ಲಿ 100% ಫಲಿತಾಂಶ ಮತ್ತು 24 ಡಿಸ್ಟಿಂಕ್ಷನ್ ಪಡೆದ ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಅಭಿನಂದನೆಗಳು!'
              )}
            </span>
            <span className="mr-10 inline-flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              {t(
                'GPS School Bus Network available for Bukkapatna, Tavarekere, Sira, Borasandra, Chelur & surrounding villages.',
                'ಬುಕ್ಕಾಪಟ್ಟಣ, ತಾವರೆಕೆರೆ, ಶಿರಾ, ಬೋರಸಂದ್ರ, ಚೇಳೂರು ಸುತ್ತಮುತ್ತಲಿನ ಹಳ್ಳಿಗಳಿಗೆ ಸುರಕ್ಷಿತ ಶಾಲಾ ಬಸ್ ಸೌಲಭ್ಯವಿದೆ.'
              )}
            </span>
            <span className="mr-10 inline-flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              {t(
                'Annual Science & Cultural Expo "Prathibha" scheduled this semester. Parents are cordially invited!',
                'ವಾರ್ಷಿಕ ವಿಜ್ಞಾನ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಮೇಳ "ಪ್ರತಿಭಾ ಕಾರಂಜಿ" ಶೀಘ್ರದಲ್ಲೇ ಆರಂಭ.'
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
