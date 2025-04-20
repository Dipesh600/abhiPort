import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store the contact form submission
      const contactSubmission = await storage.saveContactSubmission(validatedData);
      
      res.status(200).json({
        success: true,
        message: "Contact form submitted successfully",
        id: contactSubmission.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors
        });
      } else {
        console.error("Error submitting contact form:", error);
        res.status(500).json({
          success: false,
          message: "Failed to submit contact form"
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
