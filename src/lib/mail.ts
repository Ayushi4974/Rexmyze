import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendLeadEmail = async (data: any) => {
  const isMessage = data.type === 'Message';
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'ayushithanki77@gmail.com',
    subject: isMessage ? `New Inquiry: ${data.name}` : `New Lead: ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #2563eb;">${isMessage ? 'New Website Inquiry' : 'New Lead Registration'}</h2>
        <div style="background: #f3f4f6; padding: 20px; rounded: 10px; border-left: 4px solid #2563eb;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email || 'N/A'}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          ${!isMessage ? `<p><strong>Course:</strong> ${data.course || 'Not specified'}</p>` : ''}
          ${isMessage ? `<p><strong>Message:</strong> ${data.message || 'No message provided'}</p>` : ''}
          ${data.center ? `<p><strong>Center:</strong> ${data.center}</p>` : ''}
        </div>
        <p style="font-size: 12px; color: #666; margin-top: 20px;">
          Captured from Rexmyze Academy website.
        </p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};
