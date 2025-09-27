// components/HeaderActions.tsx
import React from "react";
import { View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";

// Brug den generelle NavigationProp for at undgå union-konflikter
type Nav = NavigationProp<RootStackParamList>;

export default function HeaderActions({ navigation }: { navigation: Nav }) {
    return (
        <View style={{ flexDirection: "row", gap: 16, marginRight: 4 }}>
            <Pressable
                onPress={() => navigation.navigate("CarList")}
                accessibilityLabel="Go to Home"
                hitSlop={10}
            >
                <Ionicons name="home-outline" size={22} />
            </Pressable>

            <Pressable
                onPress={() => navigation.navigate("MyBookings")}
                accessibilityLabel="Go to My Bookings"
                hitSlop={10}
            >
                <Ionicons name="receipt-outline" size={22} />
            </Pressable>
        </View>
    );
}
