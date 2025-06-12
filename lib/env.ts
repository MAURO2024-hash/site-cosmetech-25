export const env = {
  DASHSCOPE_API_KEY: process.env.DASHSCOPE_API_KEY || "",
}
const response = await fetch("https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation",  {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY_HERE",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "qwen-max",
    prompt: "Bonjour, comment puis-je vous aider ?"
  })
});
