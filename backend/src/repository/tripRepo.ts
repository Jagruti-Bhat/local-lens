import Trip from "../models/trip";
import imageService from "../service/image.service";
import { CreateTripDto } from "../types/trip.types";
import { Itinerary } from "../types/trip.types";

class TripRepository {
  async create(body: CreateTripDto) {
    const imageUrl = await imageService.getDestinationImage(body.destination);

    console.log(imageUrl);

    return Trip.create({
      ...body,

      imageUrl,
    });
  }

  async findByIdOrThrow(id: string) {
    const trip = await Trip.findByPk(id);

    if (!trip) {
      throw new Error("Trip not found");
    }

    return trip;
  }

  async updateItinerary(id: string, itinerary: Itinerary) {
    const trip = await Trip.findByPk(id);

    if (!trip) return null;

    trip.itinerary = itinerary;

    await trip.save();

    return trip;
  }

  async findAll() {
    return Trip.findAll({
      order: [["createdAt", "DESC"]],
    });
  }

  async delete(id: string) {
    const trip = await this.findByIdOrThrow(id);

    await trip.destroy();

    return;
  }
}

export default new TripRepository();
