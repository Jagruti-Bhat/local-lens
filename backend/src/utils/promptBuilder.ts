import { TripPromptData } from "../types/trip.types";

export function buildPrompt(trip: TripPromptData) {
  return `
You are an expert travel planner.

Generate a ${trip.days}-day itinerary.

Destination:
${trip.destination}

Budget:
₹${trip.budget}

Interests:
${trip.interests.join(", ")}

Return ONLY a valid JSON object.

Do NOT include:

- Markdown
- \`\`\`json
- Explanations

The response must start with { and end with }.

{
  "days": [
    {
      "day": 1,
      "title": "",
      "activities": []
    }
  ],
  "budgetBreakdown": {
    "flights": "",
    "hotel": "",
    "food": "",
    "transport": ""
  },
  "tips": []
}
`;
}
