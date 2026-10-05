'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'campus' | 'academics' | 'sports' | 'cultural'>('all');
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string; category: string } | null>(null);
  const { t } = useLanguage();

  const gallery = [
    {
      src: '/assets/images/campus_hero.jpg',
      title: t('Modern School Campus & Entrance Arch', 'ಶಾಲಾ ಕಟ್ಟಡ ಹಾಗೂ ಮುಂಭಾಗದ ದ್ವಾರ'),
      category: 'campus',
      tag: 'Infrastructure',
    },
    {
      src: '/assets/images/classroom.jpg',
      title: t('Digital Smart Classrooms in Action', 'ಡಿಜಿಟಲ್ ಸ್ಮಾರ್ಟ್ ತರಗತಿಗಳ ಕಲಿಕೆ'),
      category: 'academics',
      tag: 'Smart Class',
    },
    {
      src: '/assets/images/sports.jpg',
      title: t('Annual Athletic Sports Meet & Cricket', 'ವಾರ್ಷಿಕ ಕ್ರೀಡಾಕೂಟ ಮತ್ತು ಕಬಡ್ಡಿ'),
      category: 'sports',
      tag: 'Sports Day',
    },
    {
      src: '/assets/images/cultural.jpg',
      title: t('Samskruthi Annual Cultural Day Fest', 'ಸಂಸ್ಕೃತಿ ವಾರ್ಷಿಕ ಸಾಂಸ್ಕೃತಿಕ ವೈಭವ'),
      category: 'cultural',
      tag: 'Annual Day',
    },
    {
      src: '/assets/images/classroom.jpg',
      title: t('Interactive Science & Environmental Learning', 'ವಿಜ್ಞಾನ ಮತ್ತು ಪರಿಸರ ಅಧ್ಯಯನ'),
      category: 'academics',
      tag: 'STEM Learning',
    },
    {
      src: '/assets/images/sports.jpg',
      title: t('Team Athletics & Fitness Drills', 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ದೈಹಿಕ ವ್ಯಾಯಾಮ'),
      category: 'sports',
      tag: 'Fitness',
    },
  ];

  const filtered = gallery.filter((item) => filter === 'all' || item.category === filter);

  return (
    <section id="gallery" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-xs font-black text-blue-700 tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-3">
            {t('CAMPUS GALLERY', 'ಶಾಲಾ ಗ್ಯಾಲರಿ')}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0b1f44] tracking-tight mb-4">
            {t('Life and Moments at Oxford School', 'ಆಕ್ಸ್‌ಫರ್ಡ್ ಶಾಲೆಯ ಸುಂದರ ಕ್ಷಣಗಳು')}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t(
              'Glimpses of daily academic joy, sports championships, laboratory experiments, and annual cultural celebrations in Bukkapatna.',
              'ಶಾಲಾ ಚಟುವಟಿಕೆಗಳು, ಕ್ರೀಡೆ, ವಿಜ್ಞಾನ ಮೇಳ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳ ಛಾಯಾಚಿತ್ರಗಳು.'
            )}
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex justify-center gap-2 flex-wrap mb-10">
          {(['all', 'campus', 'academics', 'sports', 'cultural'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition capitalize ${
                filter === cat
                  ? 'bg-[#0b1f44] text-white shadow'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat === 'all' ? t('All Photos', 'ಎಲ್ಲಾ ಚಿತ್ರಗಳು') : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxImg(item)}
              className="relative h-64 rounded-3xl overflow-hidden shadow-md group cursor-pointer border border-slate-100"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f44]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                <span className="text-[11px] font-extrabold text-amber-400 uppercase tracking-wider mb-1">
                  {item.tag}
                </span>
                <h4 className="text-sm sm:text-base font-bold leading-tight">{item.title}</h4>
                <div className="mt-2 flex items-center gap-1 text-xs text-slate-200 font-semibold">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{t('Click to enlarge', 'ದೊಡ್ಡದಾಗಿ ನೋಡಿ')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute -top-12 right-0 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative h-[65vh] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              <Image
                src={lightboxImg.src}
                alt={lightboxImg.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center text-white mt-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                {lightboxImg.category}
              </span>
              <h3 className="text-lg font-bold">{lightboxImg.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
