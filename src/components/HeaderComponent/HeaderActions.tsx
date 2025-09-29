
import React from "react";
import {Pressable, View} from "react-native";
import {Ionicons} from "@expo/vector-icons"; {/*https://ionic.io/ionicons*/}
import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../../navigation/types";

{ /* uses icons from /*https://ionic.io/ionicons */ }


// Brug den generelle NavigationProp for at undgå union-konflikter
type Nav = NavigationProp<RootStackParamList>;

export default function HeaderActions({navigation}: { navigation: Nav }) {
    return (
        <View style={{flexDirection: "row", gap: 16, marginRight: 4}}>
            <Pressable
                onPress={() => navigation.navigate("MainPage")}
                accessibilityLabel="Go to Home"
                hitSlop={10}
            >
                <Ionicons name="home-outline" size={22}/>
            </Pressable>
            <Pressable
                onPress={() => navigation.navigate("MainPage")}
                accessibilityLabel="Go to Car"
                hitSlop={10}
            >
                <Ionicons name="car-sport-outline" size={22}/>
            </Pressable>
            <Pressable
                onPress={() => navigation.navigate("MainPage")}
                accessibilityLabel="Menu"
                hitSlop={10}
            >
                <Ionicons name="menu-outline" size={22} />
            </Pressable>
            {/* Car icon */}
        </View>
    );
}
