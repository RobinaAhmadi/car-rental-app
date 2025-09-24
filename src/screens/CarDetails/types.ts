import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types";

export type CarDetailsRouteProp = RouteProp<RootStackParamList, "CarDetails">;

export type Props = {
  route: CarDetailsRouteProp;
};

// Hvis du vil have ekstra felter som fuel/transmission osv.:
export type Car = {
  make: string;
  model: string;
  year: number;
  mileage: number;
  price: number;
  image: string;
  fuel?: string;
  transmission?: string;
};
