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
      label: t('Certified & Caring Teachers', 'ಅನುಭವಿ ಶಿಕ್ಷಕರು'),
      color: 'bg-emerald-50 text-emerald-700',
    },
    {
      icon: History,
      value: '18+',
      label: t('Years of Academic Heritage', 'ವರ್ಷಗಳ ಶೈಕ್ಷಣಿಕ ಸೇವೆ'),
      color: 'bg-indigo-50 text-indigo-700',
    },
  ];

  return (
    <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-100">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition sm:border-r last:border-r-0 border-slate-100"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${item.color}`}>
                <Icon className="w-7 h-7" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#0b1f44] tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500">
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
