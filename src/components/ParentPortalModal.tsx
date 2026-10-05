'use client';

import React, { useState } from 'react';
import { X, Lock, User, CheckCircle2, FileText, Calendar } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface ParentPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ParentPortalModal: React.FC<ParentPortalModalProps> = ({ isOpen, onClose }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [studentId, setStudentId] = useState('OEMS-2026');
  const [dob, setDob] = useState('2015-05-12');
  const { t } = useLanguage();

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-200">
        <div className="bg-gradient-to-r from-[#0b1f44] to-[#1e3a8a] text-white p-6 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-amber-400" />
            <h3 className="text-base sm:text-lg font-black">
              {t('Oxford Parent & Student Portal', 'ಪೋಷಕರ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿ ಪೋರ್ಟಲ್')}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {loggedIn ? (
            <div>
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black text-lg">
                  P
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Prajwal B.</h4>
                  <span className="text-xs text-slate-500 font-semibold">
                    Class 8th &apos;A&apos; • Roll No: 18 • Bus Route: Tavarekere
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center">
                  <span className="text-xs font-bold text-emerald-800 block">Attendance</span>
                  <strong className="text-2xl font-black text-emerald-900">96.8%</strong>
                  <span className="text-[10px] text-emerald-700 block">Present This Term</span>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-center">
                  <span className="text-xs font-bold text-blue-800 block">Last Test Grade</span>
                  <strong className="text-2xl font-black text-blue-900">A+ (92%)</strong>
                  <span className="text-[10px] text-blue-700 block">Mid-Term Assessment</span>
                </div>
              </div>

              <div className="space-y-3 mb-6 text-xs">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                  <span className="font-semibold text-slate-700">📖 Science Homework:</span>
                  <span className="text-emerald-700 font-bold">Completed ✓</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                  <span className="font-semibold text-slate-700">💳 Term 2 Fee Status:</span>
                  <span className="text-emerald-700 font-bold">Paid in Full ✓</span>
                </div>
              </div>

              <button
                onClick={() => setLoggedIn(false)}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-3 rounded-xl transition"
              >
                Log Out
              </button>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <p className="text-xs text-slate-500 mb-2">
                Enter your registered Student Admission ID and Date of Birth to view attendance, marks & homework diaries.
              </p>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Student Admission ID / Register No
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    placeholder="e.g. OEMS-2026"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Student Date of Birth (Password)
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="date"
                    required
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#0b1f44] hover:bg-[#1a448c] text-white font-extrabold text-sm py-3 rounded-xl shadow transition mt-2"
              >
                <span>Login to Parent Portal 🔐</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
