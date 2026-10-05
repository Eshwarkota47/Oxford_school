'use client';

import React from 'react';
import { MapPin, Phone, Clock, Bus, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const LocationSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-black text-blue-700 tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-3">
            {t('LOCATION & TRANSPORT', 'ಸ್ಥಳ ಮತ್ತು ಸಾರಿಗೆ')}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0b1f44] tracking-tight mb-4">
            {t('Campus Location in Bukkapatna - 572115', 'ಬುಕ್ಕಾಪಟ್ಟಣ ಶಾಲೆಯ ವಿಳಾಸ ಮತ್ತು ಮಾರ್ಗ')}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t(
              'Conveniently located on Main Road near Bus Stand with broad roads, secure parking, and extensive school bus network.',
              'ಬುಕ್ಕಾಪಟ್ಟಣದ ಮುಖ್ಯ ರಸ್ತೆಯಲ್ಲಿರುವ ಸುಂದರ ಶಾಲಾ ಆವರಣಕ್ಕೆ ಸುಲಭ ಸಂಪರ್ಕ.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Location Info Box */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0b1f44] mb-2">
                Oxford English Medium School
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Main Road, Bukkapatna, Sira Taluk, Tumakuru District, Karnataka - 572115
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Postal Address</h4>
                    <p className="text-xs text-slate-500">
                      Oxford English Medium School, Near Main Bus Stand, Bukkapatna - 572115, Karnataka
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Admission Helplines</h4>
                    <p className="text-xs text-slate-500">
                      +91 94482 15689 | +91 98450 78214 | 08135-278214
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Visiting Hours</h4>
                    <p className="text-xs text-slate-500">
                      Monday to Saturday: 9:00 AM – 4:30 PM (Principal meeting 2:00 PM – 4:00 PM)
                    </p>
                  </div>
                </div>
              </div>

              {/* Bus Route Tags */}
              <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 mb-6">
                <div className="flex items-center gap-2 text-xs font-black text-amber-900 uppercase mb-2">
                  <Bus className="w-4 h-4 text-amber-700" />
                  <span>{t('School Bus Routes Operating:', 'ಶಾಲಾ ಬಸ್ ಸಂಚರಿಸುವ ಮಾರ್ಗಗಳು:')}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Bukkapatna Town',
                    'Tavarekere',
                    'Sira Town',
                    'Chelur Route',
                    'Borasandra',
                    'Hagalavadi',
                    'Chikka Hulikunte',
                  ].map((route, idx) => (
                    <span
                      key={idx}
                      className="bg-white text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-full border border-amber-200 shadow-sm"
                    >
                      {route}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Bukkapatna+572115"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#0b1f44] hover:bg-[#1a448c] text-white font-extrabold text-sm py-3.5 rounded-xl shadow transition"
            >
              <span>{t('Open in Google Maps Navigation', 'ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ದಾರಿ ನೋಡಿ')}</span>
              <ExternalLink className="w-4 h-4 text-amber-400" />
            </a>
          </div>

          {/* Embedded Map Column */}
          <div className="lg:col-span-6 bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 min-h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15512.441113222383!2d76.702758!3d13.684126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb0494cf81c3c95%3A0xe54e3d3fa8f5c942!2sBukkapatna%2C%20Karnataka%20572115!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              title="Oxford English Medium School Bukkapatna Location Map"
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
