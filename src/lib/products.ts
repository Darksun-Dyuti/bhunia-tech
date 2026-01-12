export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory: string;
  brand: string;
  image: string;
  images: string[];
  stock: number;
  rating: number;
  reviews: number;
  specs: Record<string, string>;
  featured: boolean;
  isNew: boolean;
  onSale: boolean;
}

export const categories = [
  { id: 'laptops', name: 'Laptops', icon: 'Laptop' },
  { id: 'desktops', name: 'Desktops', icon: 'Monitor' },
  { id: 'components', name: 'Components', icon: 'Cpu' },
  { id: 'peripherals', name: 'Peripherals', icon: 'Keyboard' },
  { id: 'monitors', name: 'Monitors', icon: 'MonitorCheck' },
  { id: 'accessories', name: 'Accessories', icon: 'Headphones' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'ROG Strix Gaming Laptop',
    description: 'Experience ultimate gaming performance with the ASUS ROG Strix. Featuring the latest Intel Core i9 processor and NVIDIA RTX 4080 graphics, this laptop delivers uncompromising power for hardcore gamers.',
    price: 2499.99,
    originalPrice: 2799.99,
    category: 'laptops',
    subcategory: 'gaming',
    brand: 'ASUS',
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800',
    images: [
      'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800',
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800',
    ],
    stock: 15,
    rating: 4.8,
    reviews: 234,
    specs: {
      'Processor': 'Intel Core i9-14900HX',
      'Graphics': 'NVIDIA RTX 4080 16GB',
      'RAM': '32GB DDR5',
      'Storage': '1TB NVMe SSD',
      'Display': '16" QHD 240Hz',
    },
    featured: true,
    isNew: true,
    onSale: true,
  },
  {
    id: '2',
    name: 'Razer Blade 18 Pro',
    description: 'The ultimate thin gaming laptop. Featuring a stunning 18-inch 4K display and desktop-class performance in a sleek aluminum chassis.',
    price: 3299.99,
    category: 'laptops',
    subcategory: 'gaming',
    brand: 'Razer',
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800',
    images: [
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800',
    ],
    stock: 8,
    rating: 4.9,
    reviews: 156,
    specs: {
      'Processor': 'Intel Core i9-14900HX',
      'Graphics': 'NVIDIA RTX 4090 16GB',
      'RAM': '64GB DDR5',
      'Storage': '2TB NVMe SSD',
      'Display': '18" 4K 200Hz',
    },
    featured: true,
    isNew: true,
    onSale: false,
  },
  {
    id: '3',
    name: 'Custom Gaming Desktop RTX 4070',
    description: 'Pre-built gaming powerhouse designed for 1440p gaming excellence. RGB lighting and premium components included.',
    price: 1799.99,
    originalPrice: 1999.99,
    category: 'desktops',
    subcategory: 'gaming',
    brand: 'TechZone Custom',
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=800',
    images: [
      'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=800',
    ],
    stock: 12,
    rating: 4.7,
    reviews: 189,
    specs: {
      'Processor': 'AMD Ryzen 7 7800X3D',
      'Graphics': 'NVIDIA RTX 4070 12GB',
      'RAM': '32GB DDR5',
      'Storage': '1TB NVMe SSD',
      'Cooling': 'AIO Liquid Cooler',
    },
    featured: true,
    isNew: false,
    onSale: true,
  },
  {
    id: '4',
    name: 'NVIDIA RTX 4080 Super',
    description: 'Unlock the full potential of ray tracing and AI-powered gaming with the most powerful graphics card available.',
    price: 1199.99,
    category: 'components',
    subcategory: 'graphics-cards',
    brand: 'NVIDIA',
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800',
    images: [
      'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800',
    ],
    stock: 5,
    rating: 4.9,
    reviews: 445,
    specs: {
      'CUDA Cores': '10240',
      'Memory': '16GB GDDR6X',
      'Boost Clock': '2550 MHz',
      'TDP': '320W',
      'Ray Tracing': 'Yes',
    },
    featured: true,
    isNew: true,
    onSale: false,
  },
  {
    id: '5',
    name: 'AMD Ryzen 9 7950X3D',
    description: 'The fastest gaming CPU on the planet. 3D V-Cache technology delivers unprecedented gaming performance.',
    price: 699.99,
    originalPrice: 799.99,
    category: 'components',
    subcategory: 'processors',
    brand: 'AMD',
    image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=800',
    images: [
      'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=800',
    ],
    stock: 20,
    rating: 4.8,
    reviews: 312,
    specs: {
      'Cores': '16 Cores / 32 Threads',
      'Base Clock': '4.2 GHz',
      'Boost Clock': '5.7 GHz',
      'Cache': '144MB Total',
      'TDP': '120W',
    },
    featured: false,
    isNew: false,
    onSale: true,
  },
  {
    id: '6',
    name: 'Corsair K100 RGB Keyboard',
    description: 'Premium mechanical keyboard with Cherry MX Speed switches and per-key RGB lighting.',
    price: 229.99,
    category: 'peripherals',
    subcategory: 'keyboards',
    brand: 'Corsair',
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800',
    images: [
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800',
    ],
    stock: 30,
    rating: 4.6,
    reviews: 567,
    specs: {
      'Switch': 'Cherry MX Speed',
      'Backlighting': 'Per-key RGB',
      'Connection': 'USB-C / Wireless',
      'Macro Keys': '6 Dedicated',
      'Wrist Rest': 'Included',
    },
    featured: false,
    isNew: false,
    onSale: false,
  },
  {
    id: '7',
    name: 'Logitech G Pro X Superlight 2',
    description: 'Ultra-lightweight wireless gaming mouse with HERO 2 sensor. The choice of esports professionals.',
    price: 159.99,
    category: 'peripherals',
    subcategory: 'mice',
    brand: 'Logitech',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=800',
    images: [
      'https://images.unsplash.com/photo-1527814050087-3793815479db?w=800',
    ],
    stock: 45,
    rating: 4.9,
    reviews: 892,
    specs: {
      'Sensor': 'HERO 2 32K DPI',
      'Weight': '60g',
      'Battery': '95 Hours',
      'Connection': 'LIGHTSPEED Wireless',
      'Switches': 'Optical',
    },
    featured: true,
    isNew: true,
    onSale: false,
  },
  {
    id: '8',
    name: 'Samsung Odyssey G9 Neo',
    description: '49-inch curved gaming monitor with Mini LED technology and 240Hz refresh rate.',
    price: 1799.99,
    originalPrice: 2199.99,
    category: 'monitors',
    subcategory: 'gaming',
    brand: 'Samsung',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800',
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800',
    ],
    stock: 6,
    rating: 4.7,
    reviews: 234,
    specs: {
      'Size': '49" Curved',
      'Resolution': '5120x1440',
      'Refresh Rate': '240Hz',
      'Panel': 'Mini LED VA',
      'Response Time': '1ms',
    },
    featured: true,
    isNew: false,
    onSale: true,
  },
  {
    id: '9',
    name: 'SteelSeries Arctis Nova Pro',
    description: 'Premium wireless gaming headset with active noise cancellation and hot-swappable batteries.',
    price: 349.99,
    category: 'accessories',
    subcategory: 'headsets',
    brand: 'SteelSeries',
    image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=800',
    images: [
      'https://images.unsplash.com/photo-1599669454699-248893623440?w=800',
    ],
    stock: 25,
    rating: 4.8,
    reviews: 445,
    specs: {
      'Driver': '40mm Neodymium',
      'ANC': 'Active Noise Cancellation',
      'Battery': '22 Hours (Hot-Swap)',
      'Microphone': 'Retractable ClearCast',
      'Connection': '2.4GHz / Bluetooth',
    },
    featured: false,
    isNew: true,
    onSale: false,
  },
  {
    id: '10',
    name: 'ASUS ROG Swift OLED PG27AQDM',
    description: '27-inch OLED gaming monitor with 240Hz refresh rate and true blacks.',
    price: 999.99,
    category: 'monitors',
    subcategory: 'gaming',
    brand: 'ASUS',
    image: 'https://images.unsplash.com/photo-1616763355603-9755a640a287?w=800',
    images: [
      'https://images.unsplash.com/photo-1616763355603-9755a640a287?w=800',
    ],
    stock: 10,
    rating: 4.9,
    reviews: 178,
    specs: {
      'Size': '27" Flat',
      'Resolution': '2560x1440',
      'Refresh Rate': '240Hz',
      'Panel': 'OLED',
      'Response Time': '0.03ms',
    },
    featured: true,
    isNew: true,
    onSale: false,
  },
  {
    id: '11',
    name: 'Corsair Dominator Platinum RGB 64GB',
    description: 'Premium DDR5 memory with stunning RGB lighting and extreme performance.',
    price: 299.99,
    category: 'components',
    subcategory: 'memory',
    brand: 'Corsair',
    image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=800',
    images: [
      'https://images.unsplash.com/photo-1562976540-1502c2145186?w=800',
    ],
    stock: 35,
    rating: 4.7,
    reviews: 267,
    specs: {
      'Type': 'DDR5',
      'Capacity': '64GB (2x32GB)',
      'Speed': '6000MHz',
      'Latency': 'CL30',
      'RGB': 'Capellix LEDs',
    },
    featured: false,
    isNew: false,
    onSale: false,
  },
  {
    id: '12',
    name: 'MacBook Pro 16" M3 Max',
    description: 'Apple\'s most powerful laptop ever. M3 Max chip delivers groundbreaking performance for professionals.',
    price: 3499.99,
    category: 'laptops',
    subcategory: 'professional',
    brand: 'Apple',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
    ],
    stock: 7,
    rating: 4.9,
    reviews: 523,
    specs: {
      'Chip': 'Apple M3 Max',
      'CPU': '16-core',
      'GPU': '40-core',
      'Memory': '48GB Unified',
      'Display': '16.2" Liquid Retina XDR',
    },
    featured: true,
    isNew: true,
    onSale: false,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(p => p.isNew);
};

export const getOnSaleProducts = (): Product[] => {
  return products.filter(p => p.onSale);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowercaseQuery) ||
    p.description.toLowerCase().includes(lowercaseQuery) ||
    p.brand.toLowerCase().includes(lowercaseQuery) ||
    p.category.toLowerCase().includes(lowercaseQuery)
  );
};
