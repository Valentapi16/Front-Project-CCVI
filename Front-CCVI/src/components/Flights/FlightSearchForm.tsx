import React, { useState } from 'react';

interface FlightSearchFormProps {
  onSearch: (searchParams: {
    origin: string;
    destination: string;
    departureDate: string;
    returnDate: string;
    passengers: number;
    priceRange: { min: number; max: number };
    durationRange: { min: number; max: number };
  }) => void;
}

const FlightSearchForm: React.FC<FlightSearchFormProps> = ({ onSearch }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [durationRange, setDurationRange] = useState({ min: 0, max: 24 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      origin,
      destination,
      departureDate,
      returnDate,
      passengers,
      priceRange,
      durationRange,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-center">Buscar Vuelo</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Origen</label>
          <input
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ej. Bogotá"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Destino</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ej. Medellín"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Fecha de salida</label>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Fecha de regreso</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Número de pasajeros</label>
          <input
            type="number"
            value={passengers}
            onChange={(e) => setPassengers(parseInt(e.target.value))}
            min="1"
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Rango de precio</label>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange.max}
              onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
              className="w-full"
            />
            <div className="flex justify-between text-sm">
              <span>0</span>
              <span>{priceRange.max}</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Rango de duración (hrs)</label>
            <input
              type="range"
              min="0"
              max="24"
              value={durationRange.max}
              onChange={(e) => setDurationRange({ ...durationRange, max: parseInt(e.target.value) })}
              className="w-full"
            />
            <div className="flex justify-between text-sm">
              <span>0</span>
              <span>{durationRange.max}</span>
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Buscar vuelos
      </button>
    </form>
  );
};

export default FlightSearchForm;
