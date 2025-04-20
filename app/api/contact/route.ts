import { NextResponse } from 'next/server';
import { z } from 'zod';
import { storage } from '@/lib/storage';

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);
    
    // Store the contact form submission
    const contactSubmission = await storage.saveContactSubmission(validatedData);
    
    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
      id: contactSubmission.id
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: "Validation error",
        errors: error.errors
      }, { status: 400 });
    } else {
      console.error("Error submitting contact form:", error);
      return NextResponse.json({
        success: false,
        message: "Failed to submit contact form"
      }, { status: 500 });
    }
  }
} 