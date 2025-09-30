import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types";

// ✅ Strongly typed route prop for CarDetails
export type CarDetailsRouteProp = RouteProp<RootStackParamList, "CarDetails">;

// ✅ Car details model
export type CarDetails = {
  make: string;
  model: string;
  year: number;
  mileage: number;
  transmission: string;
  fuel: string;
  image: string;
  features: string[];
  price: number;
};

// ✅ Props type (optional car param allowed for fallback logic)
export type Props = {
  route: {
    params: {
      car?: CarDetails;
    };
  };
};
