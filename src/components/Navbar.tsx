import React from 'react';
import { Menu, X, PartyPopper } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <PartyPopper className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">EventPro Rentals</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-purple-600">Home</a>
            <a href="#rentals" className="text-gray-600 hover:text-purple-600">Rentals</a>
            <a href="#services" className="text-gray-600 hover:text-purple-600">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-purple-600">Contact</a>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
              Get Quote
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-purple-600">Home</a>
            <a href="#rentals" className="block px-3 py-2 text-gray-600 hover:text-purple-600">Rentals</a>
            <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-purple-600">Services</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-purple-600">Contact</a>
            <button className="w-full text-left bg-purple-600 text-white px-3 py-2 rounded-md hover:bg-purple-700">
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}