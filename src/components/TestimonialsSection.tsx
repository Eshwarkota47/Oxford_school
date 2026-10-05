'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      name: 'Ramesh Kumar',
      role: t('Parent of Prajwal (Class 8) • Bukkapatna', 'ಪ್ರಜ್ವಲ್ (8ನೇ ತರಗತಿ) ತಂದೆ • ಬುಕ್ಕಾಪಟ್ಟಣ'),
      initial: 'R',
      comment: t(
        'Oxford English Medium School in Bukkapatna has provided my son with exceptional English communication skills and strong discipline. The teachers give personal attention to every child.',
        'ಆಕ್ಸ್‌ಫರ್ಡ್ ಶಾಲೆಯು ನನ್ನ ಮಗನಿಗೆ ಅತ್ಯುತ್ತಮ ಇಂಗ್ಲಿಷ್ ಸಂಭಾಷಣೆ ಕೌಶಲ್ಯ ಮತ್ತು ಉತ್ತಮ ಶಿಸ್ತು ಕಲಿಸಿದೆ. ಶಿಕ್ಷಕರು ಪ್ರತಿಯೊಬ್ಬ ವಿದ್ಯಾರ್ಥಿಯ ಮೇಲೂ ವಿಶೇಷ ಗಮನ ಹರಿಸುತ್ತಾರೆ.'
      ),
    },
    {
      name: 'Sunitha Gowda',
      role: t('Parent of Meghana (SSLC Alumnus) • Tavarekere', 'ಮೇಘನಾ (SSLC ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿನಿ) ತಾಯಿ • ತಾವರೆಕೆರೆ'),
      initial: 'S',
      comment: t(
        'My daughter scored 96.4% in her SSLC Board Exam! The special morning study hours and preparatory test series conducted by Oxford teachers made all the difference.',
        'ನನ್ನ ಮಗಳು ಎಸ್.ಎಸ್.ಎಲ್.ಸಿ ಬೋರ್ಡ್ ಪರೀಕ್ಷೆಯಲ್ಲಿ 96.4% ಗಳಿಸಿದಳು! ಆಕ್ಸ್‌ಫರ್ಡ್ ಶಿಕ್ಷಕರ ಸತತ ಪರಿಶ್ರಮ ಮತ್ತು ಮುಂಜಾನೆಯ ವಿಶೇಷ ತರಗತಿಗಳೇ ಇದಕ್ಕೆ ಮುಖ್ಯ ಕಾರಣ.'
      ),
    },
    {
      name: 'Manjunath Reddy',
      role: t('Parent of Ananya (Class 4) • Sira Road', 'ಅನನ್ಯಾ (4ನೇ ತರಗತಿ) ತಂದೆ • ಶಿರಾ ರಸ್ತೆ'),
      initial: 'M',
      comment: t(
        'The school bus service is extremely punctual and safe for kids coming from surrounding villages. The smart classroom teaching and sports activities make learning joyful.',
        'ಸುತ್ತಮುತ್ತಲಿನ ಹಳ್ಳಿಗಳ ಮಕ್ಕಳಿಗೆ ಶಾಲಾ ಬಸ್ ಸೌಲಭ್ಯ ಅತ್ಯಂತ ಸುರಕ್ಷಿತ ಹಾಗೂ ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿದೆ. ಸ್ಮಾರ್ಟ್ ತರಗತಿಗಳ ಮೂಲಕ ಮಕ್ಕಳು ಉತ್ಸಾಹದಿಂದ ಕಲಿಯುತ್ತಿದ್ದಾರೆ.'
      ),
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-black text-blue-700 tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-3">
            {t('PARENT TESTIMONIALS', 'ಪೋಷಕರ ಅಭಿಪ್ರಾಯಗಳು')}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0b1f44] tracking-tight mb-4">
            {t('What Bukkapatna Parents Say', 'ಪೋಷಕರಿಂದ ಮೆಚ್ಚುಗೆಯ ಮಾತುಗಳು')}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t(
              'Hear from parents who have entrusted their children’s foundational years and SSLC board success to Oxford English Medium School.',
              'ನಮ್ಮ ಶಾಲೆಯ ಗುಣಮಟ್ಟ ಮತ್ತು ಶಿಸ್ತಿನ ಬಗ್ಗೆ ಪೋಷಕರ ನೈಜ ಅನುಭವಗಳು.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-300 transition"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-200 mb-2" />
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                  &ldquo;{r.comment}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0b1f44] to-[#1a448c] text-amber-400 flex items-center justify-center font-black text-sm">
                  {r.initial}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{r.name}</h4>
                  <span className="text-[11px] text-slate-500 font-semibold">{r.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
