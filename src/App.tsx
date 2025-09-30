import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "./context/AuthContext";

import AuthScreen from "./screens/AuthScreen";
import CarCardPage from "./screens/CarCardPage/CarListScreen";
import CarDetailsScreen from "./screens/CarDetails/CarDetailsScreen";
import BookingStack from "./screens/Booking/BookingStack"; // Booking flow
import { RootStackParamList } from "./navigation/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen
            name="CarList"
            component={CarCardPage}
            options={{ title: "Available Cars" }}
          />
          <Stack.Screen
            name="CarDetails"
            component={CarDetailsScreen}
            options={{ title: "Car Details" }}
          />

          {/* ✅ New booking flow */}
          <Stack.Screen
            name="BookingStack"
            component={BookingStack}
            options={{ headerShown: false }}
          />

          {/* ❌ Old flow (remove later if not needed) */}
          {/* <Stack.Screen
            name="BookingConfirmation"
            component={BookingConfirmation}
            options={{ title: "Booking" }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
