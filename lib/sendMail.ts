import nodemailer, { Transporter } from 'nodemailer';

const transporter: Transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other email services like Outlook or a custom SMTP server
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async ({ name, email, message }: EmailData): Promise<{ success: boolean; message: string }> => {
  const mailOptions = {
    from: 'kwasi.backenddev@gmail.com',
    to: 'kwasiaddonyarkojunior@gmail.com', // Replace with your receiving email
    subject: `Ohio Excellence Awards Contact Form Submission`,
    text: `
      You have received a new contact form submission.
  
      Details:
      -----------------------
      Name: ${name}
      Email: ${email}
      Message:
      ${message}
  
      -----------------------
      Please follow up as needed.
    `,
  };

 

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Email sent successfully' };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};
