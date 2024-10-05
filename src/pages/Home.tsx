import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaStar,
  FaUsers,
  FaShoppingCart,
  FaRecycle,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import shopImage from '../assets/shop.jpg';

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' }> = ({ children, variant = 'primary', ...props }) => (
  <button
    {...props}
    className={`px-6 py-2 font-semibold rounded-full transition-all duration-200 ease-in-out ${
      variant === 'primary'
        ? 'bg-blue-500 text-white hover:bg-blue-600'
        : 'bg-white bg-opacity-20 text-blue-500 hover:bg-opacity-30 backdrop-blur-md'
    }`}
  >
    {children}
  </button>
);

const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode; color: string }> = ({ title, value, icon, color }) => (
  <div className={`p-6 rounded-lg ${color} text-white flex flex-col items-center justify-center`}>
    <div className="text-4xl mb-2">{icon}</div>
    <div className="text-2xl font-bold mb-1">{value}</div>
    <div className="text-sm">{title}</div>
  </div>
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <FaRecycle className="text-blue-500 text-3xl mr-2" />
          <span className="text-2xl font-bold text-blue-500">GetSeconda</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/login">
            <Button variant="secondary">Login</Button>
          </Link>
          <Link to="/signup">
            <Button variant="secondary">Sign Up</Button>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl text-blue-500">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg py-4 px-6 space-y-4">
          <Link to="/login">
            <Button variant="primary" className="w-full bg-blue-500 text-white hover:bg-blue-600 rounded-lg">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="secondary" className="w-full bg-green-500 text-white hover:bg-green-600 rounded-lg">
              Sign Up
            </Button>
          </Link>
        </div>
      )}

      <main className="container mx-auto px-4 py-12 flex-grow">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">The Future of Second-Hand Shopping</h1>
          <h2 className="text-3xl text-gray-600 mb-8">with GetSeconda's Innovative Platform</h2>
          <p className="text-xl text-gray-600 mb-8">Expert tech to elevate your buying and selling experience. Let's make sustainable shopping easier.</p>
          <div className="flex justify-center space-x-4">
          <Link to="/signup">
            <Button>Get Started</Button>
            </Link>
            <Link to="https://getseconda.vercel.app">
            <Button variant="secondary">Try Demo</Button>
            </Link>
          </div>
          <div className="mt-8 flex justify-center items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
            <span className="ml-2 text-gray-600">No reviews yet</span>
          </div>
        </section>

        <section className="grid md:grid-cols-4 gap-6">
          <div className="rounded-lg overflow-hidden">
            <img src={shopImage} alt="Second-hand items" className="w-full h-full object-cover" />
          </div>
          <StatCard title="Satisfied Users" value="Social Marketplace" icon={<FaUsers />} color="bg-teal-500" />
          <div className="md:col-span-2 grid grid-cols-2 gap-6">
            <StatCard title="Get a second value" value="Monetize Clutters" icon={<FaShoppingCart />} color="bg-green-500" />
            <StatCard title="Save Time" value="Shop Easy" icon={<FaClock />} color="bg-blue-500" />
            <div className="col-span-2 bg-gray-100 rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Achieve Sustainable Shopping</h3>
              <p className="text-gray-600">Reduce waste and save money with GetSeconda</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center space-y-6">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white hover:text-gray-400"><FaFacebook size={24} /></a>
            <a href="#" className="text-white hover:text-gray-400"><FaTwitter size={24} /></a>
            <a href="#" className="text-white hover:text-gray-400"><FaInstagram size={24} /></a>
            <a href="#" className="text-white hover:text-gray-400"><FaLinkedin size={24} /></a>
          </div>
          <p className="text-gray-400">© 2024 GetSeconda. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
