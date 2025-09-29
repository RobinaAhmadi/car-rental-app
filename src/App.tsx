import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import CarDetailsScreen from "./screens/CarDetails/CarDetailsScreen";
import MainPageScreen from "./screens/MainPageScreen/MainPageScreen";
import {RootStackParamList} from "./navigation/types";
import HeaderActions from "./components/HeaderActions";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="MainPage"
                screenOptions={({navigation}) => ({
                    headerTitle: "Car Rental",
                    headerBackTitleVisible: false,
                    headerRight: () => <HeaderActions navigation={navigation}/>,
                })}
            >
                <Stack.Screen name="MainPage" component={MainPageScreen} options={{title: "MainPage"}}/>
                <Stack.Screen name="CarDetails" component={CarDetailsScreen} options={{title: "Car Details"}}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
}
