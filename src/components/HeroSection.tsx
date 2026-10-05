'use client';

import React from 'react';
import Image from 'next/image';
import {
  Award,
  MonitorPlay,
  Bus,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  Calculator,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface HeroSectionProps {
  onOpenAdmission: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAdmission }) => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative bg-[#0b1f44] text-white py-10 sm:py-16 lg:py-24 overflow-hidden">
      {/* Background Graphic & Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <Image
          src="/assets/images/campus_hero.jpg"
          alt="Oxford English Medium School Bukkapatna Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f44] via-[#0b1f44]/90 to-[#1a448c]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 text-left">
            {/* Cultural Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-amber-300 mb-4 sm:mb-6">
              <span>✨ {t('Nurturing Leaders in Bukkapatna Since 2008', 'ಬುಕ್ಕಾಪಟ್ಟಣದಲ್ಲಿ 2008 ರಿಂದ ಜ್ಞಾನಜ್ಯೋತಿ')}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-[1.15] mb-4 sm:mb-6">
              {t('Nurturing Minds, Building Character &', 'ಶ್ರೇಷ್ಠ ಶಿಕ್ಷಣ, ಉಜ್ವಲ ಭವಿಷ್ಯಕ್ಕಾಗಿ')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 block sm:inline">
                {t('Inspiring Excellence', 'ಆಕ್ಸ್‌ಫರ್ಡ್ ಶಾಲೆ')}
              </span>
            </h1>

            <p className="text-xs sm:text-base text-slate-200 leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              {t(
                'A premier English medium co-educational institution in Bukkapatna - 572115. From Montessori Kindergarten to 10th Standard (SSLC), empowering students with digital smart classes, laboratory experiments, moral values, and 100% board exam success.',
                'ಬುಕ್ಕಾಪಟ್ಟಣದ ಹೆಮ್ಮೆಯ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆ. ನರ್ಸರಿಯಿಂದ 10ನೇ ತರಗತಿಯವರೆಗೆ ಗುಣಮಟ್ಟದ ಇಂಗ್ಲಿಷ್ ಮಾಧ್ಯಮ ಶಿಕ್ಷಣ, ಡಿಜಿಟಲ್ ಸ್ಮಾರ್ಟ್ ತರಗತಿಗಳು, ವಿಜ್ಞಾನ ಪ್ರಯೋಗಾಲಯ ಮತ್ತು ಸಮಗ್ರ ಕ್ರೀಡಾ ತರಬೇತಿ.'
              )}
            </p>

            {/* Feature Badges - responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate sm:whitespace-normal">100% SSLC Board Results</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold">
                <MonitorPlay className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate sm:whitespace-normal">Smart Digital Classrooms</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold">
                <Bus className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate sm:whitespace-normal">GPS Fleet (20+ Villages)</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenAdmission}
                className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black text-xs sm:text-base px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition active:scale-95"
              >
                <span>{t('Enroll for 2026-27 Today', '2026-27 ಸಾಲಿನ ಪ್ರವೇಶಾತಿ')}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <a
                href="#fee-calculator"
                className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md font-bold text-xs sm:text-base px-5 py-3.5 rounded-xl transition"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>{t('Fee Calculator', 'ಶುಲ್ಕ ವಿವರ')}</span>
              </a>
            </div>
          </div>

          {/* Hero Quick Admission Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl border border-white/80 relative">
              <div className="flex justify-between items-center mb-4 sm:mb-5 pb-3 sm:pb-4 border-b border-slate-100">
                <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-[11px] sm:text-xs font-black uppercase px-2.5 sm:px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  {t('Admissions Open', 'ಪ್ರವೇಶ ಪ್ರಾರಂಭ')}
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-amber-700 bg-amber-50 px-2.5 sm:px-3 py-1 rounded-full border border-amber-200">
                  Batch 2026 - 2027
                </span>
              </div>

              <h3 className="text-lg sm:text-2xl font-black text-[#0b1f44] mb-1.5 sm:mb-2">
                {t('Join Oxford Family Today', 'ಆಕ್ಸ್‌ಫರ್ಡ್ ಶಾಲೆಗೆ ಸೇರ್ಪಡೆ')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 sm:mb-6">
                {t(
                  'Admissions open for Nursery, LKG, UKG and Standard 1st to 10th (SSLC).',
                  'ನರ್ಸರಿಯಿಂದ 10ನೇ ತರಗತಿವರೆಗೆ ಪ್ರವೇಶಾತಿಗಳು ಲಭ್ಯವಿದೆ.'
                )}
              </p>

              <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                {[
                  t('Individual attention with 1:25 teacher-student ratio', 'ಪ್ರತಿ ವಿದ್ಯಾರ್ಥಿಗೆ ವೈಯಕ್ತಿಕ ಗಮನ'),
                  t('Dedicated Karate, Yoga, Music & Spoken English', 'ಕರಾಟೆ, ಯೋಗ, ಸಂಗೀತ ಹಾಗೂ ಇಂಗ್ಲಿಷ್ ಸಂಭಾಷಣೆ'),
                  t('Affordable fee structure with 3 flexible installments', 'ಕೈಗೆಟುಕುವ ಶುಲ್ಕ ಮತ್ತು ಸುಲಭ ಕಂತುಗಳು'),
                  t('Special coaching for SSLC Board Exam Distinctions', 'ಎಸ್.ಎಸ್.ಎಲ್.ಸಿ ಪರೀಕ್ಷೆಗೆ ವಿಶೇಷ ತರಬೇತಿ'),
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50/80 rounded-2xl p-3.5 sm:p-4 border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-blue-900 uppercase block">
                    {t('Direct Admission Helpdesk', 'ದಾಖಲಾತಿ ಸಹಾಯವಾಣಿ')}
                  </span>
                  <a
                    href="tel:+919448215689"
                    className="text-sm sm:text-lg font-black text-[#0b1f44] hover:text-blue-700 transition"
                  >
                    +91 94482 15689
                  </a>
                </div>
                <button
                  onClick={onOpenAdmission}
                  className="bg-[#1a448c] hover:bg-[#0b1f44] text-white font-bold text-xs px-4 py-2.5 rounded-xl transition shadow text-center"
                >
                  {t('Register Now', 'ಅರ್ಜಿ ಹಾಕಿ')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
