import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types";

export type CarDetailsRouteProp = RouteProp<RootStackParamList, "CarDetails">;

export type Props = {
  route: CarDetailsRouteProp;
};
