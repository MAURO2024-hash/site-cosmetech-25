import { generateText } from "ai"
import { qwen } from "qwen-ai-provider"

export async function POST(req: Request) {
  const { prompt } = await req.json()

  try {
    const { text } = await generateText({
      model: qwen("qwen-plus"),
      prompt: prompt,
      system: "You are a helpful assistant that provides concise and accurate information.",
    })

    return new Response(JSON.stringify({ response: text }), {
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error generating text:", error)
    return new Response(JSON.stringify({ error: "Failed to generate response" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
