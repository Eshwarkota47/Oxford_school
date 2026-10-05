'use client';

import React from 'react';
import {
  MonitorPlay,
  FlaskConical,
  Laptop,
  Library,
  Bus,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const FacilitiesSection: React.FC = () => {
  const { t } = useLanguage();

  const facilities = [
    {
      icon: MonitorPlay,
      title: t('Digital Smart Classrooms', 'ಡಿಜಿಟಲ್ ಸ್ಮಾರ್ಟ್ ತರಗತಿಗಳು'),
      desc: t(
        'Every classroom is equipped with high-definition digital smart boards, enabling audiovisual explanations for complex science and math theories.',
        'ಪ್ರತಿ ಕೊಠಡಿಯಲ್ಲೂ ಸ್ಮಾರ್ಟ್ ಬೋರ್ಡ್ ಮೂಲಕ ದೃಶ್ಯ-ಶ್ರಾವ್ಯ ಮಾದರಿಯಲ್ಲಿ ಸುಲಭವಾಗಿ ಅರ್ಥವಾಗುವಂತೆ ಪಾಠ ಬೋಧನೆ.'
      ),
    },
    {
      icon: FlaskConical,
      title: t('Composite Science Laboratory', 'ಸುಸಜ್ಜಿತ ವಿಜ್ಞಾನ ಪ್ರಯೋಗಾಲಯ'),
      desc: t(
        'Advanced lab apparatus, compound microscopes, safe chemical reagents, and botanical models allowing students to experiment practically.',
        'ಭೌತ, ರಸಾಯನ ಮತ್ತು ಜೀವಶಾಸ್ತ್ರ ಪ್ರಯೋಗಗಳಿಗೆ ಸೂಕ್ತವಾದ ಲ್ಯಾಬ್ ಉಪಕರಣಗಳು ಮತ್ತು ಸೂಕ್ಷ್ಮದರ್ಶಕಗಳು.'
      ),
    },
    {
      icon: Laptop,
      title: t('Computer & AI Literacy Lab', 'ಗಣಕಯಂತ್ರ ಮತ್ತು ಕೋಡಿಂಗ್ ಲ್ಯಾಬ್'),
      desc: t(
        'Modern networked computers teaching fundamental computer operations, typing skills, MS Office, basic coding, and responsible internet awareness.',
        'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಪ್ರತ್ಯೇಕ ಕಂಪ್ಯೂಟರ್, ಬೇಸಿಕ್ ಕೋಡಿಂಗ್ ಮತ್ತು ಇಂಟರ್ನೆಟ್ ಶಿಕ್ಷಣ.'
      ),
    },
    {
      icon: Library,
      title: t('Rich Library & Reading Hub', 'ಗ್ರಂಥಾಲಯ ಮತ್ತು ವಾಚನಾಲಯ'),
      desc: t(
        'Over 4,500+ reference books, children encyclopedias, Kannada literature classics, storybooks, periodicals, and newspapers.',
        '4,500 ಕ್ಕೂ ಹೆಚ್ಚು ಪುಸ್ತಕಗಳು, ಕಥೆ ಪುಸ್ತಕಗಳು, ದಿನಪತ್ರಿಕೆಗಳು ಹಾಗೂ ಸಾಮಾನ್ಯ ಜ್ಞಾನದ ಗ್ರಂಥಾಲಯ.'
      ),
    },
    {
      icon: Bus,
      title: t('GPS-Tracked Safe School Buses', 'ಜಿ.ಪಿ.ಎಸ್ ಹೊಂದಿರುವ ಶಾಲಾ ಬಸ್‌ಗಳು'),
      desc: t(
        'Safe and punctual transport network covering Bukkapatna, Tavarekere, Sira, Chelur, Borasandra, and surrounding villages with lady attendants.',
        'ಬುಕ್ಕಾಪಟ್ಟಣ ಹಾಗೂ ಸುತ್ತಮುತ್ತಲಿನ ಹಳ್ಳಿಗಳಿಗೆ ಸುರಕ್ಷಿತ ಶಾಲಾ ವಾಹನ ಸೌಲಭ್ಯ ಮತ್ತು ಸುರಕ್ಷತಾ ಸಿಬ್ಬಂದಿ.'
      ),
    },
    {
      icon: ShieldCheck,
      title: t('CCTV Surveillance & RO Water', 'ಸಿಸಿಟಿವಿ ಭದ್ರತೆ ಮತ್ತು ಶುದ್ಧ ಕುಡಿಯುವ ನೀರು'),
      desc: t(
        '24/7 CCTV surveillance across all corridors and play areas, high-capacity RO mineral water plant, hygienic sanitization, and first-aid support.',
        'ಶಾಲೆಯಾದ್ಯಂತ ಸಿಸಿಟಿವಿ ಕ್ಯಾಮೆರಾಗಳು, ಶುದ್ಧ ಕುಡಿಯುವ ನೀರಿನ ಆರ್‌ಒ ಘಟಕ ಹಾಗೂ ಪ್ರಥಮ ಚಿಕಿತ್ಸಾ ವ್ಯವಸ್ಥೆ.'
      ),
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-[#0b1f44] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-black text-amber-400 tracking-wider uppercase bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30 mb-3">
            {t('CAMPUS INFRASTRUCTURE', 'ಶಾಲಾ ಸೌಲಭ್ಯಗಳು')}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            {t('World-Class Learning Facilities in Bukkapatna', 'ಬುಕ್ಕಾಪಟ್ಟಣದಲ್ಲೇ ಅತ್ಯಾಧುನಿಕ ಶಾಲಾ ಸೌಲಭ್ಯಗಳು')}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {t(
              'A clean, green, and technologically advanced campus environment providing everything your child needs to thrive mentally and physically.',
              'ಮಕ್ಕಳ ಸಮಗ್ರ ಬೆಳವಣಿಗೆಗೆ ಪೂರಕವಾದ ಪ್ರಶಾಂತ ಮತ್ತು ಸುಸಜ್ಜಿತ ಪರಿಸರ.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/50 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-sm group"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-400/15 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-black text-white mb-3">{fac.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {fac.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
