'use client';

import React, { useState } from 'react';
import { Bell, Calendar, Download, FileText, ChevronRight, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const NoticeBoard: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'admission' | 'exam' | 'events'>('all');
  const [downloaded, setDownloaded] = useState(false);
  const { t } = useLanguage();

  const notices = [
    {
      day: '15',
      month: 'OCT',
      category: 'admission',
      title: t(
        'Admissions Open for Academic Year 2026-2027',
        '2026-27 ಸಾಲಿನ ನೂತನ ದಾಖಲಾತಿ ಪ್ರಾರಂಭವಾಗಿದೆ'
      ),
      desc: t(
        'Registration forms available online and at the Bukkapatna campus reception between 9:00 AM to 4:00 PM on all working days.',
        'ನರ್ಸರಿಯಿಂದ 10ನೇ ತರಗತಿಯವರೆಗೆ ಪ್ರವೇಶ ಅರ್ಜಿಗಳು ಶಾಲಾ ಕಚೇರಿಯಲ್ಲಿ ಹಾಗೂ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಲಭ್ಯವಿವೆ.'
      ),
      issuedBy: 'Principal Office',
    },
    {
      day: '22',
      month: 'OCT',
      category: 'exam',
      title: t(
        'Mid-Term Formative Assessment Timetable Released',
        'ಮಧ್ಯವಾರ್ಷಿಕ ಪರೀಕ್ಷಾ ವೇಳಾಪಟ್ಟಿ ಪ್ರಕಟಣೆ'
      ),
      desc: t(
        'Detailed timetable for 1st to 10th Standard has been dispatched to parents via student diaries and SMS alerts.',
        '1 ರಿಂದ 10ನೇ ತರಗತಿಯ ಪರೀಕ್ಷಾ ವೇಳಾಪಟ್ಟಿಯನ್ನು ಡೈರಿ ಮತ್ತು ಎಸ್‌ಎಂಎಸ್ ಮೂಲಕ ಕಳುಹಿಸಲಾಗಿದೆ.'
      ),
      issuedBy: 'Academic Coordinator',
    },
    {
      day: '01',
      month: 'NOV',
      category: 'events',
      title: t(
        'Karnataka Rajyotsava & Samskruthi Cultural Celebration',
        'ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ವೈಭವ'
      ),
      desc: t(
        'Grand cultural celebration at the school auditorium featuring folk dance, Kannada debate, drama, and traditional music performances.',
        'ಶಾಲಾ ಸಭಾಂಗಣದಲ್ಲಿ ನಾಡಹಬ್ಬ ರಾಜ್ಯೋತ್ಸವ ಹಾಗೂ ವಿವಿಧ ಸಾಂಸ್ಕೃತಿಕ ಸ್ಪರ್ಧೆಗಳು.'
      ),
      issuedBy: 'Cultural Committee',
    },
    {
      day: '14',
      month: 'NOV',
      category: 'events',
      title: t(
        "Children's Day & Annual Athletic Sports Carnival",
        'ಮಕ್ಕಳ ದಿನಾಚರಣೆ ಮತ್ತು ವಾರ್ಷಿಕ ಕ್ರೀಡಾಕೂಟ'
      ),
      desc: t(
        'Inter-house athletic meets, relay races, volleyball tournament, and science model displays. Parents are cordially invited.',
        'ಮಕ್ಕಳ ದಿನಾಚರಣೆ ಅಂಗವಾಗಿ ಕ್ರೀಡೆಗಳು ಮತ್ತು ವಿಜ್ಞಾನ ಮಾದರಿ ಪ್ರದರ್ಶನ.'
      ),
      issuedBy: 'Physical Education Dept',
    },
  ];

  const filteredNotices = notices.filter(
    (n) => filter === 'all' || n.category === filter
  );

  const handleDownloadCalendar = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Notices Column */}
          <div className="lg:col-span-8 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#0b1f44]">
                    {t('School Notice Board & Circulars', 'ಶಾಲಾ ಸೂಚನಾ ಫಲಕ ಮತ್ತು ಸುತ್ತೋಲೆಗಳು')}
                  </h3>
                  <span className="text-xs text-slate-500 font-semibold">
                    {t('Official Updates from Oxford Bukkapatna Desk', 'ಬುಕ್ಕಾಪಟ್ಟಣ ಶಾಲಾ ಆಡಳಿತ ಮಂಡಳಿಯ ಅಧಿಕೃತ ಪ್ರಕಟಣೆಗಳು')}
                  </span>
                </div>
              </div>

              {/* Filter Chips */}
              <div className="flex items-center gap-1.5 flex-wrap">
                {(['all', 'admission', 'exam', 'events'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition capitalize ${
                      filter === cat
                        ? 'bg-[#0b1f44] text-white shadow'
                        : 'bg-white text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Notice List */}
            <div className="space-y-4">
              {filteredNotices.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition flex items-start gap-4"
                >
                  <div className="bg-blue-50 text-blue-900 border border-blue-100 rounded-xl p-3 text-center min-w-[64px] shrink-0">
                    <div className="text-2xl font-black leading-none">{item.day}</div>
                    <div className="text-[10px] font-extrabold tracking-wider">{item.month}</div>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-500">
                      <span className="capitalize bg-slate-100 px-2.5 py-0.5 rounded-md">
                        📁 {item.category}
                      </span>
                      <span>•</span>
                      <span>👤 {item.issuedBy}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side Calendar Banner */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-gradient-to-br from-[#0b1f44] to-[#1e3a8a] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xs uppercase tracking-wider mb-2">
                <Calendar className="w-4 h-4" />
                <span>{t('Academic Calendar', 'ಶೈಕ್ಷಣಿಕ ವೇಳಾಪಟ್ಟಿ')}</span>
              </div>
              <h3 className="text-xl font-black mb-3">
                {t('Upcoming Highlights (2026-27)', 'ಮುಖ್ಯ ಕಾರ್ಯಕ್ರಮಗಳು')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                {t(
                  'Keep track of examinations, project submissions, and festival holidays.',
                  'ಪರೀಕ್ಷೆಗಳು ಮತ್ತು ಶಾಲಾ ರಜಾದಿನಗಳ ಸಂಪೂರ್ಣ ವಿವರ.'
                )}
              </p>

              <div className="space-y-3 mb-6 text-xs sm:text-sm">
                <div className="flex items-center justify-between bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                  <span className="font-bold text-amber-300">Oct 10 - 18</span>
                  <span className="text-slate-200">Dussera Holidays & Revision</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                  <span className="font-bold text-amber-300">Nov 01</span>
                  <span className="text-slate-200">69th Kannada Rajyotsava</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                  <span className="font-bold text-amber-300">Nov 14</span>
                  <span className="text-slate-200">Children&apos;s Day & Sports Meet</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                  <span className="font-bold text-amber-300">Dec 20</span>
                  <span className="text-slate-200">Prathibha Science Expo</span>
                </div>
              </div>

              <button
                onClick={handleDownloadCalendar}
                className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold text-sm py-3 rounded-xl shadow transition active:scale-95"
              >
                {downloaded ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-950" />
                    <span>Calendar Downloaded!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download Calendar (PDF)</span>
                  </>
                )}
              </button>
            </div>

            {/* Helpline Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-3xl p-6">
              <h4 className="font-black text-[#0b1f44] text-base mb-2">
                {t('Need Help with Bus Routes or Fees?', 'ಬಸ್ ಮಾರ್ಗ ಅಥವಾ ಶುಲ್ಕದ ಮಾಹಿತಿ ಬೇಕೇ?')}
              </h4>
              <p className="text-xs text-slate-600 mb-3">
                {t(
                  'Reach out to our Bukkapatna school helpdesk directly.',
                  'ಶಾಲಾ ಸಹಾಯವಾಣಿಗೆ ಕರೆ ಮಾಡಿ ಅಥವಾ ಭೇಟಿ ನೀಡಿ.'
                )}
              </p>
              <div className="text-base font-black text-blue-900">
                📞 08135-278214 / +91 94482 15689
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
