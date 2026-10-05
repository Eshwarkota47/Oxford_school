'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface AdmissionSectionProps {
  onOpenAdmission: () => void;
}

export const AdmissionSection: React.FC<AdmissionSectionProps> = ({ onOpenAdmission }) => {
  const [grade, setGrade] = useState<'nursery' | 'lkg_ukg' | 'primary' | 'middle' | 'high_9' | 'high_10'>('primary');
  const [route, setRoute] = useState<'none' | 'bukkapatna_town' | 'tavarekere' | 'sira' | 'chelur' | 'borasandra' | 'other_villages'>('tavarekere');
  const { t } = useLanguage();

  const baseTuition = {
    nursery: 18000,
    lkg_ukg: 22000,
    primary: 28000,
    middle: 32000,
    high_9: 38000,
    high_10: 42000,
  };

  const transportRates = {
    none: 0,
    bukkapatna_town: 4500,
    tavarekere: 7500,
    sira: 9000,
    chelur: 8000,
    borasandra: 7000,
    other_villages: 8500,
  };

  const tuitionFee = baseTuition[grade] || 28000;
  const activityFee = 4500; // Smart Class, Sports, Lab & Library
  const transportFee = transportRates[route] || 0;
  const totalAnnual = tuitionFee + activityFee + transportFee;
  const perInstallment = Math.round(totalAnnual / 3);

  return (
    <section id="admissions" className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-black text-blue-700 tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-3">
            {t('ADMISSION CENTER 2026-27', 'ದಾಖಲಾತಿ ಕೇಂದ್ರ 2026-27')}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0b1f44] tracking-tight mb-4">
            {t('Simple & Transparent Admission Process', 'ಸರಳ ಮತ್ತು ಪಾರದರ್ಶಕ ಪ್ರವೇಶಾತಿ ವಿಧಾನ')}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t(
              'Begin your child’s educational journey at Oxford English Medium School with ease. Explore the interactive fee calculator below.',
              'ನಿಮ್ಮ ಮಗುವಿನ ಉಜ್ವಲ ಭವಿಷ್ಯಕ್ಕೆ ಇಂದೇ ನೋಂದಾಯಿಸಿ. ಶುಲ್ಕದ ವಿವರಗಳನ್ನು ಕೆಳಗೆ ಲೆಕ್ಕಹಾಕಿ.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Step by step guide */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-black text-[#0b1f44] mb-6">
              {t('4 Simple Steps to Enroll', 'ದಾಖಲಾತಿಯ 4 ಸರಳ ಹಂತಗಳು')}
            </h3>

            <div className="space-y-6 relative before:content-[''] before:absolute before:top-4 before:bottom-4 before:left-4 before:w-0.5 before:bg-slate-200">
              {[
                {
                  step: '1',
                  title: t('Submit Online Registration', 'ಆನ್‌ಲೈನ್ ಅರ್ಜಿ ಸಲ್ಲಿಕೆ'),
                  desc: t(
                    'Fill out the student details form online or visit our school reception in Bukkapatna.',
                    'ಆನ್‌ಲೈನ್ ಮೂಲಕ ಅಥವಾ ಶಾಲಾ ಕಚೇರಿಗೆ ಭೇಟಿ ನೀಡಿ ಅರ್ಜಿ ಭರ್ತಿ ಮಾಡಿ.'
                  ),
                },
                {
                  step: '2',
                  title: t('Student Interaction & Assessment', 'ವಿದ್ಯಾರ್ಥಿ ಪರಿಚಯ ಪರೀಕ್ಷೆ'),
                  desc: t(
                    'Informal friendly interaction for KG and foundational concept check for higher standards.',
                    'ಮಕ್ಕಳ ಕಲಿಕಾ ಸಾಮರ್ಥ್ಯ ತಿಳಿಯಲು ಸಣ್ಣ ಸಂದರ್ಶನ ಮತ್ತು ಮೂಲ ಪರೀಕ್ಷೆ.'
                  ),
                },
                {
                  step: '3',
                  title: t('Document Verification', 'ದಾಖಲಾತಿ ಪರಿಶೀಲನೆ'),
                  desc: t(
                    'Verification of Birth Certificate, Student & Parent Aadhar, TC, and 4 passport photos.',
                    'ಜನನ ಪ್ರಮಾಣಪತ್ರ, ಆಧಾರ್ ಕಾರ್ಡ್, ಟಿ.ಸಿ ಮತ್ತು ಭಾವಚಿತ್ರಗಳ ಸಲ್ಲಿಕೆ.'
                  ),
                },
                {
                  step: '4',
                  title: t('Admission Confirmation & Welcome Kit', 'ಪ್ರವೇಶ ಖಚಿತತೆ ಮತ್ತು ಕಿಟ್'),
                  desc: t(
                    'Receive registration acknowledgement slip, textbooks set, and school bus seat allocation.',
                    'ಪ್ರವೇಶ ಪತ್ರ, ಪಠ್ಯಪುಸ್ತಕಗಳು ಹಾಗೂ ಬಸ್ ಪಾಸ್ ಪಡೆಯುವುದು.'
                  ),
                },
              ].map((s, idx) => (
                <div key={idx} className="relative flex items-start gap-4 pl-2">
                  <div className="w-8 h-8 rounded-full bg-[#0b1f44] text-amber-400 flex items-center justify-center font-black text-sm shrink-0 z-10 ring-4 ring-white shadow">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1">{s.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <button
                onClick={onOpenAdmission}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-sm sm:text-base py-3.5 rounded-xl shadow transition"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t('Open Online Admission Form →', 'ಆನ್‌ಲೈನ್ ಅರ್ಜಿ ಫಾರ್ಮ್ ತೆರೆಯಿರಿ →')}</span>
              </button>
            </div>
          </div>

          {/* Interactive Fee Estimator Card */}
          <div id="fee-calculator" className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-100 shadow-xl">
            <div className="flex items-center gap-2 text-blue-700 font-extrabold text-xs uppercase tracking-wider mb-2">
              <Calculator className="w-4 h-4" />
              <span>{t('Interactive Fee Tool', 'ಶುಲ್ಕ ಲೆಕ್ಕಾಚಾರ ಸಾಧನ')}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#0b1f44] mb-2">
              {t('Estimate Annual Fee & Transport', 'ವಾರ್ಷಿಕ ಶುಲ್ಕ ಮತ್ತು ಸಾರಿಗೆ ಅಂದಾಜು')}
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              {t(
                'Select grade and bus commute location to calculate instantaneous breakdown.',
                'ತರಗತಿ ಮತ್ತು ಬಸ್ ಮಾರ್ಗ ಆಯ್ಕೆ ಮಾಡಿ ತಕ್ಷಣದ ಶುಲ್ಕ ವಿವರ ನೋಡಿ.'
              )}
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t('Select Grade / Class:', 'ತರಗತಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ:')}
                </label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value as any)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="nursery">Pre-Primary (Nursery)</option>
                  <option value="lkg_ukg">Kindergarten (LKG / UKG)</option>
                  <option value="primary">Primary Wing (Classes 1st to 5th)</option>
                  <option value="middle">Middle School (Classes 6th to 8th)</option>
                  <option value="high_9">High School (Class 9th)</option>
                  <option value="high_10">SSLC Board (Class 10th)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t('Select School Bus Route:', 'ಶಾಲಾ ಬಸ್ ಮಾರ್ಗ:')}
                </label>
                <select
                  value={route}
                  onChange={(e) => setRoute(e.target.value as any)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="none">No School Bus (Self Commute in Bukkapatna)</option>
                  <option value="bukkapatna_town">Bukkapatna Town / Local Area (₹ 4,500/yr)</option>
                  <option value="tavarekere">Tavarekere Route (₹ 7,500/yr)</option>
                  <option value="sira">Sira Town Connect (₹ 9,000/yr)</option>
                  <option value="chelur">Chelur Route (₹ 8,000/yr)</option>
                  <option value="borasandra">Borasandra Village (₹ 7,000/yr)</option>
                  <option value="other_villages">Surrounding Villages within 15km (₹ 8,500/yr)</option>
                </select>
              </div>
            </div>

            {/* Breakdown card */}
            <div className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-4 sm:p-5 mb-6">
              <div className="flex justify-between items-center text-xs sm:text-sm text-slate-600 mb-2">
                <span>Tuition & Academic Term Fee:</span>
                <strong className="text-slate-900 font-bold">₹ {tuitionFee.toLocaleString('en-IN')}</strong>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm text-slate-600 mb-2">
                <span>Smart Class, Sports & Lab Fee:</span>
                <strong className="text-slate-900 font-bold">₹ {activityFee.toLocaleString('en-IN')}</strong>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm text-slate-600 mb-3 pb-3 border-b border-slate-200">
                <span>School Bus Transportation:</span>
                <strong className="text-slate-900 font-bold">₹ {transportFee.toLocaleString('en-IN')}</strong>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs font-bold text-slate-500 block">Estimated Annual Total:</span>
                  <span className="text-2xl font-black text-emerald-700">₹ {totalAnnual.toLocaleString('en-IN')}</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-semibold text-slate-500 block">3 Flexible Installments of:</span>
                  <span className="text-sm font-extrabold text-[#0b1f44]">₹ {perInstallment.toLocaleString('en-IN')} / Term</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenAdmission}
              className="w-full flex items-center justify-center gap-2 bg-[#0b1f44] hover:bg-[#1a448c] text-white font-extrabold text-sm py-3.5 rounded-xl shadow transition"
            >
              <span>{t('Register with this Plan Now', 'ಈ ಯೋಜನೆಯೊಂದಿಗೆ ದಾಖಲಾಗಿ')}</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
