import React from "react";
import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types";

type Nav = NavigationProp<RootStackParamList>;

export default function HeaderActions({ navigation }: { navigation: Nav }) {
    return (
        <View style={{ flexDirection: "row", gap: 16, marginRight: 4 }}>
            <Pressable onPress={() => navigation.navigate("MainPage")} hitSlop={10} accessibilityLabel="Go to Home">
                <Ionicons name="home-outline" size={22} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("MainPage")} hitSlop={10} accessibilityLabel="Go to Car">
                <Ionicons name="car-sport-outline" size={22} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("MainPage")} hitSlop={10} accessibilityLabel="Menu">
                <Ionicons name="menu-outline" size={22} />
            </Pressable>
        </View>
    );
}
