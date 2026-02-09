
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getFinancialAdvice = async (history: Message[]) => {
  try {
    const model = 'gemini-3-flash-preview';
    const contents = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    // System instruction injected into prompt context for simplicity in this helper
    const systemPrompt = "You are CBE Virtual Assistant (CBE Birr Plus). You represent the Commercial Bank of Ethiopia. You help users manage their money, explain banking terms, provide financial advice for Ethiopian entrepreneurs, and give general information about CBE services. Be polite, professional, and slightly formal. Answer in English, but use occasional Amharic greetings like 'Selam' or 'Endemn Not'.";
    
    const response = await ai.models.generateContent({
      model,
      contents: [
        { role: 'user', parts: [{ text: systemPrompt }] },
        ...contents.map(c => ({ role: c.role, parts: c.parts }))
      ],
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });

    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Selam! I'm having a little trouble connecting to my central systems. Please try again in a moment.";
  }
};
