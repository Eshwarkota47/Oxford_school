'use client';

import React from 'react';
import { Megaphone, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const AnnouncementTicker: React.FC = () => {
  const { t } = useLanguage();

  const tickerItems = (
    <>
      <span className="mr-8 inline-flex items-center gap-1.5 shrink-0">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        {t(
          'Admissions Open for Academic Year 2026-2027 (Pre-KG to 10th Standard / SSLC) — Enroll Online!',
          '2026-2027 ನೇ ಸಾಲಿನ ಪ್ರವೇಶಾತಿ ಪ್ರಾರಂಭವಾಗಿದೆ (ನರ್ಸರಿಯಿಂದ 10ನೇ ತರಗತಿ / ಎಸ್.ಎಸ್.ಎಲ್.ಸಿ) — ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ!'
        )}
      </span>
      <span className="mr-8 inline-flex items-center gap-1.5 shrink-0">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        {t(
          'Congratulations to our SSLC Batch for 100% Board Results & 24 Distinctions!',
          'ಎಸ್.ಎಸ್.ಎಲ್.ಸಿ ಪರೀಕ್ಷೆಯಲ್ಲಿ 100% ಫಲಿತಾಂಶ ಮತ್ತು 24 ಡಿಸ್ಟಿಂಕ್ಷನ್ ಪಡೆದ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಅಭಿನಂದನೆಗಳು!'
        )}
      </span>
      <span className="mr-8 inline-flex items-center gap-1.5 shrink-0">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        {t(
          'GPS Bus Fleet covering Bukkapatna, Tavarekere, Sira, Borasandra & 20+ villages.',
          'ಬುಕ್ಕಾಪಟ್ಟಣ, ತಾವರೆಕೆರೆ, ಶಿರಾ, ಬೋರಸಂದ್ರ ಸುತ್ತಮುತ್ತಲಿನ ಹಳ್ಳಿಗಳಿಗೆ ಸುರಕ್ಷಿತ ಶಾಲಾ ಬಸ್ ಸೌಲಭ್ಯ.'
        )}
      </span>
      <span className="mr-8 inline-flex items-center gap-1.5 shrink-0">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        {t(
          'Annual Science & Cultural "Prathibha" Expo scheduled this semester!',
          'ವಾರ್ಷಿಕ ವಿಜ್ಞಾನ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಮೇಳ "ಪ್ರತಿಭಾ ಕಾರಂಜಿ" ಶೀಘ್ರದಲ್ಲೇ ಆರಂಭ!'
        )}
      </span>
    </>
  );

  return (
    <div className="bg-[#0f2b5c] text-white py-1.5 sm:py-2 border-b border-white/10 text-xs sm:text-sm overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 flex items-center gap-2.5 sm:gap-3">
        <div className="flex items-center gap-1 bg-amber-400 text-slate-900 font-black px-2 sm:px-3 py-0.5 sm:py-1 rounded text-[10px] sm:text-[11px] uppercase tracking-wider shrink-0 shadow">
          <Megaphone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          <span>{t('Alerts', 'ಅಧಿಸೂಚನೆ')}</span>
        </div>

        <div className="overflow-hidden whitespace-nowrap flex-1 flex">
          <div className="animate-ticker text-slate-200 flex">
            {tickerItems}
            {tickerItems}
          </div>
        </div>
      </div>
    </div>
  );
};
