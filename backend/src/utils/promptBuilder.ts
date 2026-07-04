import { TripPromptData } from "../types/trip.types";

// export function buildPrompt(trip: TripPromptData) {
//   return `
// You are an expert travel planner.

// Generate a ${trip.days}-day itinerary.

// Destination:
// ${trip.destination}

// Budget:
// ₹${trip.budget}

// Interests:
// ${trip.interests.join(", ")}

// Return ONLY a valid JSON object.

// Do NOT include:

// - Markdown
// - \`\`\`json
// - Explanations

// The response must start with { and end with }.

// {
//   "days": [
//     {
//       "day": 1,
//       "title": "",
//       "activities": []
//     }
//   ],
//   "budgetBreakdown": {
//     "flights": "",
//     "hotel": "",
//     "food": "",
//     "transport": ""
//   },
//   "tips": []
// }
// `;
// }

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

Rules:
- Do NOT include markdown
- Do NOT include \`\`\`json
- Do NOT include explanations
- Response MUST start with { and end with }
- Every activity MUST be an object.
- Do NOT return activities as strings.

Return exactly this schema:

{
  "days": [
    {
      "day": 1,
      "title": "Day title",
      "activities": [
        {
          "time": "09:00 AM",
          "activity": "Visit local market",
          "location": "Market Name",
          "cost": "₹500"
        },
        {
          "time": "12:00 PM",
          "activity": "Lunch",
          "location": "Restaurant",
          "cost": "₹700"
        }
      ]
    }
  ],
  "budgetBreakdown": {
    "flights": "₹0",
    "hotel": "₹4000",
    "food": "₹2500",
    "transport": "₹1500"
  },
  "tips": [
    "Carry cash.",
    "Wear comfortable shoes."
  ]
}
`;
}
