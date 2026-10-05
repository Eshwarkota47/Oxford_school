'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle, BookOpen, Layers, Microscope, Trophy } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const AcademicsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preprimary' | 'primary' | 'middle' | 'high'>('preprimary');
  const { t } = useLanguage();

  const tabs = [
    {
      id: 'preprimary' as const,
      label: t('Pre-Primary (Nursery, LKG, UKG)', 'ಪೂರ್ವ ಪ್ರಾಥಮಿಕ (ನರ್ಸರಿ, LKG, UKG)'),
      icon: BookOpen,
    },
    {
      id: 'primary' as const,
      label: t('Primary Wing (Classes 1 - 5)', 'ಪ್ರಾಥಮಿಕ ಶಾಲೆ (1 - 5 ನೇ ತರಗತಿ)'),
      icon: Layers,
    },
    {
      id: 'middle' as const,
      label: t('Middle School (Classes 6 - 8)', 'ಪ್ರೌಢ ಪೂರ್ವ ಶಾಲೆ (6 - 8 ನೇ ತರಗತಿ)'),
      icon: Microscope,
    },
    {
      id: 'high' as const,
      label: t('High School / SSLC (Classes 9 - 10)', 'ಪ್ರೌಢಶಾಲೆ / SSLC (9 - 10 ನೇ ತರಗತಿ)'),
      icon: Trophy,
    },
  ];

  const content = {
    preprimary: {
      subtitle: t('Early Childhood Foundation • Ages 3 to 5', 'ಆರಂಭಿಕ ಬಾಲ್ಯದ ಕಲಿಕೆ • 3 ರಿಂದ 5 ವರ್ಷ'),
      title: t('Joyful Play-Way & Montessori Learning', 'ಆಟವಾಡುತ್ತಾ ಕಲಿಯುವ ನವೀನ ಪದ್ಧತಿ'),
      desc: t(
        'Our Kindergarten wing is a vibrant wonderland designed to ignite curiosity, develop speech, motor skills, and phonics foundation in a warm and playful setting.',
        'ಚಿಕ್ಕ ಮಕ್ಕಳಿಗಾಗಿ ಆಕರ್ಷಕ ಆಟಿಕೆಗಳು, ಇಂಗ್ಲಿಷ್ ಫೋನಿಕ್ಸ್, ನೃತ್ಯ, ಕಥೆ ಹೇಳುವ ಮೂಲಕ ಭಾಷಾ ಪ್ರಾವೀಣ್ಯತೆ ಮತ್ತು ಸಂಖ್ಯಾ ಜ್ಞಾನ ನೀಡಲಾಗುತ್ತದೆ.'
      ),
      features: [
        t('Phonics-based English reading and vocabulary drills', 'ಫೋನಿಕ್ಸ್ ಆಧಾರಿತ ಇಂಗ್ಲಿಷ್ ಓದುವಿಕೆ ತರಬೇತಿ'),
        t('Fun with numbers, shapes, and sensory puzzles', 'ಸಂಖ್ಯೆಗಳು ಮತ್ತು ಆಕಾರಗಳ ಪರಿಚಯ'),
        t('Creative arts, clay modeling, rhymes & puppet shows', 'ಚಿತ್ರಕಲೆ, ಕರಕುಶಲತೆ ಮತ್ತು ಕಥೆಗಳ ಮೂಲಕ ಕಲಿಕೆ'),
        t('Spacious child-safe indoor playroom with caring staff', 'ಮಕ್ಕಳಿಗೆ ಸುರಕ್ಷಿತ ಆಟದ ಕೊಠಡಿ ಮತ್ತು ಪ್ರತ್ಯೇಕ ಆಯಾಗಳು'),
      ],
      subjects: ['English Phonics', 'Early Numeracy', 'General Awareness', 'Art & Craft', 'Moral Rhymes'],
      image: '/assets/images/classroom.jpg',
    },
    primary: {
      subtitle: t('Fundamental Building Blocks • Classes I to V', 'ಮೂಲ ಪರಿಕಲ್ಪನೆಗಳ ಬುನಾದಿ • 1 ರಿಂದ 5 ನೇ ತರಗತಿ'),
      title: t('Concept-Based Learning & Spoken Fluency', 'ಪರಿಕಲ್ಪನಾಧಾರಿತ ಬೋಧನೆ ಮತ್ತು ಇಂಗ್ಲಿಷ್ ಸಂಭಾಷಣೆ'),
      desc: t(
        'Focusing on deep conceptual understanding rather than rote memorization. Students develop strong reading comprehension, arithmetic calculation, and environmental inquiry.',
        'ಮನನ ಮಾಡುವ ಬದಲಿಗೆ ವಿಷಯ ಅರ್ಥೈಸಿಕೊಂಡು ಕಲಿಯುವ ವ್ಯವಸ್ಥೆ. ಗಣಿತ, ಪರಿಸರ ವಿಜ್ಞಾನ ಮತ್ತು ಭಾಷಾ ಪ್ರಾವೀಣ್ಯತೆಗೆ ಒತ್ತು.'
      ),
      features: [
        t('Interactive Smart Board animated modules for all lessons', 'ಸ್ಮಾರ್ಟ್ ಕ್ಲಾಸ್ ಅನಿಮೇಷನ್ ಮೂಲಕ ಸುಲಭ ಬೋಧನೆ'),
        t('Trilingual proficiency: English (Medium), Kannada (State), Hindi', 'ಇಂಗ್ಲಿಷ್, ಕನ್ನಡ ಮತ್ತು ಹಿಂದಿ ತ್ರಿಭಾಷಾ ಸೂತ್ರ'),
        t('Hands-on Science kits and nature study projects', 'ವಿಜ್ಞಾನ ಕಿಟ್‌ಗಳ ಮೂಲಕ ಪ್ರಾಯೋಗಿಕ ಜ್ಞಾನ'),
        t('Weekly library reading hour & spoken English club', 'ಗ್ರಂಥಾಲಯ ಓದುವ ಹವ್ಯಾಸ ಮತ್ತು ಇಂಗ್ಲಿಷ್ ಕ್ಲಬ್'),
      ],
      subjects: ['English Prose & Grammar', 'Mathematics', 'General Science', 'Social Studies', 'Kannada', 'Hindi', 'Computers'],
      image: '/assets/images/classroom.jpg',
    },
    middle: {
      subtitle: t('Critical Thinking & Discovery • Classes VI to VIII', 'ವಿಮರ್ಶಾತ್ಮಕ ಚಿಂತನೆ • 6 ರಿಂದ 8 ನೇ ತರಗತಿ'),
      title: t('Laboratory Experiments & Analytical Mastery', 'ಪ್ರಾಯೋಗಿಕ ವಿಜ್ಞಾನ ಮತ್ತು ಕಂಪ್ಯೂಟರ್ ಶಿಕ್ಷಣ'),
      desc: t(
        'Transitioning into specialized sciences (Physics, Chemistry, Biology), algebraic mathematics, world history, geography, and computer coding.',
        'ಭೌತಶಾಸ್ತ್ರ, ರಸಾಯನಶಾಸ್ತ್ರ, ಜೀವಶಾಸ್ತ್ರ ಪ್ರಯೋಗಗಳು ಹಾಗೂ ಕಂಪ್ಯೂಟರ್ ಕೋಡಿಂಗ್ ಕಲಿಕೆ.'
      ),
      features: [
        t('Weekly practicals in fully-equipped Science & Computer Labs', 'ಸುಸಜ್ಜಿತ ವಿಜ್ಞಾನ ಮತ್ತು ಗಣಕಯಂತ್ರ ಲ್ಯಾಬ್'),
        t('Foundation coaching for NMMS, Olympiads & Talent Exams', 'ಪ್ರತಿಭಾ ಪರೀಕ್ಷೆಗಳು ಮತ್ತು NMMS ತರಬೇತಿ'),
        t('Debate club, creative writing & science exhibitions', 'ಚರ್ಚಾಕೂಟ, ಭಾಷಣ ಸ್ಪರ್ಧೆಗಳು ಮತ್ತು ವಿಜ್ಞಾನ ಮೇಳ'),
        t('Special physical training in Volleyball, Kho-Kho & Karate', 'ಕರಾಟೆ, ವಾಲಿಬಾಲ್ ಮತ್ತು ಕಬಡ್ಡಿ ವಿಶೇಷ ತರಬೇತಿ'),
      ],
      subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'History & Civics', 'Geography', 'Kannada', 'English', 'Hindi'],
      image: '/assets/images/sports.jpg',
    },
    high: {
      subtitle: t('Board Exam Mastery • Classes IX & X (SSLC)', 'ಬೋರ್ಡ್ ಪರೀಕ್ಷಾ ಸಿದ್ಧತೆ • 9 ಮತ್ತು 10 ನೇ ತರಗತಿ'),
      title: t('Rigorous SSLC Board Preparation & Distinction Plan', '100% ಫಲಿತಾಂಶ ನೀಡುವ ಎಸ್.ಎಸ್.ಎಲ್.ಸಿ ವಿಶೇಷ ತರಬೇತಿ'),
      desc: t(
        'Our flagship SSLC division boasts a proud 100% pass track record with a record number of state rankers and district top scorers across Tumakuru district.',
        'ನಮ್ಮ ಶಾಲೆಯ 10ನೇ ತರಗತಿ ವಿದ್ಯಾರ್ಥಿಗಳು ನಿರಂತರವಾಗಿ 100% ತೇರ್ಗಡೆಯಾಗುತ್ತಿದ್ದು, ಜಿಲ್ಲಾ ಮಟ್ಟದಲ್ಲಿ ಉನ್ನತ ಶ್ರೇಣಿಯ ಸಾಧನೆ ಮಾಡಿದ್ದಾರೆ.'
      ),
      features: [
        t('Special morning & evening study hours with personal mentoring', 'ಮುಂಜಾನೆ ಮತ್ತು ಸಂಜೆಯ ವಿಶೇಷ ತರಗತಿಗಳು'),
        t('3+ Comprehensive Preparatory & Mock Board Examinations', '3 ಕ್ಕೂ ಹೆಚ್ಚು ಪೂರ್ವಭಾವಿ ಮಾದರಿ ಪರೀಕ್ಷೆಗಳು'),
        t('Chapter-wise question banks and previous 10-year paper drills', 'ಹಳೆಯ ಪ್ರಶ್ನೆಪತ್ರಿಕೆಗಳ ಸಂಪೂರ್ಣ ಅಭ್ಯಾಸ'),
        t('Career guidance sessions for PUC Science, Commerce & Arts', 'ಪಿಯುಸಿ ಆಯ್ಕೆಗಾಗಿ ಉಚಿತ ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶನ'),
      ],
      subjects: ['1st Language English/Kannada', '2nd Language English/Kannada', '3rd Language Hindi', 'Mathematics', 'Science (Phy/Chem/Bio)', 'Social Science'],
      image: '/assets/images/campus_hero.jpg',
    },
  };

  const current = content[activeTab];

  return (
    <section id="academics" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-xs font-black text-blue-700 tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-3">
            {t('ACADEMIC CURRICULUM', 'ಶೈಕ್ಷಣಿಕ ವಿಭಾಗ')}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0b1f44] tracking-tight mb-4">
            {t('Structured Curriculum from Nursery to SSLC', 'ಹಂತ ಹಂತದ ಸಮಗ್ರ ಶೈಕ್ಷಣಿಕ ಪಠ್ಯಕ್ರಮ')}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t(
              'A well-sequenced curriculum that matches the cognitive developmental stage of every child, taught in English medium with strong language fundamentals.',
              'ರಾಜ್ಯ ಶಿಕ್ಷಣ ಇಲಾಖೆಯ ಮಾನ್ಯತೆ ಪಡೆದ ಪಠ್ಯಕ್ರಮ, ಇಂಗ್ಲಿಷ್ ಮಾಧ್ಯಮ ಬೋಧನೆ ಮತ್ತು ಉತ್ತಮ ಶಿಸ್ತು.'
            )}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-black transition ${
                  isActive
                    ? 'bg-[#0b1f44] text-white shadow-lg scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Pane */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-2">
                {current.subtitle}
              </span>
              <h3 className="text-xl sm:text-3xl font-black text-[#0b1f44] mb-4">
                {current.title}
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                {current.desc}
              </p>

              <div className="space-y-3 mb-8">
                {current.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2.5">
                  {t('Subjects & Key Modules:', 'ಬೋಧನಾ ವಿಷಯಗಳು:')}
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.subjects.map((sub, idx) => (
                    <span
                      key={idx}
                      className="bg-white text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-200 shadow-sm"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-[300px] sm:h-[360px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
