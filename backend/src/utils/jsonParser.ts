export function parseAIResponse(response: string) {
  const cleaned = response
    .replace(/```json\s*/g, "")
    .replace(/```\s*/g, "")
    .trim();

  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");

  if (start === -1 || end === -1) {
    throw new Error("No JSON object found in AI response");
  }

  const json = cleaned.substring(start, end + 1);

  return JSON.parse(json);
}
