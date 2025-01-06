export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stockCount: number;
}

export interface Category {
  name: string;
  subcategories: string[];
}

export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';