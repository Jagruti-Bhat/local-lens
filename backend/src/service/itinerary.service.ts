import { buildPrompt } from "../utils/promptBuilder";
import { parseAIResponse } from "../utils/jsonParser";

import { Itinerary, TripPromptData } from "../types/trip.types";
import groqService from "./groq.service";

class ItineraryService {
  async generate(trip: TripPromptData): Promise<Itinerary> {
    const prompt = buildPrompt(trip);

    const aiResponse = await groqService.generate(prompt);

    const itinerary = parseAIResponse(aiResponse);

    return itinerary;
  }
}

export default new ItineraryService();
