'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { t } = useLanguage();

  const faqs = [
    {
      q: t(
        'What is the age criteria for Nursery & Class 1 admission?',
        'ನರ್ಸರಿ ಮತ್ತು 1ನೇ ತರಗತಿ ಪ್ರವೇಶಕ್ಕೆ ವಯೋಮಿತಿ ಏನು?'
      ),
      a: t(
        'For Nursery, the child must be 3+ years of age as of June 1st. For LKG: 4+ years; UKG: 5+ years; and for Class 1st: 6+ years as per Karnataka Education Department norms.',
        'ಜೂನ್ 1ಕ್ಕೆ ಅನ್ವಯವಾಗುವಂತೆ ನರ್ಸರಿಗೆ 3 ವರ್ಷ, ಎಲ್‌ಕೆಜಿಗೆ 4 ವರ್ಷ, ಯುಕೆಜಿಗೆ 5 ವರ್ಷ ಹಾಗೂ 1ನೇ ತರಗತಿಗೆ 6 ವರ್ಷ ಪೂರ್ಣಗೊಂಡಿರಬೇಕು.'
      ),
    },
    {
      q: t(
        'Which curriculum and board is followed at Oxford School?',
        'ಶಾಲೆಯಲ್ಲಿ ಯಾವ ಪಠ್ಯಕ್ರಮವನ್ನು ಬೋಧಿಸಲಾಗುತ್ತದೆ?'
      ),
      a: t(
        'We follow the Karnataka State Board Curriculum enriched with NCERT-aligned science, mathematics, and digital smart class content in English medium with Kannada and Hindi.',
        'ರಾಜ್ಯ ಶಿಕ್ಷಣ ಇಲಾಖೆಯ ಮಾನ್ಯತೆ ಪಡೆದ ಪಠ್ಯಕ್ರಮ, ಸ್ಮಾರ್ಟ್ ತರಗತಿಗಳ ಅನಿಮೇಷನ್ ಹಾಗೂ ಇಂಗ್ಲಿಷ್ ಮಾಧ್ಯಮ ಬೋಧನೆ.'
      ),
    },
    {
      q: t(
        'Are school bus transportation facilities safe and available for nearby villages?',
        'ಸುತ್ತಮುತ್ತಲಿನ ಹಳ್ಳಿಗಳಿಗೆ ಸುರಕ್ಷಿತ ಶಾಲಾ ಬಸ್ ಸೌಲಭ್ಯವಿದೆಯೇ?'
      ),
      a: t(
        'Yes! We operate a dedicated fleet of GPS-tracked school buses covering Bukkapatna, Tavarekere, Sira, Borasandra, Chelur, and surrounding villages with licensed drivers and lady attendants.',
        'ಹೌದು, ಜಿಪಿಎಸ್ ಹೊಂದಿರುವ ಶಾಲಾ ಬಸ್‌ಗಳು ನಿಗದಿತ ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಎಲ್ಲಾ ಹಳ್ಳಿಗಳಿಗೂ ಸಂಚರಿಸುತ್ತವೆ.'
      ),
    },
    {
      q: t(
        'Can the annual school fee be paid in installments?',
        'ಶಾಲಾ ಶುಲ್ಕವನ್ನು ಕಂತುಗಳಲ್ಲಿ ಪಾವತಿಸಬಹುದೇ?'
      ),
      a: t(
        'Yes, parents can pay the total annual fee in 3 convenient term installments (Term 1 at admission in May/June, Term 2 in September, Term 3 in December).',
        'ಹೌದು, ವಾರ್ಷಿಕ ಶುಲ್ಕವನ್ನು ಪೋಷಕರು 3 ಸುಲಭ ಕಂತುಗಳಲ್ಲಿ ಪಾವತಿಸಬಹುದು.'
      ),
    },
    {
      q: t(
        'What extracurricular activities are offered to students?',
        'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಯಾವ ಪಠ್ಯೇತರ ಚಟುವಟಿಕೆಗಳು ಲಭ್ಯವಿವೆ?'
      ),
      a: t(
        'We offer regular training in Karate (martial arts), Yoga, Spoken English, Classical & Folk Dance, Drawing, Science Club, Volleyball, Kho-Kho, and Kabaddi.',
        'ಕರಾಟೆ, ಯೋಗ, ಇಂಗ್ಲಿಷ್ ಸಂಭಾಷಣೆ, ನೃತ್ಯ, ಚಿತ್ರಕಲೆ, ವಾಲಿಬಾಲ್, ಖೋಖೋ ಹಾಗೂ ಕಬಡ್ಡಿ ತರಬೇತಿ ನೀಡಲಾಗುತ್ತದೆ.'
      ),
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-black text-blue-700 tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-3">
            {t('FREQUENTLY ASKED QUESTIONS', 'ಪ್ರಶ್ನೋತ್ತರಗಳು')}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0b1f44] tracking-tight mb-4">
            {t('Common Questions by Parents', 'ಪೋಷಕರ ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು')}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t(
              'Get quick clarity on admissions, fee schedules, syllabus, and bus routes.',
              'ದಾಖಲಾತಿ ನಿಯಮಗಳು, ಶುಲ್ಕ ಹಾಗೂ ಸಾರಿಗೆ ವ್ಯವಸ್ಥೆಯ ಬಗೆಗಿನ ವಿವರಗಳು.'
            )}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 font-bold text-slate-900 text-sm sm:text-base flex justify-between items-center gap-4 hover:text-blue-700 transition"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
