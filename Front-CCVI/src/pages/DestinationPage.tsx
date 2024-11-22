import React from 'react';
import destinationImage1 from '../assets/bogota.jpg';
import destinationImage2 from '../assets/brasil.jpg';
import destinationImage3 from '../assets/medellin.jpg';
import destinationImage4 from '../assets/chile.jpg';
import destinationImage5 from '../assets/cali.jpg';
import destinationImage6 from '../assets/argentina.jpg';
import { useNavigate } from 'react-router-dom';

const DestinationsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleReservation = (destination: string) => {
    // Redirige al formulario de búsqueda de vuelos con el destino seleccionado
    navigate(`/flights?destination=${destination}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Explore Our Destinations</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Destino 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={destinationImage1} alt="Bogota" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Bogotá</h2>
              <p className="text-gray-600 mt-2">Explore the beauty of this wonderful destination.</p>
              <button
                onClick={() => handleReservation('Bogota')}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
              >
                Book Now
              </button>
            </div>
          </div>
          
          {/* Destino 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={destinationImage2} alt="Brasil" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">São Paulo</h2>
              <p className="text-gray-600 mt-2">A dream destination for your next adventure.</p>
              <button
                onClick={() => handleReservation('São Paulo')}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
              >
                Book Now
              </button>
            </div>
          </div>
          
          {/* Destino 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={destinationImage3} alt="Medellin" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Medellin</h2>
              <p className="text-gray-600 mt-2">Unforgettable moments await at this destination.</p>
              <button
                onClick={() => handleReservation('Medellin')}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
              >
                Book Now
              </button>
            </div>
          </div>
          {/* Destino 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={destinationImage4} alt="Brasil" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Santiago de Chile</h2>
              <p className="text-gray-600 mt-2">A dream destination for your next adventure.</p>
              <button
                onClick={() => handleReservation('Santiago de Chile')}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Destino 5 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={destinationImage5} alt="Brasil" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Cali</h2>
              <p className="text-gray-600 mt-2">A dream destination for your next adventure.</p>
              <button
                onClick={() => handleReservation('Cali')}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Destino 6 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={destinationImage6} alt="Brasil" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Buenos Aires</h2>
              <p className="text-gray-600 mt-2">A dream destination for your next adventure.</p>
              <button
                onClick={() => handleReservation('Buenos Aires')}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
              >
                Book Now
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;
