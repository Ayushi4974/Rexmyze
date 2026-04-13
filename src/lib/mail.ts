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
    subject: isMessage ? `🔔 New Inquiry: ${data.name}` : `🚀 New Lead: ${data.name}`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 40px auto; background-color: #ffffff; border: 12px solid #5192CC; border-radius: 40px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
        <div style="padding: 50px 40px;">
          <!-- Logo & Header -->
          <div style="margin-bottom: 40px; text-align: center;">
             <img src="https://rexmyze.vercel.app/logo-academy.png" alt="Rexmyze Academy" style="height: 50px; width: auto; margin-bottom: 20px;">
             <h2 style="font-size: 32px; font-weight: 900; color: #1a1a1a; margin: 0; tracking-tighter: -1px;">
                New Student <span style="color: #5192CC; text-decoration: underline; text-underline-offset: 8px;">Lead</span>
             </h2>
          </div>

          <!-- Full Name Block -->
          <div style="margin-bottom: 30px;">
             <p style="font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; color: #64748b; margin-bottom: 10px; margin-left: 5px;">Full Name</p>
             <div style="background-color: #f8fafc; border-radius: 16px; padding: 20px 24px; font-size: 18px; font-weight: 700; color: #1e293b; border: 1px solid #f1f5f9;">
                ${data.name}
             </div>
          </div>

          <!-- Two Column Table for Phone & Course -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 30px;">
            <tr>
              <td width="48%" valign="top">
                <p style="font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; color: #64748b; margin-bottom: 10px; margin-left: 5px;">Phone Number</p>
                <div style="background-color: #f8fafc; border-radius: 16px; padding: 20px 24px; font-size: 16px; font-weight: 700; color: #1e293b; border: 1px solid #f1f5f9;">
                   ${data.phone}
                </div>
              </td>
              <td width="4%"></td>
              <td width="48%" valign="top">
                ${!isMessage ? `
                <p style="font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; color: #64748b; margin-bottom: 10px; margin-left: 5px;">Interested In</p>
                <div style="background-color: #f8fafc; border-radius: 16px; padding: 20px 24px; font-size: 16px; font-weight: 700; color: #5192CC; border: 1px solid #f1f5f9;">
                   ${data.course || 'SEO'}
                </div>
                ` : ''}
              </td>
            </tr>
          </table>

          ${isMessage ? `
          <div style="margin-bottom: 35px;">
             <p style="font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; color: #64748b; margin-bottom: 10px; margin-left: 5px;">Message Content</p>
             <div style="background-color: #f8fafc; border-radius: 16px; padding: 25px; font-size: 15px; font-weight: 500; color: #475569; line-height: 1.7; font-style: italic; border: 1px solid #f1f5f9;">
                "${data.message || 'No message provided'}"
             </div>
          </div>
          ` : ''}

          <!-- Footer/CTA Area -->
          <div style="margin-top: 50px; text-align: center; border-top: 2px solid #f8fafc; padding-top: 40px;">
             <div style="margin-bottom: 25px;">
                <a href="https://rexmyze-admin.vercel.app" style="background-color: #5192CC; color: #ffffff; padding: 20px 45px; text-decoration: none; border-radius: 20px; font-weight: 900; font-size: 18px; display: inline-block; box-shadow: 0 10px 25px rgba(81, 146, 204, 0.4); text-transform: uppercase; letter-spacing: 1px;">
                   Open Admin Panel
                </a>
             </div>
             <p style="font-size: 12px; color: #94a3b8; font-style: italic; letter-spacing: 0.5px;">Captured from Rexmyze Academy website • ${new Date().toLocaleDateString()}</p>
          </div>
        </div>
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
