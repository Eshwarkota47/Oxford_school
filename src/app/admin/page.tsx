'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Users,
  Search,
  Filter,
  Download,
  Printer,
  Trash2,
  CheckCircle2,
  Clock,
  Bus,
  RefreshCw,
  Plus,
  Lock,
  ArrowLeft,
  FileSpreadsheet,
  Phone,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

interface AdmissionRecord {
  id: string;
  token: string;
  studentName: string;
  gender: string;
  dob: string;
  grade: string;
  parentName: string;
  phone: string;
  village: string;
  busRequired: string;
  prevSchool?: string;
  status: 'Pending' | 'Approved' | 'Verified' | 'Fee Paid' | 'Rejected';
  createdAt: string;
  notes?: string;
}

export default function AdminDashboardPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState('');

  const [records, setRecords] = useState<AdmissionRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const [sheetsModalOpen, setSheetsModalOpen] = useState(false);
  const [newAdmissionOpen, setNewAdmissionOpen] = useState(false);

  // New admission form state
  const [newForm, setNewForm] = useState({
    studentName: '',
    gender: 'Male',
    dob: '',
    grade: 'Class 1',
    parentName: '',
    phone: '',
    village: 'Bukkapatna',
    busRequired: 'No',
    prevSchool: '',
    notes: 'Walk-in Registration',
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '8214' || pin === 'oxford2026' || pin === 'admin') {
      setAuthenticated(true);
      setPinError('');
      fetchRecords();
    } else {
      setPinError('Incorrect PIN. (Default PIN: 8214 or oxford2026)');
    }
  };

  const fetchRecords = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admissions');
      const data = await res.json();
      if (data.success) {
        setRecords(data.data);
      }
    } catch (err) {
      console.error('Failed fetching admissions:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authenticated) {
      fetchRecords();
    }
  }, [authenticated]);

  const handleStatusChange = async (id: string, newStatus: AdmissionRecord['status']) => {
    try {
      const res = await fetch('/api/admissions', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        setRecords(records.map((r) => (r.id === id ? { ...r, status: newStatus } : r)));
      }
    } catch (err) {
      alert('Failed updating status');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this admission record?')) return;
    try {
      const res = await fetch(`/api/admissions?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setRecords(records.filter((r) => r.id !== id));
      }
    } catch (err) {
      alert('Failed deleting record');
    }
  };

  const handleCreateWalkin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = 'OEMS-' + Math.floor(100000 + Math.random() * 900000);
      const res = await fetch('/api/admissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newForm, token }),
      });
      const data = await res.json();
      if (data.success) {
        setRecords([data.data, ...records]);
        setNewAdmissionOpen(false);
        setNewForm({
          studentName: '',
          gender: 'Male',
          dob: '',
          grade: 'Class 1',
          parentName: '',
          phone: '',
          village: 'Bukkapatna',
          busRequired: 'No',
          prevSchool: '',
          notes: 'Walk-in Registration',
        });
        alert(`Application created successfully! Token: ${data.data.token}`);
      }
    } catch (err) {
      alert('Failed creating admission');
    }
  };

  // Export to CSV Function
  const exportToCSV = () => {
    if (records.length === 0) {
      alert('No records to export');
      return;
    }

    const headers = [
      'Token',
      'Student Name',
      'Gender',
      'DOB',
      'Grade',
      'Parent / Guardian',
      'Phone Number',
      'Village / Location',
      'School Bus',
      'Previous School',
      'Status',
      'Submission Date',
      'Notes',
    ];

    const rows = records.map((r) => [
      `"${r.token}"`,
      `"${r.studentName}"`,
      `"${r.gender}"`,
      `"${r.dob || '-'}"`,
      `"${r.grade}"`,
      `"${r.parentName}"`,
      `"${r.phone}"`,
      `"${r.village}"`,
      `"${r.busRequired}"`,
      `"${r.prevSchool || '-'}"`,
      `"${r.status}"`,
      `"${new Date(r.createdAt).toLocaleDateString('en-IN')}"`,
      `"${r.notes || '-'}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Oxford_School_Admissions_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredRecords = records.filter((r) => {
    const matchesSearch =
      r.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.token.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.phone.includes(searchTerm) ||
      r.village.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.parentName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesGrade = selectedGrade === 'all' || r.grade.toLowerCase().includes(selectedGrade.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || r.status.toLowerCase() === selectedStatus.toLowerCase();

    return matchesSearch && matchesGrade && matchesStatus;
  });

  const totalCount = records.length;
  const pendingCount = records.filter((r) => r.status === 'Pending').length;
  const approvedCount = records.filter((r) => r.status === 'Approved' || r.status === 'Fee Paid').length;
  const busCount = records.filter((r) => r.busRequired.toLowerCase().includes('yes')).length;

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[#0b1f44] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-white/20 text-center">
          <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-[#0b1f44]" />
          </div>
          <h2 className="text-2xl font-black text-[#0b1f44] mb-1">Staff & Principal Portal</h2>
          <p className="text-xs text-slate-500 mb-6">
            Enter your 4-digit Administrator PIN to view and manage student admission applications.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              autoFocus
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter PIN (Default: 8214)"
              className="w-full text-center tracking-widest text-xl font-bold px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
            {pinError && <p className="text-xs text-rose-600 font-bold">{pinError}</p>}

            <button
              type="submit"
              className="w-full bg-[#0b1f44] hover:bg-[#1a448c] text-white font-extrabold py-3.5 rounded-xl shadow transition"
            >
              Unlock Admission Database 🔓
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-blue-700 font-bold hover:underline">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to School Website</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col">
      {/* Top Header */}
      <header className="bg-[#0b1f44] text-white py-4 px-4 sm:px-8 border-b border-white/10 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center font-black">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-black leading-tight">
                Oxford English Medium School — Admission Desk
              </h1>
              <span className="text-[11px] text-amber-300 font-bold">
                Bukkapatna - 572115 • Academic Year 2026-2027
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setNewAdmissionOpen(true)}
              className="flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl shadow transition hover:scale-105 active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>New Walk-in</span>
            </button>

            <button
              onClick={exportToCSV}
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow transition"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={() => setSheetsModalOpen(true)}
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-3 py-2 rounded-xl border border-white/20 transition"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">Google Sheets</span>
            </button>

            <Link
              href="/"
              className="flex items-center gap-1 text-xs text-slate-300 hover:text-white bg-white/10 px-3 py-2 rounded-xl transition"
            >
              <span>Exit</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-6 flex-1 w-full space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 block">Total Applications</span>
              <strong className="text-2xl font-black text-[#0b1f44]">{totalCount}</strong>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 block">Pending Verification</span>
              <strong className="text-2xl font-black text-amber-700">{pendingCount}</strong>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 block">Approved / Enrolled</span>
              <strong className="text-2xl font-black text-emerald-700">{approvedCount}</strong>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
              <Bus className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-500 block">Bus Seat Requisitions</span>
              <strong className="text-2xl font-black text-indigo-700">{busCount}</strong>
            </div>
          </div>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-3 justify-between items-stretch md:items-center">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by student name, token (OEMS-...), parent phone, village..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700">
              <Filter className="w-3.5 h-3.5 text-slate-500" />
              <span>Grade:</span>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="bg-transparent focus:outline-none font-bold"
              >
                <option value="all">All Classes</option>
                <option value="Nursery">Nursery / KG</option>
                <option value="Class 1">Class 1st</option>
                <option value="Class 2">Class 2nd</option>
                <option value="Class 3">Class 3rd</option>
                <option value="Class 4">Class 4th</option>
                <option value="Class 5">Class 5th</option>
                <option value="Class 6">Class 6th</option>
                <option value="Class 7">Class 7th</option>
                <option value="Class 8">Class 8th</option>
                <option value="Class 9">Class 9th</option>
                <option value="Class 10">Class 10th (SSLC)</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700">
              <span>Status:</span>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="bg-transparent focus:outline-none font-bold"
              >
                <option value="all">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Fee Paid">Fee Paid</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            <button
              onClick={fetchRecords}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
              title="Refresh records"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Records Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-extrabold text-[11px] uppercase tracking-wider">
                  <th className="p-4">Token & Date</th>
                  <th className="p-4">Student Info</th>
                  <th className="p-4">Grade</th>
                  <th className="p-4">Parent & Contact</th>
                  <th className="p-4">Village / Bus</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredRecords.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-slate-400 font-semibold">
                      No admission records match your search query.
                    </td>
                  </tr>
                ) : (
                  filteredRecords.map((r) => (
                    <tr key={r.id} className="hover:bg-slate-50/80 transition">
                      <td className="p-4">
                        <span className="font-black text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100 block w-fit mb-1">
                          {r.token}
                        </span>
                        <span className="text-[10px] text-slate-400 block">
                          {new Date(r.createdAt).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      </td>

                      <td className="p-4">
                        <strong className="font-bold text-slate-900 block text-sm">{r.studentName}</strong>
                        <span className="text-xs text-slate-500">
                          {r.gender} • DOB: {r.dob || 'N/A'}
                        </span>
                      </td>

                      <td className="p-4">
                        <span className="font-black text-[#0b1f44] bg-slate-100 px-2.5 py-1 rounded-md">
                          {r.grade}
                        </span>
                      </td>

                      <td className="p-4">
                        <span className="font-semibold text-slate-800 block">{r.parentName}</span>
                        <a
                          href={`tel:+91${r.phone}`}
                          className="text-xs text-blue-700 hover:underline flex items-center gap-1 font-bold mt-0.5"
                        >
                          <Phone className="w-3 h-3" />
                          <span>+91 {r.phone}</span>
                        </a>
                      </td>

                      <td className="p-4">
                        <span className="font-bold text-slate-700 block">📍 {r.village}</span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full inline-block mt-0.5 ${
                            r.busRequired.toLowerCase().includes('yes')
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          Bus: {r.busRequired}
                        </span>
                      </td>

                      <td className="p-4">
                        <select
                          value={r.status}
                          onChange={(e) => handleStatusChange(r.id, e.target.value as any)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-black border focus:outline-none ${
                            r.status === 'Approved'
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                              : r.status === 'Fee Paid'
                              ? 'bg-blue-50 text-blue-800 border-blue-200'
                              : r.status === 'Rejected'
                              ? 'bg-rose-50 text-rose-800 border-rose-200'
                              : 'bg-amber-50 text-amber-800 border-amber-200'
                          }`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Approved">Approved</option>
                          <option value="Verified">Verified</option>
                          <option value="Fee Paid">Fee Paid</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>

                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <a
                            href={`https://wa.me/91${r.phone}?text=Hello%20${encodeURIComponent(
                              r.parentName
                            )},%20Greetings%20from%20Oxford%20English%20Medium%20School,%20Bukkapatna.%20Your%20admission%20token%20for%20${encodeURIComponent(
                              r.studentName
                            )}%20(${encodeURIComponent(r.grade)})%20is%20${r.token}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg transition"
                            title="WhatsApp Parent"
                          >
                            <MessageSquare className="w-4 h-4" />
                          </a>

                          <button
                            onClick={() => window.print()}
                            className="p-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition"
                            title="Print Slip"
                          >
                            <Printer className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => handleDelete(r.id)}
                            className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg transition"
                            title="Delete Record"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Google Sheets Sync Integration Guide Modal */}
      {sheetsModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-6 h-6 text-emerald-600" />
                <h3 className="text-xl font-black text-[#0b1f44]">Sync Live to Google Sheets</h3>
              </div>
              <button
                onClick={() => setSheetsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕ Close
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
              You can connect any Google Spreadsheet to automatically receive every new admission submission as a row in real-time.
            </p>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs font-mono space-y-2 mb-4">
              <div className="font-bold text-slate-700">Setup Instructions:</div>
              <ol className="list-decimal pl-5 space-y-1 text-slate-600 font-sans text-xs">
                <li>Create a new Google Sheet named <strong>Oxford School Admissions 2026-27</strong>.</li>
                <li>Go to <strong>Extensions $\rightarrow$ Apps Script</strong>.</li>
                <li>Paste the script below and click <strong>Deploy $\rightarrow$ Web App</strong>.</li>
                <li>Set Access to <strong>Anyone</strong> and copy the Web App URL.</li>
                <li>Add it to Vercel Environment Variables as <code className="bg-slate-200 px-1.5 py-0.5 rounded text-blue-900 font-mono">GOOGLE_SHEETS_WEBHOOK_URL</code>.</li>
              </ol>
            </div>

            <div className="bg-slate-900 text-emerald-400 p-4 rounded-xl text-[11px] font-mono overflow-x-auto mb-5 max-h-40">
              <pre>{`function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(),
    data.token,
    data.studentName,
    data.grade,
    data.parentName,
    data.phone,
    data.village,
    data.busRequired
  ]);
  return ContentService.createTextOutput("Success");
}`}</pre>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setSheetsModalOpen(false)}
                className="bg-[#0b1f44] text-white font-bold text-xs px-5 py-2.5 rounded-xl"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Walk-In Admission Modal */}
      {newAdmissionOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-100">
              <h3 className="text-lg font-black text-[#0b1f44]">Add New Walk-In Admission</h3>
              <button
                onClick={() => setNewAdmissionOpen(false)}
                className="text-slate-400 hover:text-slate-600 font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateWalkin} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Student Full Name *</label>
                <input
                  type="text"
                  required
                  value={newForm.studentName}
                  onChange={(e) => setNewForm({ ...newForm, studentName: e.target.value })}
                  placeholder="e.g. Ramesh K"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Gender</label>
                  <select
                    value={newForm.gender}
                    onChange={(e) => setNewForm({ ...newForm, gender: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Grade Seeking *</label>
                  <select
                    value={newForm.grade}
                    onChange={(e) => setNewForm({ ...newForm, grade: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold"
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

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Parent Name *</label>
                  <input
                    type="text"
                    required
                    value={newForm.parentName}
                    onChange={(e) => setNewForm({ ...newForm, parentName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={newForm.phone}
                    onChange={(e) => setNewForm({ ...newForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Village / Town</label>
                  <input
                    type="text"
                    value={newForm.village}
                    onChange={(e) => setNewForm({ ...newForm, village: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Bus Transport</label>
                  <select
                    value={newForm.busRequired}
                    onChange={(e) => setNewForm({ ...newForm, busRequired: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold"
                  >
                    <option value="No">No, Self Commute</option>
                    <option value="Yes">Yes, Require Bus</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0b1f44] hover:bg-[#1a448c] text-white font-extrabold text-sm py-3 rounded-xl shadow transition mt-2"
              >
                Save & Generate Token 📄
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
