import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Message from '@/models/Message';
import { sendLeadEmail } from '@/lib/mail';

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    
    const message = await Message.create(body);
    
    // Send email notification (using same utility for now)
    await sendLeadEmail({ ...body, type: 'Message' });
    
    return NextResponse.json({ success: true, data: message }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
