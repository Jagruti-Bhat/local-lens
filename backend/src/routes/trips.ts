import { Router } from "express";
import tripController from "../controllers/trip.controller";
import validate from "../middleware/validate";
import { createTripSchema } from "../validations/trip.validation";
import asyncHandler from "../utils/asyncHandler";

const tripRoute = Router();

tripRoute.post(
  "/",
  validate(createTripSchema),
  asyncHandler(tripController.createTrip),
);

tripRoute.get("/", asyncHandler(tripController.getTrips));

tripRoute.get("/:id", asyncHandler(tripController.getTrip));

tripRoute.post("/:id/generate", asyncHandler(tripController.generateItinerary));

tripRoute.delete("/:id", asyncHandler(tripController.deleteTrip));

export default tripRoute;
