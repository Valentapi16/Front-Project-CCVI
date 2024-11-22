import React, { useState } from "react";

interface BookingFormProps {
  onSubmit: (data: BookingData) => void;
}

export interface BookingData {
  flightId: string;
  passengerName: string;
  passengerType: string;
  seatType: string;
  bags: number;
}

const CreateBookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<BookingData>({
    flightId: "",
    passengerName: "",
    passengerType: "",
    seatType: "",
    bags: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a New Booking</h2>
      <div>
        <label>Flight ID:</label>
        <input
          type="text"
          name="flightId"
          value={formData.flightId}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Passenger Name:</label>
        <input
          type="text"
          name="passengerName"
          value={formData.passengerName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Passenger Type:</label>
        <select
          name="passengerType"
          value={formData.passengerType}
          onChange={handleChange}
          required
        >
          <option value="">Select Type</option>
          <option value="adult">Adult</option>
          <option value="child">Child</option>
        </select>
      </div>
      <div>
        <label>Seat Type:</label>
        <select
          name="seatType"
          value={formData.seatType}
          onChange={handleChange}
          required
        >
          <option value="">Select Seat</option>
          <option value="economy">Economy</option>
          <option value="business">Business</option>
        </select>
      </div>
      <div>
        <label>Bags:</label>
        <input
          type="number"
          name="bags"
          value={formData.bags}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Create Booking</button>
    </form>
  );
};

export default CreateBookingForm;
