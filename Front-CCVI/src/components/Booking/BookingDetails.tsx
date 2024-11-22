import React from "react";
import { BookingData } from "./CreateBookingForm";

interface BookingDetailsProps {
  booking: BookingData;
  flightDetails: FlightDetails;
  itineraryDetails: ItineraryDetails;
}

interface FlightDetails {
  origin: string;
  destiny: string;
  departure: string;
  arrival: string;
}

interface ItineraryDetails {
  departureTime: string;
  arrivalTime: string;
  duration: string;
}

const BookingDetails: React.FC<BookingDetailsProps> = ({
  booking,
  flightDetails,
  itineraryDetails,
}) => {
  return (
    <div>
      <h3>Booking Details:</h3>
      <p><strong>Passenger:</strong> {booking.passengerName}</p>
      <p><strong>Flight ID:</strong> {booking.flightId}</p>
      <p><strong>Seat Type:</strong> {booking.seatType}</p>
      <p><strong>Bags:</strong> {booking.bags}</p>

      <h3>Flight Details:</h3>
      <p><strong>Origin:</strong> {flightDetails.origin}</p>
      <p><strong>Destination:</strong> {flightDetails.destiny}</p>
      <p><strong>Departure:</strong> {flightDetails.departure}</p>
      <p><strong>Arrival:</strong> {flightDetails.arrival}</p>

      <h3>Itinerary Details:</h3>
      <p><strong>Departure Time:</strong> {itineraryDetails.departureTime}</p>
      <p><strong>Arrival Time:</strong> {itineraryDetails.arrivalTime}</p>
      <p><strong>Duration:</strong> {itineraryDetails.duration}</p>
    </div>
  );
};

export default BookingDetails;
