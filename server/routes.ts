import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      res.json({ 
        success: true, 
        message: "Ihre Nachricht wurde erfolgreich übermittelt. Wir melden uns in Kürze bei Ihnen.",
        id: submission.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Bitte überprüfen Sie Ihre Eingaben.",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut." 
        });
      }
    }
  });

  // Download sponsor materials (PDF)
  app.get("/api/sponsor-materials", (req, res) => {
    try {
      // In a real implementation, this would serve an actual PDF file
      // For now, we'll create a simple response indicating the download would happen
      res.json({
        success: true,
        message: "Download wird vorbereitet...",
        downloadUrl: "/downloads/dahsc-2026-sponsorenmappe.pdf"
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Download konnte nicht gestartet werden. Bitte versuchen Sie es später erneut." 
      });
    }
  });

  // Download team information (PDF)
  app.get("/api/team-info", (req, res) => {
    try {
      res.json({
        success: true,
        message: "Download wird vorbereitet...",
        downloadUrl: "/downloads/dahsc-2026-team-infos.pdf"
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Download konnte nicht gestartet werden. Bitte versuchen Sie es später erneut." 
      });
    }
  });

  // Get contact submissions (for admin purposes)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Fehler beim Laden der Kontaktanfragen." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
