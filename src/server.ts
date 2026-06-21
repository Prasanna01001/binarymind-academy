import express, { Request, Response } from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is not defined. AI Mentor responses will be mock simulated.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey || "MOCK_KEY",
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  app.use(express.json());

  const PORT = 3000;

  app.get("/api/health", (req: Request, res: Response) => {
    res.json({ status: "ok", mode: process.env.NODE_ENV, hasApiKey: !!apiKey });
  });

  app.post("/api/mentor", async (req: Request, res: Response) => {
    try {
      const { messages, conceptHint, action } = req.body;

      if (!apiKey) {
        let simulatedText = "Greetings, Operative. I am your **BinaryMind AI Mentor**.\n\n*Note: GEMINI_API_KEY is missing from environment. Showing premium simulated guidance:*\n\n";
        
        if (action === "quiz") {
          simulatedText += "### Cyber Security Challenge\n\n**Q: Which port scan type is known as 'half-open' scanning?**\n- A) TCP Connect Scan\n- B) SYN Scan\n- C) UDP Scan\n- D) NULL Scan\n\n*Submit your selected answer to analyze secure packet structures!*";
        } else if (conceptHint) {
          simulatedText += `Regarding your concept **${conceptHint}**:\n\n1. **Theoretical Blueprint**: In computer systems and security, understanding this mechanism helps isolate lateral infection routes.\n2. **Ethical Defense**: Deploying defensive sanitation and security-headers (like CSP or parameterized logic) prevents rogue exploitation.\n3. **Practical Tip**: Audit terminal privileges regularly using chmod numeric flags. Let me know if you would like me to detail code snippets!`;
        } else {
          simulatedText += "Connect a valid Gemini API Key in AI Studio secrets to enable real-time deep adaptive learning queries, vulnerability scanning reviews, code reviews, and customizable interactive terminal quizzes!";
        }
        
        res.json({ text: simulatedText });
        return;
      }

      const client = getAiClient();
      
      let systemInstruction = "You are BinaryMind, an elite cybersecurity and computer science personal tutor. " +
        "You always speak with advanced, technical authority, yet encourage and support the learning process. " +
        "Use subtle cyberpunk themes (e.g. referencing student as 'Operative' or 'System Learner'). " +
        "Always structure your answers nicely with lists, tables, bold code segments, and headers. " +
        "Never supply actionable real-world exploit scripts, malware, or backdoors. Instead, focus strictly on theoretical vulnerabilities, " +
        "safe simulated testing, real-world mitigation frameworks, secure coding patterns, and defensive configuration guidelines.";

      if (action === "quiz") {
        systemInstruction += " Generate a challenging 4-choice multiple-choice question on computer science or network security. Include an educational description of why the correct option is secure.";
      }

      let prompt = "Explain clearly or reply appropriately to this learning query.";
      if (conceptHint) {
        prompt += ` Provide a brief explanation of: ${conceptHint} with high-level theory, code examples, defense, and real-world impact.`;
      }

      if (messages && messages.length > 0) {
        const lastMsg = messages[messages.length - 1].content;
        prompt += `\n\nConversation history:\n${messages.map((m: any) => `${m.role === 'user' ? 'Student' : 'Mentor'}: ${m.content}`).join("\n")}\n\nLatest Student Query: ${lastMsg}`;
      }

      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: error.message || "Internal server error" });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`BinaryMind Academy server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();