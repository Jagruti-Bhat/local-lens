import api from "./axios";
import { CreateTripDto } from "../types/trip";

export const createTrip = (body: CreateTripDto) => api.post("/trips", body);

export const getTrips = () => api.get("/trips");

export const getTrip = (id: string) => api.get(`/trips/${id}`);

export const generateTrip = (id: string) => api.post(`/trips/${id}/generate`);

export const deleteTrip = (id: string) => api.delete(`/trips/${id}`);
