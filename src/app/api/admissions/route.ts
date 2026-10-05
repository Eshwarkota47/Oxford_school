import { NextResponse } from 'next/server';

export interface AdmissionRecord {
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

// In-memory persistent array for the server runtime
let globalAdmissions: AdmissionRecord[] = [
  {
    id: 'demo-1',
    token: 'OEMS-371197',
    studentName: 'Eshwar BN',
    gender: 'Male',
    dob: '2015-05-12',
    grade: 'Class 6',
    parentName: 'Nagaraju B',
    phone: '9448215689',
    village: 'Bukkapatna',
    busRequired: 'No',
    prevSchool: 'Oxford Primary',
    status: 'Pending',
    createdAt: new Date().toISOString(),
    notes: 'Direct online application',
  },
  {
    id: 'demo-2',
    token: 'OEMS-582914',
    studentName: 'Pooja K.',
    gender: 'Female',
    dob: '2014-08-20',
    grade: 'Class 7',
    parentName: 'Kumaraswamy',
    phone: '9845078214',
    village: 'Tavarekere',
    busRequired: 'Yes',
    prevSchool: 'Govt School Tavarekere',
    status: 'Approved',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    notes: 'Bus route: Tavarekere Route 2',
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    count: globalAdmissions.length,
    data: globalAdmissions,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const token = body.token || 'OEMS-' + Math.floor(100000 + Math.random() * 900000);
    const newRecord: AdmissionRecord = {
      id: 'adm-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
      token,
      studentName: body.studentName || 'Student',
      gender: body.gender || 'Male',
      dob: body.dob || '',
      grade: body.grade || 'Class 1',
      parentName: body.parentName || '',
      phone: body.phone || '',
      village: body.village || 'Bukkapatna',
      busRequired: body.busRequired || 'No',
      prevSchool: body.prevSchool || '',
      status: 'Pending',
      createdAt: new Date().toISOString(),
      notes: body.notes || 'Submitted via Online Portal',
    };

    // Save to server collection
    globalAdmissions.unshift(newRecord);

    // If a Google Sheets Webhook URL is configured in env, forward it
    const googleSheetWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (googleSheetWebhookUrl) {
      try {
        await fetch(googleSheetWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newRecord),
        });
      } catch (err) {
        console.error('Failed forwarding to Google Sheet Webhook:', err);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Admission registered successfully',
      data: newRecord,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to submit admission' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status, notes } = body;

    const record = globalAdmissions.find((r) => r.id === id);
    if (!record) {
      return NextResponse.json({ success: false, error: 'Record not found' }, { status: 404 });
    }

    if (status) record.status = status;
    if (notes !== undefined) record.notes = notes;

    return NextResponse.json({ success: true, data: record });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'ID required' }, { status: 400 });
    }

    globalAdmissions = globalAdmissions.filter((r) => r.id !== id);
    return NextResponse.json({ success: true, message: 'Deleted successfully' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}
