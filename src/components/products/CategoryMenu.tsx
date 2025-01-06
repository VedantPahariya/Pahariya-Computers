import React, { useState } from 'react';
import { Category } from '../../types/product';

interface CategoryMenuProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (category: string) => void;
}

export function CategoryMenu({ categories, selectedCategory, onSelectCategory }: CategoryMenuProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto">
        <ul className="flex">
          {categories.map((category) => (
            <li
              key={category.name}
              className="relative group"
              onMouseEnter={() => setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <button
                onClick={() => onSelectCategory(category.name)}
                className={`px-6 py-4 hover:text-blue-600 transition-colors ${
                  selectedCategory === category.name ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {category.name}
              </button>
              
              {/* Dropdown Menu */}
              {hoveredCategory === category.name && (
                <div className="absolute left-0 top-full w-64 bg-white shadow-lg rounded-b-lg py-4 z-50">
                  <div className="px-4 py-2 border-b">
                    <h3 className="font-semibold text-gray-900">{category.name}</h3>
                  </div>
                  <ul className="py-2">
                    {category.subcategories.map((sub) => (
                      <li key={sub}>
                        <button
                          className="w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                          onClick={() => onSelectCategory(category.name)}
                        >
                          {sub}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}