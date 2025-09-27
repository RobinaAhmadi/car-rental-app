// screens/CarDetails/types.ts
export type CarFeature =
    | "Seats"
    | "Hybrid"
    | "AirCondition"
    | "CarPlay"
    | "Bluetooth"
    | "Radio";

export type CarDetails = {
  id: string;
  name: string;
  pricePerDay: number;
  images: string[];
  features: CarFeature[];
  specs: {
    transmission: "Automatic" | "Manual";
    fuel: "Petrol" | "Diesel" | "Hybrid" | "Electric";
    doors: number;
    luggage: number;
    mpg?: number;
    horsepower?: number;
  };
};
