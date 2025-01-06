import React from 'react';
import { Search } from 'lucide-react';
import { SortOption } from '../../types/product';

interface SearchSortProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
}

export function SearchSort({
  searchQuery,
  onSearchChange,
  sortOption,
  onSortChange,
}: SearchSortProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      
      <select
        value={sortOption}
        onChange={(e) => onSortChange(e.target.value as SortOption)}
        className="px-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
      </select>
    </div>
  );
}