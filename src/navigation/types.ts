// navigation/types.ts
import { CarDetails } from "../screens/CarDetails/types";


export type RootStackParamList = {

  MainPage: undefined;
  CarDetails: { car: CarDetails } | undefined;
};
