import jsPDF from "jspdf";

import { Trip } from "@/types/trip";

export function downloadTripPDF(trip: Trip) {
  const pdf = new jsPDF();

  pdf.setFontSize(22);

  pdf.text(trip.destination, 20, 20);

  pdf.setFontSize(14);

  pdf.text(`Duration: ${trip.days} Days`, 20, 35);

  pdf.text(`Budget: Rs. ${trip.budget}`, 20, 45);

  let y = 65;

  trip.itinerary?.days.forEach((day) => {
    pdf.setFontSize(18);

    pdf.text(`Day ${day.day}`, 20, y);

    y += 10;

    day.activities.forEach((activity) => {
      pdf.setFontSize(12);

      pdf.text(`${activity.time} - ${activity.activity}`, 20, y);

      y += 8;
    });

    y += 10;
  });

  pdf.save(`${trip.destination}.pdf`);
}
