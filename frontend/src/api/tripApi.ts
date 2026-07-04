import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getTrips = () => api.get("/trips");

export const getTrip = (id: string) => api.get(`/trips/${id}`);

export const createTrip = (data: any) => api.post("/trips", data);

export const generateItinerary = (id: string) =>
  api.post(`/trips/${id}/generate`);

export const deleteTrip = (id: string) => api.delete(`/trips/${id}`);
