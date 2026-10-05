'use client';

import React from 'react';
import { Award, Trophy, Medal } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const AchievementsSection: React.FC = () => {
  const { t } = useLanguage();

  const achievements = [
    {
      icon: Award,
      title: t('100% SSLC Board Result', '100% ಎಸ್.ಎಸ್.ಎಲ್.ಸಿ ಫಲಿತಾಂಶ'),
      sub: t('Consecutive Academic Years', 'ನಿರಂತರ ವರ್ಷಗಳ ಸಾಧನೆ'),
      desc: t(
        'Over 24 students secured Exemplary Distinctions (>90%) and 48+ First Classes in the Karnataka State Secondary Board Examination.',
        '24 ಕ್ಕೂ ಹೆಚ್ಚು ವಿದ್ಯಾರ್ಥಿಗಳು 90% ಕ್ಕಿಂತ ಅಧಿಕ ಅಂಕಗಳೊಂದಿಗೆ ಡಿಸ್ಟಿಂಕ್ಷನ್ ಹಾಗೂ 48+ ಪ್ರಥಮ ದರ್ಜೆ ಪಡೆದಿದ್ದಾರೆ.'
      ),
      color: 'bg-amber-100 text-amber-800',
    },
    {
      icon: Medal,
      title: t('State Karate Champions', 'ರಾಜ್ಯ ಮಟ್ಟದ ಕರಾಟೆ ಚಾಂಪಿಯನ್ಸ್'),
      sub: t('Karnataka Martial Arts Meet', 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸಮರಕಲೆ ಕ್ರೀಡಾಕೂಟ'),
      desc: t(
        'Oxford school students bagged 8 Gold Medals and 5 Silver Medals in the State-Level Inter-School Karate Championship.',
        'ರಾಜ್ಯ ಮಟ್ಟದ ಶಾಲಾ ಕರಾಟೆ ಸ್ಪರ್ಧೆಯಲ್ಲಿ ನಮ್ಮ ಶಾಲೆಯ ಮಕ್ಕಳು 8 ಚಿನ್ನ ಮತ್ತು 5 ಬೆಳ್ಳಿ ಪದಕಗಳನ್ನು ಗೆದ್ದಿದ್ದಾರೆ.'
      ),
      color: 'bg-blue-100 text-blue-800',
    },
    {
      icon: Trophy,
      title: t('District Science Expo Winners', 'ಜಿಲ್ಲಾ ವಿಜ್ಞಾನ ಮೇಳ ಪ್ರಶಸ್ತಿ'),
      sub: t('Prathibha Karanji Model Expo', 'ಪ್ರತಿಭಾ ಕಾರಂಜಿ ಮಾದರಿ ಸ್ಪರ್ಧೆ'),
      desc: t(
        'First Prize at Tumakuru District Science Fair for our student automated drip irrigation and solar powered farming model.',
        'ತುಮಕೂರು ಜಿಲ್ಲಾ ಮಟ್ಟದ ವಿಜ್ಞಾನ ಮೇಳದಲ್ಲಿ ಸೌರಶಕ್ತಿ ಕೃಷಿ ಮಾದರಿಗೆ ಪ್ರಥಮ ಬಹುಮಾನ.'
      ),
      color: 'bg-emerald-100 text-emerald-800',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-black text-blue-700 tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-3">
            {t('HALL OF FAME', 'ಸಾಧನೆಗಳ ಹಾದಿ')}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0b1f44] tracking-tight mb-4">
            {t('Celebrating Student Excellence', 'ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿಗಳ ಹೆಮ್ಮೆಯ ಸಾಧನೆ')}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t(
              'Our students consistently shine in state board examinations, inter-school sports tournaments, and state science fairs.',
              'ಪರೀಕ್ಷೆಗಳು, ಕ್ರೀಡೆಗಳು ಹಾಗೂ ವಿಜ್ಞಾನ ಸ್ಪರ್ಧೆಗಳಲ್ಲಿ ಸದಾ ಮುಂಚೂಣಿಯಲ್ಲಿರುವ ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿಗಳು.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition text-center"
              >
                <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-6 ${item.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-[#0b1f44] mb-1">{item.title}</h3>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-4">
                  {item.sub}
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
