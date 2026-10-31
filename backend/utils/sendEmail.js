import nodemailer from "nodemailer";

/**
 * Sends a notification email to Mridul Verma when someone submits the portfolio contact form.
 * 
 * Configured via environment variables in backend/.env:
 * - EMAIL_USER: e.g. mridultechno2003@gmail.com
 * - EMAIL_PASS: Google App Password (16-char token generated from Google Account Security)
 * - EMAIL_RECEIVER: target inbox where you want to receive emails (defaults to mridultechno2003@gmail.com)
 */
export async function sendContactNotification({ name, email, message }) {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const receiver = process.env.EMAIL_RECEIVER || user || "mridultechno2003@gmail.com";

  if (!user || !pass) {
    console.warn(
      "⚠️ [Mailer] EMAIL_USER or EMAIL_PASS is not configured in backend/.env. Email not sent. Please set EMAIL_USER and EMAIL_PASS to enable automatic email delivery."
    );
    return {
      sent: false,
      reason: "Missing EMAIL_USER or EMAIL_PASS in backend/.env"
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || "gmail",
      auth: {
        user,
        pass
      }
    });

    const timestamp = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Asia/Kolkata"
    });

    const mailOptions = {
      from: `"Mridul Portfolio" <${user}>`,
      to: receiver,
      replyTo: email, // Direct reply to sender
      subject: `📬 Portfolio Message from ${name}`,
      text: `You received a new message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\nDate: ${timestamp}\n\nMessage:\n${message}\n\nReply directly to this email to respond to ${name}.`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #1e293b; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
            .header { background: linear-gradient(135deg, #2563eb, #7c3aed); padding: 32px 28px; color: #ffffff; }
            .header h1 { margin: 0; font-size: 22px; font-weight: 700; }
            .header p { margin: 6px 0 0; font-size: 14px; opacity: 0.9; }
            .body { padding: 28px; }
            .field-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-bottom: 20px; }
            .field-row { display: flex; margin-bottom: 10px; font-size: 14px; }
            .field-label { font-weight: 600; width: 110px; color: #64748b; }
            .field-value { font-weight: 500; color: #0f172a; flex: 1; }
            .field-value a { color: #2563eb; text-decoration: none; font-weight: 600; }
            .message-label { font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
            .message-content { background: #ffffff; border-left: 4px solid #7c3aed; padding: 16px; border-radius: 4px 10px 10px 4px; font-size: 15px; line-height: 1.6; color: #334155; white-space: pre-wrap; background-color: #fbfbfe; }
            .btn-reply { display: inline-block; background: linear-gradient(135deg, #2563eb, #7c3aed); color: #ffffff !important; padding: 12px 24px; border-radius: 10px; font-size: 14px; font-weight: 600; text-decoration: none; margin-top: 24px; }
            .footer { padding: 20px 28px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📬 New Portfolio Inquiry</h1>
              <p>Someone sent you a message from your developer portfolio.</p>
            </div>
            <div class="body">
              <div class="field-box">
                <div class="field-row">
                  <span class="field-label">Sender Name:</span>
                  <span class="field-value">${name}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">Email Address:</span>
                  <span class="field-value"><a href="mailto:${email}">${email}</a></span>
                </div>
                <div class="field-row" style="margin-bottom: 0;">
                  <span class="field-label">Received At:</span>
                  <span class="field-value">${timestamp}</span>
                </div>
              </div>

              <div class="message-label">Message Content:</div>
              <div class="message-content">${message}</div>

              <div style="text-align: center;">
                <a href="mailto:${email}?subject=Re: Inquiry from Portfolio" class="btn-reply">
                  Reply to ${name} (${email})
                </a>
              </div>
            </div>
            <div class="footer">
              Sent automatically from Mridul Verma R's Portfolio Contact Form • Bannari Amman Institute of Technology
            </div>
          </div>
        </body>
        </html>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ [Mailer] Notification email sent successfully. Message ID:", info.messageId);
    return {
      sent: true,
      messageId: info.messageId
    };
  } catch (error) {
    console.error("❌ [Mailer] Failed to send email notification:", error.message);
    return {
      sent: false,
      error: error.message
    };
  }
}

