'use client';

import React from 'react';
import { Users, Award, GraduationCap, History } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const StatsCounter: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Users,
      value: '1,250+',
      label: t('Enrolled Students', 'ಪ್ರಸ್ತುತ ವಿದ್ಯಾರ್ಥಿಗಳು'),
      color: 'bg-blue-50 text-blue-700',
    },
    {
      icon: Award,
      value: '100%',
      label: t('SSLC Board Pass Rate', 'ಎಸ್.ಎಸ್.ಎಲ್.ಸಿ ಫಲಿತಾಂಶ'),
      color: 'bg-amber-50 text-amber-700',
    },
    {
      icon: GraduationCap,
      value: '48+',
      label: t('Certified Teachers', 'ಅನುಭವಿ ಶಿಕ್ಷಕರು'),
      color: 'bg-emerald-50 text-emerald-700',
    },
    {
      icon: History,
      value: '18+',
      label: t('Years of Heritage', 'ವರ್ಷಗಳ ಸೇವೆ'),
      color: 'bg-indigo-50 text-indigo-700',
    },
  ];

  return (
    <section className="relative -mt-6 sm:-mt-10 z-20 max-w-7xl mx-auto px-3 sm:px-4 mb-10 sm:mb-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 bg-white p-3.5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-slate-100">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2 sm:gap-4 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-slate-50 transition lg:border-r last:border-r-0 border-slate-100"
            >
              <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 ${item.color}`}>
                <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
              <div className="min-w-0">
                <div className="text-lg sm:text-2xl lg:text-3xl font-black text-[#0b1f44] tracking-tight">
                  {item.value}
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-500 truncate">
                  {item.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
