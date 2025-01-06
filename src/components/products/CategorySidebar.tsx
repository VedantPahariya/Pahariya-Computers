import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Category } from '../../types/product';

interface CategorySidebarProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (category: string) => void;
}

export function CategorySidebar({ categories, selectedCategory, onSelectCategory }: CategorySidebarProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Categories</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category.name} className="space-y-1">
            <button
              onClick={() => onSelectCategory(category.name)}
              className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                selectedCategory === category.name
                  ? 'bg-blue-50 text-blue-600'
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <span>{category.name}</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {category.subcategories.map((sub) => (
              <button
                key={sub}
                className="w-full text-left pl-6 py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                {sub}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}