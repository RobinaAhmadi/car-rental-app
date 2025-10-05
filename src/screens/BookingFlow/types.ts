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

export type BookingStackParamList = {
  BookingFlow: { car: CarDetails };
  Shipping: {
    car: CarDetails;
    booking: {
      pickupLocation: string;
      dropoffLocation: string;
      pickupDate: string;  
      dropoffDate: string; 
    };
  };
};

export type ActivePicker = "pickup" | "dropoff" | null;

export type RouteParams = { car: CarDetails };