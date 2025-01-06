import React, { useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Monitor, ShoppingCart, Menu, User } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { categories } from '../data/products';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center">
              <Monitor className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Pahariya Computers</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              {/* <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a> */}
              <Link to="/#services" className="text-gray-600 hover:text-blue-600">Services</Link>
              <Link to="/products" className="text-gray-600 hover:text-blue-600">Products</Link>
              <Link to="/#contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
              {/* <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a> */}
              <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
              <Link to="/login" className="text-gray-600 hover:text-blue-600">
                <User className="h-5 w-5" />
              </Link>
              <Link to="/cart" className="text-blue-600">
                <ShoppingCart className="h-5 w-5" />
              </Link>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        categories={categories}
      />
    </>
  );
}

