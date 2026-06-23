import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, phone, requirement } = body;

    // Here you would typically send an email using a service like Resend, SendGrid, or Nodemailer.
    // For demonstration, we just log it and return success.
    console.log('Received contact form submission:', { name, company, phone, requirement });

    // Mock delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: 'Message received' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
