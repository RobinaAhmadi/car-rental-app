import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from "./context/AuthContext";

import AuthScreen from "./screens/AuthScreen";
import BookingConfirmation from "./screens/BookingConfirmation";
import CarCardPage from "./screens/CarCardPage/CarListScreen";
import CarDetailsScreen from "./screens/CarDetails/CarDetailsScreen";
import MyBookings from "./screens/MyBooking/MyBookings";
import { RootStackParamList } from "./navigation/types";
import HeaderActions from "./components/HeaderActions";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="CarList"
                    screenOptions={({ navigation }) => ({
                        headerTitle: "Car Rental",
                        headerBackTitleVisible: false,
                        headerRight: () => <HeaderActions navigation={navigation} />,
                    })}
                >
                    <Stack.Screen name="Auth" component={AuthScreen} />
                    <Stack.Screen name="CarList" component={CarCardPage} options={{ title: "Available Cars" }} />
                    <Stack.Screen name="CarDetails" component={CarDetailsScreen} options={{ title: "Car Details" }} />
                    <Stack.Screen name="BookingConfirmation" component={BookingConfirmation} options={{ title: "Booking" }} />
                    <Stack.Screen name="MyBookings" component={MyBookings} options={{ title: "My Bookings" }} />
                </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>
    );
}
