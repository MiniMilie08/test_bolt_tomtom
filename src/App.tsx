import React from 'react';
import Navbar from './components/Navbar';
import RentalCard from './components/RentalCard';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

function App() {
  const rentals = [
    {
      title: "Elegant Wedding Tent",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800",
      price: "From $999/day",
      capacity: 200
    },
    {
      title: "Corporate Event Space",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800",
      price: "From $799/day",
      capacity: 150
    },
    {
      title: "Garden Party Setup",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800",
      price: "From $599/day",
      capacity: 100
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Make Your Event Unforgettable
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Premium event rentals for weddings, corporate events, and special occasions
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100">
              Browse Rentals
            </button>
          </div>
        </div>
      </section>

      {/* Featured Rentals */}
      <section id="rentals" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Rentals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rentals.map((rental, index) => (
              <RentalCard key={index} {...rental} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Setup & Delivery</h3>
              <p className="text-gray-600">Professional setup and delivery service for a stress-free experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Event Planning</h3>
              <p className="text-gray-600">Expert event planning assistance to make your vision come to life</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Custom Packages</h3>
              <p className="text-gray-600">Tailored rental packages to meet your specific needs and budget</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-purple-600 mr-3" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-purple-600 mr-3" />
                  <span>info@eventprorentals.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-purple-600 mr-3" />
                  <span>123 Event Street, City, State 12345</span>
                </div>
                <div className="flex space-x-4 mt-6">
                  <Facebook className="h-6 w-6 text-gray-600 hover:text-purple-600 cursor-pointer" />
                  <Instagram className="h-6 w-6 text-gray-600 hover:text-purple-600 cursor-pointer" />
                  <Twitter className="h-6 w-6 text-gray-600 hover:text-purple-600 cursor-pointer" />
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                ></textarea>
              </div>
              <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 EventPro Rentals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;