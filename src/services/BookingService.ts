import axios from 'axios';

export const fetchBookingDetails = async (documentNumber: string, reservationNumber: string) => {
  const response = await axios.get(`/api/bookings`, {
    params: { documentNumber, reservationNumber },
  });
  return response.data;
};