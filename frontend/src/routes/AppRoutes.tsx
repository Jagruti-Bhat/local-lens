import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import CreateTrip from "../pages/CreateTrip";
import TripDetails from "../pages/TripDetails";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/create" element={<CreateTrip />} />

        <Route path="/trip/:id" element={<TripDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
