import { CarDetails } from "../screens/CarDetails/types";

export type RootStackParamList = {
  Auth: undefined;
  CarList: undefined;
  CarDetails: { car: CarDetails };
  BookingStack: undefined;          // <--- new flow
  BookingConfirmation?: undefined;  // <--- keep only if you want old screen
};