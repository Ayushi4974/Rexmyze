import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Lead from '@/models/Lead';
import Message from '@/models/Message';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const password = searchParams.get('password');

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    const leads = await Lead.find({}).sort({ createdAt: -1 });
    const messages = await Message.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, leads, messages });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
