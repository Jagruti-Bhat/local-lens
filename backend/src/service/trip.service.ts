import tripRepo from "../repository/tripRepo";
import { CreateTripDto } from "../types/trip.types";
import { parseAIResponse } from "../utils/jsonParser";
import { buildPrompt } from "../utils/promptBuilder";
import groqService from "./groq.service";
import itineraryService from "./itinerary.service";

class TripService {
  async createTrip(body: CreateTripDto) {
    return tripRepo.create(body);
  }

  async getTrip(id: string) {
    return tripRepo.findByIdOrThrow(id);
  }

  async getTrips() {
    return tripRepo.findAll();
  }

  async deleteTrip(id: string) {
    return tripRepo.delete(id);
  }

  async generateItinerary(id: string) {
    const trip = await tripRepo.findByIdOrThrow(id);

    const itinerary = await itineraryService.generate({
      destination: trip.destination,
      days: trip.days,
      budget: trip.budget,
      interests: trip.interests,
    });

    await tripRepo.updateItinerary(id, itinerary);

    return itinerary;
  }
}

export default new TripService();
