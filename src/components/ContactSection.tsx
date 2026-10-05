'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grade: '',
    location: '',
    message: '',
  });
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', grade: '', location: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Contact Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0b1f44] to-[#1e3a8a] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-block text-xs font-black text-amber-400 tracking-wider uppercase bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30 mb-4">
                {t('DIRECT HELPDESK', 'ಸಹಾಯವಾಣಿ')}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black mb-3">
                {t('We Are Here to Guide You', 'ನಾವು ನಿಮ್ಮ ಸೇವೆಗೆ ಸದಾ ಸಿದ್ಧ')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                {t(
                  'Have inquiries regarding admission dates, book sets, uniform sizes, or bus pickup spots? Contact our administration.',
                  'ಶಾಲಾ ಪ್ರವೇಶ, ಬಸ್ ಮಾರ್ಗಗಳು ಅಥವಾ ಶುಲ್ಕದ ಬಗೆಗಿನ ಯಾವುದೇ ಮಾಹಿತಿಗೆ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.'
                )}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Campus Address</h5>
                    <p className="text-xs text-slate-300">
                      Oxford English Medium School, Main Road, Bukkapatna - 572115, Sira Taluk, Tumakuru Dist
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Direct Phone & WhatsApp</h5>
                    <p className="text-xs text-slate-300">+91 94482 15689 / +91 98450 78214</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Email Address</h5>
                    <p className="text-xs text-slate-300">oxfordbukkapatna@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-400">
              🏛️ Recognition: Govt. of Karnataka Recognised Co-Educational English Medium Institution
            </div>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-black text-[#0b1f44] mb-2">
              {t('Send Admission Inquiry', 'ಪ್ರವೇಶ ವಿಚಾರಣೆ ಫಾರ್ಮ್')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              {t(
                'Submit your details and our admission officer will contact you within 24 hours.',
                'ನಿಮ್ಮ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ, ಶಾಲಾ ಪ್ರತಿನಿಧಿಗಳು ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತಾರೆ.'
              )}
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="text-lg font-black text-emerald-900 mb-1">
                  Inquiry Received Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-700">
                  Thank you for your interest in Oxford English Medium School, Bukkapatna. Our counselor will call you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile Number *
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
                      Grade of Interest *
                    </label>
                    <select
                      required
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="">-- Choose Standard --</option>
                      <option value="Nursery">Nursery / Pre-KG</option>
                      <option value="LKG/UKG">LKG / UKG</option>
                      <option value="Classes 1-5">Classes 1st to 5th (Primary)</option>
                      <option value="Classes 6-8">Classes 6th to 8th (Middle)</option>
                      <option value="Classes 9-10">Classes 9th to 10th (SSLC)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Village / Town *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bukkapatna / Tavarekere"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Question / Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ask about bus routes, admission timings, book lists..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#0b1f44] hover:bg-[#1a448c] text-white font-extrabold text-sm py-3.5 rounded-xl shadow transition"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>{t('Send Inquiry to Oxford School', 'ವಿಚಾರಣೆ ಕಳುಹಿಸಿ')}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
