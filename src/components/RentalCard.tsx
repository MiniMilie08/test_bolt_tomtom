import React from 'react';
import { Users } from 'lucide-react';

interface RentalCardProps {
  title: string;
  image: string;
  price: string;
  capacity: number;
}

export default function RentalCard({ title, image, price, capacity }: RentalCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <div className="mt-2 flex items-center text-gray-600">
          <Users className="h-5 w-5 mr-2" />
          <span>Up to {capacity} people</span>
        </div>
        <p className="mt-2 text-purple-600 font-bold">{price}</p>
        <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
          Book Now
        </button>
      </div>
    </div>
  );
}