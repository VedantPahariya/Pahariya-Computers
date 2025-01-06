import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, ChevronRight, User, ShoppingBag } from 'lucide-react';
import { Category } from '../types/product';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
}

export function MobileMenu({ isOpen, onClose, categories }: MobileMenuProps) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleCategoryClick = (category: string) => {
    navigate(`/products?category=${category}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="flex justify-between items-center p-4 border-b">
        <button onClick={onClose}>
          <X className="h-6 w-6" />
        </button>
        <div className="flex-1 px-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 bg-gray-100 rounded-full"
          />
        </div>
      </div>

      <div className="overflow-y-auto h-[calc(100vh-64px)]">
        <div className="p-4">
          <Link
            to="/login"
            onClick={onClose}
            className="flex items-center gap-2 p-4 border-b"
          >
            <User className="h-5 w-5" />
            <span>Log-In/Sign-Up</span>
          </Link>

          <nav className="mt-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'All Products', path: '/products' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/#contact' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={onClose}
                className="flex items-center justify-between p-4 border-b hover:bg-gray-50"
              >
                <span className="text-lg">{item.name}</span>
                <ChevronRight className="h-5 w-5" />
              </Link>
            ))}

            <div className="mt-4 border-t pt-4">
              <h3 className="px-4 text-sm font-semibold text-gray-500 uppercase">Categories</h3>
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => handleCategoryClick(category.name)}
                  className="flex items-center justify-between w-full p-4 border-b hover:bg-gray-50"
                >
                  <span className="text-lg">{category.name}</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
              ))}
            </div>
          </nav>

          <Link
            to="/cart"
            onClick={onClose}
            className="flex items-center gap-2 p-4 border-t border-b mt-4"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="text-lg">Cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
}