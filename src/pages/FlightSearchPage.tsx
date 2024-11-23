import React from 'react';
import FlightSearchForm from '../components/FlightSearchForm'; // Asegúrate de importar el formulario de búsqueda
import background from '../assets/booking-bg.jpg'; // Asegúrate de importar la imagen correctamente

const FlightSearchPage: React.FC = () => {
  const handleSearch = (searchParams: {
    origin: string;
    destination: string;
    departureDate: string;
    returnDate: string;
    passengers: number;
    priceRange: { min: number; max: number };
    durationRange: { min: number; max: number };
  }) => {
    // Aquí puedes manejar la búsqueda con los parámetros recibidos
    console.log('Buscando vuelos con estos parámetros:', searchParams);
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Fondo de la página */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${background})`, // Usamos la imagen importada
        }}
      ></div>

      {/* Contenido de la página */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 bg-black/50">
        <FlightSearchForm onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default FlightSearchPage;
