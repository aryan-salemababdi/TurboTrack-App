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

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      pool: true,
      maxConnections: 5,
      maxMessages: 10,
    });

    const response = NextResponse.json(
      {
        success: true,
        message: "Your message has been received.",
      },
      { status: 200 }
    );

    setTimeout(async () => {
      try {
        const mailOptions = {
          from: process.env.GMAIL_USER,
          to: process.env.COMPANY_EMAIL,
          subject: "New Contact Form Message",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333; border-bottom: 2px solid #7d282d; padding-bottom: 10px;">
                New Contact Form Message
              </h2>
              
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #7d282d; margin-top: 0;">Sender Information:</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
              </div>
              
              <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                <h3 style="color: #7d282d; margin-top: 0;">Message:</h3>
                <p style="line-height: 1.6; white-space: pre-line;">${message}</p>
              </div>
              
              <div style="margin-top: 20px; padding: 15px; background-color: #e8f4f8; border-radius: 8px;">
                <p style="margin: 0; font-size: 12px; color: #666;">
                  This message was sent through the website contact form.
                  <br>
                  Sent on: ${new Date().toLocaleString("en-US")}
                </p>
              </div>
            </div>
          `,
          replyTo: email,
        };

        const confirmationMailOptions = {
          from: process.env.GMAIL_USER,
          to: email,
          subject: "Message Received - Thank You",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #7d282d; text-align: center;">
                Your message has been received successfully
              </h2>
              
              <p>Hello ${name},</p>
              
              <p>Thank you for contacting us. Your message has been received successfully and we will respond as soon as possible.</p>
              
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #333; margin-top: 0;">Your message summary:</h3>
                <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 5px 0;"><strong>Message:</strong></p>
                <p style="background-color: #fff; padding: 10px; border-radius: 4px; white-space: pre-line;">${message}</p>
              </div>
              
              <p style="text-align: center; color: #666; font-size: 14px;">
                Best regards,<br>
                Aryan Salemabadi
              </p>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        await transporter.sendMail(confirmationMailOptions);
      } catch (error) {
        console.error("Background email sending error:", error);
      }
    }, 0);

    return response;
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        error:
          "An error occurred while processing your message. Please try again.",
      },
      { status: 500 }
    );
  }
}