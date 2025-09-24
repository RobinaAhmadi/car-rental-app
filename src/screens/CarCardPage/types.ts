// src/screens/CarCardPage/types.ts
export type Car = {
  id: string;
  name: string;
  type: string;
  image: string;
  rating: number;
  location: string;
  features: string[];
  price: number;
  isAvailable: boolean;
  year: number;
  mileage: number;
  fuel: string;
  transmission: string;


  make: string;
  model: string;
};



export type CarCardProps = {
  car: Car;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onViewDetails: (id: string) => void;
};

export type PriceOrder = "Low to High" | "High to Low";

export type CarFiltersProps = {
  types: string[];
  selectedType: string;
  onTypeChange: (t: string) => void;
  selectedPriceOrder: PriceOrder;
  onPriceOrderChange: (o: PriceOrder) => void;
};
