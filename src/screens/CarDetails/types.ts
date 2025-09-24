import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types";

export type CarDetailsRouteProp = RouteProp<RootStackParamList, "CarDetails">;

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

export type Props = {
  route: {
    params: {
      car?: CarDetails;
    };
  };
};


