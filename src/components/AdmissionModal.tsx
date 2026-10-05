'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Printer, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '@/context/LanguageContext';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({ isOpen, onClose }) => {
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [formData, setFormData] = useState({
    studentName: '',
    gender: 'Male',
    dob: '',
    grade: 'Class 1',
    parentName: '',
    phone: '',
    village: 'Bukkapatna',
    busRequired: 'Yes',
    prevSchool: '',
  });
  const { t } = useLanguage();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = 'OEMS-' + Math.floor(100000 + Math.random() * 900000);
    const dateStr = new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    const submissionPayload = {
      ...formData,
      token,
      date: dateStr,
    };

    // 1. Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {}

    // 2. Send to backend database API
    try {
      await fetch('/api/admissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionPayload),
      });
    } catch (err) {
      console.error('API submission notice:', err);
    }

    // 3. Save to localStorage backup
    try {
      const existing = JSON.parse(localStorage.getItem('oxford_admissions') || '[]');
      existing.unshift(submissionPayload);
      localStorage.setItem('oxford_admissions', JSON.stringify(existing));
    } catch {}

    setSubmittedData(submissionPayload);
  };

  const handlePrint = () => {
    window.print();
  };

  const whatsappMessage = submittedData
    ? encodeURIComponent(
        `*Oxford English Medium School Bukkapatna - Admission 2026-27*\n\n` +
          `📄 *Application Token:* ${submittedData.token}\n` +
          `👤 *Student Name:* ${submittedData.studentName} (${submittedData.gender})\n` +
          `🎓 *Grade Seeking:* ${submittedData.grade}\n` +
          `👨‍👩‍👧 *Parent/Guardian:* ${submittedData.parentName}\n` +
          `📞 *Phone:* +91 ${submittedData.phone}\n` +
          `📍 *Village/Location:* ${submittedData.village}\n` +
          `🚌 *Bus Transport:* ${submittedData.busRequired}\n` +
          `📅 *Date:* ${submittedData.date}`
      )
    : '';

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0b1f44] to-[#1e3a8a] text-white p-5 sm:p-7 flex justify-between items-center sticky top-0 z-10">
          <div>
            <span className="text-amber-400 text-[11px] sm:text-xs font-black uppercase tracking-wider block">
              {t('Admissions Open 2026-27', 'ದಾಖಲಾತಿ 2026-27')}
            </span>
            <h3 className="text-base sm:text-xl font-black">
              {t('Online Student Registration Form', 'ವಿದ್ಯಾರ್ಥಿ ನೊಂದಣಿ ಅರ್ಜಿ')}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition shrink-0"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-8">
          {submittedData ? (
            <div className="text-center py-2 sm:py-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9" />
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-[#0b1f44] mb-1">
                Application Registered & Stored!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-5 max-w-md mx-auto">
                Thank you for applying to Oxford English Medium School, Bukkapatna. Your record is saved in the school registry.
              </p>

              {/* Printable Acknowledgement Slip */}
              <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl p-4 sm:p-6 text-left mb-5 text-xs sm:text-sm space-y-2">
                <div className="flex justify-between items-center pb-2.5 border-b border-slate-200">
                  <span className="text-slate-500 font-bold">Registration Token:</span>
                  <strong className="text-base sm:text-lg font-black text-blue-700">{submittedData.token}</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Student Name:</span>
                  <strong className="text-slate-900 font-bold">{submittedData.studentName}</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Grade Seeking:</span>
                  <strong className="text-slate-900 font-bold">{submittedData.grade}</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Parent / Guardian:</span>
                  <strong className="text-slate-900 font-bold">{submittedData.parentName}</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Contact Phone:</span>
                  <strong className="text-slate-900 font-bold">+91 {submittedData.phone}</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Village / Location:</span>
                  <strong className="text-slate-900 font-bold">{submittedData.village}</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Bus Transport:</span>
                  <strong className="text-slate-900 font-bold">{submittedData.busRequired}</strong>
                </div>
                <div className="flex justify-between items-center pt-2 text-[10px] sm:text-[11px] text-slate-400 border-t border-slate-200">
                  <span>Registration Date:</span>
                  <span>{submittedData.date}</span>
                </div>
              </div>

              {/* Action Buttons: WhatsApp, Print, Close */}
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
                <a
                  href={`https://wa.me/919448215689?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1ebc59] text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow transition"
                >
                  <span>Send to School WhatsApp 💬</span>
                </a>

                <button
                  onClick={handlePrint}
                  className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow transition"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Slip</span>
                </button>

                <button
                  onClick={onClose}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs sm:text-sm text-slate-500 mb-4">
                Please enter your student details accurately. You will receive an instant application token.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Prajwal Gowda"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Gender *
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Grade / Class Seeking *
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="Nursery">Nursery / Pre-KG</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
                    <option value="Class 1">Class 1st</option>
                    <option value="Class 2">Class 2nd</option>
                    <option value="Class 3">Class 3rd</option>
                    <option value="Class 4">Class 4th</option>
                    <option value="Class 5">Class 5th</option>
                    <option value="Class 6">Class 6th</option>
                    <option value="Class 7">Class 7th</option>
                    <option value="Class 8">Class 8th</option>
                    <option value="Class 9">Class 9th</option>
                    <option value="Class 10 (SSLC)">Class 10th (SSLC)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Father / Mother / Guardian *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Basavaraju"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Primary Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9845012345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Village / Town *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bukkapatna / Tavarekere"
                    value={formData.village}
                    onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    School Bus Required? *
                  </label>
                  <select
                    value={formData.busRequired}
                    onChange={(e) => setFormData({ ...formData, busRequired: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="Yes">Yes, Require School Bus</option>
                    <option value="No">No, Self Commute in Bukkapatna</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Previous School Attended (If Any)
                </label>
                <input
                  type="text"
                  placeholder="Previous school name..."
                  value={formData.prevSchool}
                  onChange={(e) => setFormData({ ...formData, prevSchool: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-sm sm:text-base py-3.5 rounded-xl shadow-lg transition mt-4"
              >
                <Sparkles className="w-4 h-4" />
                <span>Generate Application & Token 📄</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
