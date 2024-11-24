import React, { useState } from 'react';
import { fetchBookingDetails } from '../services/BookingService';
import background from '../assets/background.png';

interface BookingDetails {
 passengerName: string;
 origin: string;
 destination: string;
 date: string;
}

const BookingPage: React.FC = () => {
 const [documentNumber, setDocumentNumber] = useState('');
 const [reservationNumber, setReservationNumber] = useState('');
 const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
 const [error, setError] = useState('');

 const handleSearch = async (e: React.FormEvent) => {
   e.preventDefault();
   setError('');
   setBookingDetails(null);

   try {
     const data = await fetchBookingDetails(documentNumber, reservationNumber);
     setBookingDetails(data);
   } catch (error) {
     setError('No se encontró la reserva. Por favor, verifica los datos ingresados.');
     console.error('Error al buscar la reserva:', error);
   }
 };

 return (
   <div
     className="min-h-screen flex flex-col items-center justify-center text-white relative"
     style={{
       backgroundImage: `url(${background})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat',
     }}
   >
     <div className="absolute inset-0 bg-black/30"></div>

     {/* Content */}
     <div className="relative bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-3xl">
       {/* Header */}
       <div className="text-center mb-6">
         <h1 className="text-4xl font-bold">Gestión de Reservas</h1>
         <p className="text-blue-100">Encuentra y actualiza tu reserva</p>
       </div>

       {/* Search Form */}
       <form onSubmit={handleSearch} className="space-y-4">
         <div>
           <label className="block text-sm font-medium text-white">Número de Documento</label>
           <input
             type="text"
             value={documentNumber}
             onChange={(e) => setDocumentNumber(e.target.value)}
             placeholder="Ingresa tu número de documento"
             className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-blue-400 focus:outline-none"
             required
           />
         </div>
         <div>
           <label className="block text-sm font-medium text-white">Número de Reserva</label>
           <input
             type="text"
             value={reservationNumber}
             onChange={(e) => setReservationNumber(e.target.value)}
             placeholder="Ingresa tu número de reserva"
             className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-blue-400 focus:outline-none"
             required
           />
         </div>
         <button
           type="submit"
           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
         >
           Buscar Reserva
         </button>
       </form>

       {/* Error Message */}
       {error && (
         <div className="mt-4 p-3 bg-red-500/20 text-red-200 rounded-lg">
           {error}
         </div>
       )}

       {/* Booking Details */}
       {bookingDetails && (
         <div className="mt-6 p-4 bg-white/20 border border-white/30 rounded-xl">
           <h2 className="text-xl font-bold text-white mb-2">Detalles de la Reserva</h2>
           <p><strong>Pasajero:</strong> {bookingDetails.passengerName}</p>
           <p><strong>Origen:</strong> {bookingDetails.origin}</p>
           <p><strong>Destino:</strong> {bookingDetails.destination}</p>
           <p><strong>Fecha:</strong> {new Date(bookingDetails.date).toLocaleDateString()}</p>
         </div>
       )}
     </div>
   </div>
 );
};

export default BookingPage;