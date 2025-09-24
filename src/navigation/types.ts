
import { CarDetails } from "../screens/CarDetails/types";

export type RootStackParamList = {
  Auth: undefined;
  CarList: undefined;
  CarDetails: { car: CarDetails };
  BookingConfirmation: undefined;
};
