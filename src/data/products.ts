import { Product, Category } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Mechanical Keyboard',
    description: 'Premium mechanical keyboard with RGB backlight and ergonomic design for comfortable typing.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=2065',
    category: 'Computer Accessories',
    stockCount: 25,
  },
  {
    id: 2,
    name: 'Gaming Mouse',
    description: 'High-precision gaming mouse with adjustable DPI and programmable buttons.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=1767',
    category: 'Computer Accessories',
    stockCount: 42,
  },
  {
    id: 3,
    name: 'Smart LED Bulb',
    description: 'WiFi-enabled smart LED bulb with millions of colors and voice control support.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1550418290-a8d86ad674a6?auto=format&fit=crop&q=80&w=1770',
    category: 'Lighting',
    stockCount: 100,
  },
  {
    id: 4,
    name: 'Electric Kettle',
    description: 'Fast-heating electric kettle with temperature control and keep-warm function.',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1594213114663-d94db9b17612?auto=format&fit=crop&q=80&w=1769',
    category: 'Kitchen Appliances',
    stockCount: 30,
  },
  {
    id: 5,
    name: 'Portable Heater',
    description: 'Energy-efficient portable heater with multiple heat settings and safety features.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1613274554329-70f997f5789f?auto=format&fit=crop&q=80&w=1774',
    category: 'Heating and Cooling',
    stockCount: 15,
  },
  {
    id: 6,
    name: 'Bluetooth Speaker',
    description: 'Waterproof Bluetooth speaker with 360-degree sound and 20-hour battery life.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=1770',
    category: 'Audio Equipment',
    stockCount: 50,
  },
];

export const categories: Category[] = [
  {
    name: 'Computer Accessories',
    subcategories: ['Keyboard', 'Mouse', 'Desktop', 'PC']
  },
  {
    name: 'Lighting',
    subcategories: ['LED Bulbs', 'Table Lamps', 'Smart Lighting']
  },
  {
    name: 'Kitchen Appliances',
    subcategories: ['Pressure Cooker', 'Stove', 'Electric Kettle']
  },
  {
    name: 'Heating and Cooling',
    subcategories: ['Heaters', 'Geysers', 'Coolers']
  },
  {
    name: 'Audio Equipment',
    subcategories: ['Speakers', 'Headphones', 'Sound Systems']
  }
];