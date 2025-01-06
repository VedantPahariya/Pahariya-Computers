import React from 'react';
import { X } from 'lucide-react';
import { Product } from '../../types/product';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Description</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Details</h3>
                <ul className="mt-2 space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium">{product.category}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Stock:</span>
                    <span className="font-medium">{product.stockCount} units</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-bold text-blue-600">${product.price}</span>
                  </li>
                </ul>
              </div>
              
              <button
                disabled={product.stockCount === 0}
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed mt-6"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}