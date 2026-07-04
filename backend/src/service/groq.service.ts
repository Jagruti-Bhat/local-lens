import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

class GroqService {
  async generate(prompt: string) {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      temperature: 0.2,

      response_format: {
        type: "json_object",
      },

      messages: [
        {
          role: "system",
          content:
            "You are a travel planning assistant. Always return a valid JSON object. Never use markdown or code fences.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return completion.choices[0].message.content!;
  }
}

export default new GroqService();
