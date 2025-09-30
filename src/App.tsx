// App.tsx
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainPageScreen from "./screens/MainPageScreen/MainPageScreen";
import CarDetailsScreen from "./screens/CarDetails/CarDetailsScreen";
import BookingStack from "./screens/Booking/BookingStack"; // 👈 add this
import HeaderActions from "./components/HeaderComponent/HeaderActions";

import type { RootStackParamList } from "./navigation/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="MainPage"
                screenOptions={({ navigation }) => ({
                    headerTitle: "Car Rental",
                    headerBackTitleVisible: false,
                    headerRight: () => <HeaderActions navigation={navigation} />,
                })}
            >
                <Stack.Screen name="MainPage" component={MainPageScreen} options={{ title: "MainPage" }} />
                <Stack.Screen name="CarDetails" component={CarDetailsScreen} options={{ title: "Car Details" }} />

                {/* 👇 REGISTER THE NESTED STACK */}
                <Stack.Screen
                    name="BookingStack"
                    component={BookingStack}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
