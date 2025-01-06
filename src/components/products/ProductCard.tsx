import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export function ProductCard({ product, onOpenModal }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            product.stockCount > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {product.stockCount > 0 ? `In Stock (${product.stockCount})` : 'Out of Stock'}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">${product.price}</span>
          <div className="flex gap-2">
            <button
              onClick={() => onOpenModal(product)}
              className="px-3 py-2 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
            >
              Details
            </button>
            <button
              disabled={product.stockCount === 0}
              className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="text-sm">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}