export const CATEGORIES = [
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
  ] as const;
  
  export const ORDER_STATUS = {
    PENDING: 'PENDING',
    PROCESSING: 'PROCESSING',
    SHIPPED: 'SHIPPED',
    DELIVERED: 'DELIVERED',
    CANCELLED: 'CANCELLED',
  } as const;