'use client';

import React from 'react';
import Image from 'next/image';
import { BookOpen, Monitor, HeartHandshake, Dumbbell } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: BookOpen,
      title: t('Academic Rigour', 'ಉನ್ನತ ಶೈಕ್ಷಣಿಕ ಗುಣಮಟ್ಟ'),
      desc: t(
        'Concept-based teaching in Science, Math, and Languages with regular diagnostic testing.',
        'ವಿಜ್ಞಾನ, ಗಣಿತ ಮತ್ತು ಭಾಷೆಗಳಲ್ಲಿ ಪರಿಕಲ್ಪನಾಧಾರಿತ ಬೋಧನೆ.'
      ),
    },
    {
      icon: Monitor,
      title: t('Digital Classrooms', 'ಡಿಜಿಟಲ್ ಸ್ಮಾರ್ಟ್ ತರಗತಿಗಳು'),
      desc: t(
        'Interactive audiovisual smart boards bring complex diagrams and theories to life.',
        'ಆಡಿಯೋ-ವಿಶುವಲ್ ಸ್ಮಾರ್ಟ್ ಬೋರ್ಡ್‌ಗಳ ಮೂಲಕ ಸುಲಭ ಕಲಿಕೆ.'
      ),
    },
    {
      icon: HeartHandshake,
      title: t('Moral & Cultural Values', 'ಸಂಸ್ಕಾರ ಮತ್ತು ಸಂಸ್ಕೃತಿ'),
      desc: t(
        'Instilling respect, empathy, teamwork, and strong cultural pride in Indian heritage.',
        'ಮಕ್ಕಳಲ್ಲಿ ನೈತಿಕ ಮೌಲ್ಯಗಳು, ಸಂಸ್ಕಾರ ಮತ್ತು ದೇಶಪ್ರೇಮ ಬೆಳೆಸುವುದು.'
      ),
    },
    {
      icon: Dumbbell,
      title: t('Holistic Sports & Fitness', 'ಕ್ರೀಡೆ ಮತ್ತು ಯೋಗ ತರಬೇತಿ'),
      desc: t(
        'Karate, Yoga, athletics, cricket, and indoor games for mental & physical agility.',
        'ಕರಾಟೆ, ಯೋಗ, ವಾಲಿಬಾಲ್, ಕಬಡ್ಡಿ ಹಾಗೂ ವಾರ್ಷಿಕ ಕ್ರೀಡಾ ತರಬೇತಿ.'
      ),
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative mb-6 sm:mb-0">
            <div className="relative h-[240px] sm:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/assets/images/campus_hero.jpg"
                alt="Oxford English Medium School Bukkapatna Campus"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 right-2 sm:-bottom-6 sm:right-6 bg-white p-3.5 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 max-w-[200px] sm:max-w-[240px]">
              <div className="text-2xl sm:text-3xl font-black text-blue-700 leading-tight">18+ Years</div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-700 mt-0.5 sm:mt-1">
                {t('Of trusted educational excellence in Bukkapatna (572115)', 'ಬುಕ್ಕಾಪಟ್ಟಣದಲ್ಲಿ 18 ವರ್ಷಗಳ ಸಾರ್ಥಕ ಶೈಕ್ಷಣಿಕ ಸೇವೆ')}
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-7">
            <div className="inline-block text-xs font-black text-blue-700 tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-3">
              {t('ABOUT OUR INSTITUTION', 'ನಮ್ಮ ಶಾಲೆಯ ಬಗ್ಗೆ')}
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#0b1f44] tracking-tight mb-3 sm:mb-4">
              {t(
                'A Benchmark of Quality Education in Rural & Semi-Urban Karnataka',
                'ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣ ನೀಡುವ ಬುಕ್ಕಾಪಟ್ಟಣದ ಹೆಮ್ಮೆಯ ಶಾಲೆ'
              )}
            </h2>

            <p className="text-xs sm:text-base text-slate-600 mb-5 sm:mb-6 leading-relaxed">
              {t(
                'Established with the noble vision of bringing top-tier English medium education to Bukkapatna (Pincode: 572115, Sira Taluk), Oxford English Medium School has nurtured over a decade of high-achieving students in Tumakuru district.',
                'ಬುಕ್ಕಾಪಟ್ಟಣ ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಹಳ್ಳಿಗಳ ಗ್ರಾಮೀಣ ಮಕ್ಕಳಿಗೆ ಗುಣಮಟ್ಟದ ಆಂಗ್ಲ ಮಾಧ್ಯಮ ಶಿಕ್ಷಣವನ್ನು ಒದಗಿಸುವ ಧ್ಯೇಯದೊಂದಿಗೆ ಪ್ರಾರಂಭವಾದ ಆಕ್ಸ್‌ಫರ್ಡ್ ಶಾಲೆ ಇಂದು ತುಮಕೂರು ಜಿಲ್ಲೆಯಲ್ಲೇ ಅತ್ಯುತ್ತಮ ಫಲಿತಾಂಶ ನೀಡುತ್ತಿರುವ ಪ್ರತಿಷ್ಠಿತ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಯಾಗಿದೆ.'
              )}
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3 sm:gap-3.5 hover:border-blue-300 transition"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-0.5 sm:mb-1">{pillar.title}</h4>
                      <p className="text-xs text-slate-500 leading-normal">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
