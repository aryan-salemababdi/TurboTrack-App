// /app/api/contact/route.ts (or pages/api/contact.ts)
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  email: string;
  name: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { email, name, message } = body;

    // --- Input Validation (بخش اعتبارسنجی ورودی - عالی) ---
    if (!email || !name || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // --- Nodemailer Transport (بخش اتصال به سرویس ایمیل) ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // حتماً از App Password استفاده کنید
      },
    });

    // --- Email to Company (ایمیل به شرکت) ---
    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`, // بهتر است نام فرستنده هم باشد
      to: process.env.COMPANY_EMAIL,
      subject: `New Contact Form Message from ${name}`,
      replyTo: email, // این فیلد عالی است!
      html: `... (محتوای HTML شما برای ادمین) ...`,
    };

    // --- Confirmation Email to User (ایمیل تاییدیه به کاربر) ---
    const confirmationMailOptions = {
      from: `"Your Company Name" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "We've Received Your Message",
      html: `... (محتوای HTML شما برای کاربر) ...`,
    };

    // --- Send Emails and Wait for Response (ارسال ایمیل‌ها و انتظار برای نتیجه) ---
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(confirmationMailOptions);

    // --- Return Success ONLY after emails are sent (بازگرداندن پاسخ موفقیت تنها پس از ارسال ایمیل‌ها) ---
    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully." },
      { status: 200 }
    );
    
  } catch (error) {
    console.error("API Error:", error);
    // حالا اگر خطایی در ارسال ایمیل رخ دهد، کاربر متوجه می‌شود
    return NextResponse.json(
      { error: "Failed to send the message. Please try again later." },
      { status: 500 }
    );
  }
}