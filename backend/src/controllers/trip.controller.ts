import { Request, Response } from "express";
import tripService from "../service/trip.service";
import { successResponse } from "../utils/response";

class TripController {
  async createTrip(req: Request, res: Response) {
    const trip = await tripService.createTrip(req.body);

    return successResponse(res, 201, trip);
  }

  async getTrip(req: Request, res: Response) {
    const trip = await tripService.getTrip(req.params.id);

    return successResponse(res, 200, trip);
  }

  async getTrips(req: Request, res: Response) {
    const trip = await tripService.getTrips();

    return successResponse(res, 200, trip);
  }

  async generateItinerary(req: Request, res: Response) {
    const itinerary = await tripService.generateItinerary(req.params.id);

    return successResponse(res, 200, itinerary);
  }

  async deleteTrip(req: Request, res: Response) {
    await tripService.deleteTrip(req.params.id);

    return successResponse(res, 200, {
      message: "Trip deleted successfully",
    });
  }
}

export default new TripController();
