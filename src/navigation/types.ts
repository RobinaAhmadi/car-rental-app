import { CarDetails } from "../screens/CarDetails/types";
import { NavigatorScreenParams } from "@react-navigation/native";
import { BookingStackParamList } from "../screens/Booking/BookingStack";

// ✅ Root navigator types
export type RootStackParamList = {
  Auth: undefined;
  CarList: undefined;
  CarDetails: { car: CarDetails };
  BookingStack: NavigatorScreenParams<BookingStackParamList>; // nested booking flow
  BookingConfirmation?: undefined; // optional (remove later if unused)
};
