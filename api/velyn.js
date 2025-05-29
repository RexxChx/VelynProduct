import Groq from "groq-sdk";

const client = new Groq({ apiKey: "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" });

async function VelynChat(prompt) {
  const chatCompletion = await client.chat.completions.create({
    model: "meta-llama/llama-4-scout-17b-16e-instruct",
    messages: [
      {
        role: "system",
        content: "Kamu adalah Velyn Alexandria, AI bahasa Indonesia dengan gaya bergaul dan santai."
      },
      {
        role: "user",
        content: prompt
      }
    ]
  });

  return chatCompletion.choices?.[0]?.message?.content || "Maaf, tidak ada jawaban yang tersedia.";
}