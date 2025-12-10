
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { studentName, variant, score, total, answers } = body;

        // Use environment variables for configuration, fallback to a mock sender if not present
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com', // Default to gmail
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_USER || '"Test System" <no-reply@test.com>',
            to: 'tselmegict@gmail.com',
            subject: `Test Result: ${studentName} - Variant ${variant}`,
            text: `
        Student Name: ${studentName}
        Variant: ${variant}
        Score: ${score} / ${total}
        
        Detailed Answers:
        ${JSON.stringify(answers, null, 2)}
      `,
            html: `
        <h1>Test Result</h1>
        <p><strong>Student Name:</strong> ${studentName}</p>
        <p><strong>Variant:</strong> ${variant}</p>
        <p><strong>Score:</strong> ${score} / ${total} (${Math.round((score / total) * 100)}%)</p>
        <hr />
        <h3>Details</h3>
        <pre>${JSON.stringify(answers, null, 2)}</pre>
      `,
        };

        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.log('---------------------------------------------------');
            console.log('⚠️  NO EMAIL CREDENTIALS CONFIGURED');
            console.log('Subject:', mailOptions.subject);
            console.log('To:', mailOptions.to);
            console.log('Body:', mailOptions.text);
            console.log('---------------------------------------------------');
            return NextResponse.json({ message: 'Mock email sent (check server console)', success: true });
        }

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully', success: true });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send email', error: String(error) }, { status: 500 });
    }
}
