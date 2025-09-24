// mocks/cars.ts
import { Car } from "../screens/CarCardPage/types";

// images: [exterior, interior]
export const mockCars: Car[] = [
  {
    id: "1",
    name: "BMW 3 Series",
    type: "Sedan",
    image: "https://images.unsplash.com/photo-1710011115877-650f805ddd6f?auto=format&fit=crop&w=1200&q=60",
    images: [
      "https://images.unsplash.com/photo-1710011115877-650f805ddd6f?auto=format&fit=crop&w=1200&q=60", // exterior
      "https://images.unsplash.com/photo-1605559424843-f6d6c4a2b6a1?auto=format&fit=crop&w=1200&q=60", // interior
    ],
    rating: 4.8,
    location: "Downtown",
    features: ["Automatic", "GPS", "AC", "Bluetooth", "Sunroof"],
    price: 89,
    isAvailable: true,
    year: 2021,
    mileage: 42000,
    fuel: "Petrol",
    transmission: "Automatic",
  },
  {
    id: "2",
    name: "Mercedes C-Class",
    type: "Sedan",
    image: "https://images.unsplash.com/photo-1731142582229-e0ee70302c02?auto=format&fit=crop&w=1200&q=60",
    images: [
      "https://images.unsplash.com/photo-1731142582229-e0ee70302c02?auto=format&fit=crop&w=1200&q=60", // exterior
      "https://images.unsplash.com/photo-1616787562934-0f5b2c1d8f3a?auto=format&fit=crop&w=1200&q=60", // interior
    ],
    rating: 4.7,
    location: "Airport",
    features: ["Automatic", "GPS", "AC", "Premium Sound"],
    price: 95,
    isAvailable: false,
    year: 2020,
    mileage: 55000,
    fuel: "Diesel",
    transmission: "Automatic",
  },
  {
    id: "3",
    name: "Audi A4",
    type: "Sedan",
    image: "https://images.unsplash.com/photo-1748215041506-2392c951fff2?auto=format&fit=crop&w=1200&q=60",
    images: [
      "https://images.unsplash.com/photo-1748215041506-2392c951fff2?auto=format&fit=crop&w=1200&q=60", // exterior
      "https://images.unsplash.com/photo-1613680025319-040e6c4c5f61?auto=format&fit=crop&w=1200&q=60", // interior
    ],
    rating: 4.6,
    location: "Downtown",
    features: ["Automatic", "GPS", "AC"],
    price: 78,
    isAvailable: true,
    year: 2019,
    mileage: 72000,
    fuel: "Petrol",
    transmission: "Manual",
  },
  {
    id: "4",
    name: "Tesla Model 3",
    type: "Sedan",
    image: "https://images.unsplash.com/photo-1653047256226-5abbfa82f1d7?auto=format&fit=crop&w=1200&q=60",
    images: [
      "https://images.unsplash.com/photo-1653047256226-5abbfa82f1d7?auto=format&fit=crop&w=1200&q=60", // exterior
      "https://images.unsplash.com/photo-1609947015945-fba3f2b1e79d?auto=format&fit=crop&w=1200&q=60", // interior
    ],
    rating: 4.9,
    location: "Midtown",
    features: ["Electric", "Autopilot", "Supercharging", "Premium Interior"],
    price: 120,
    isAvailable: true,
    year: 2023,
    mileage: 15000,
    fuel: "Electric",
    transmission: "Automatic",
  },
  {
    id: "5",
    name: "Range Rover Evoque",
    type: "SUV",
    image: "https://images.unsplash.com/photo-1698413935252-04ed6377296d?auto=format&fit=crop&w=1200&q=60",
    images: [
      "https://images.unsplash.com/photo-1698413935252-04ed6377296d?auto=format&fit=crop&w=1200&q=60", // exterior
      "https://images.unsplash.com/photo-1616787562735-f0c0c7c2b3a9?auto=format&fit=crop&w=1200&q=60", // interior
    ],
    rating: 4.5,
    location: "Uptown",
    features: ["AWD", "GPS", "AC", "Leather Seats", "Panoramic Roof"],
    price: 150,
    isAvailable: true,
    year: 2022,
    mileage: 30000,
    fuel: "Diesel",
    transmission: "Automatic",
  },
];
