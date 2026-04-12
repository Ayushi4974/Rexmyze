import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Lead from '@/models/Lead';
import { sendLeadEmail } from '@/lib/mail';

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    
    const lead = await Lead.create(body);
    
    // Send email notification
    await sendLeadEmail(body);
    
    return NextResponse.json({ success: true, data: lead }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
