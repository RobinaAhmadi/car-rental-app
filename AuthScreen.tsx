// AuthScreen.tsx
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./App";
import LoginSignupGuest from "./LoginSignupGuest";

type Nav = NativeStackNavigationProp<RootStackParamList, "Auth">;

export default function AuthScreen() {
  const navigation = useNavigation<Nav>();
  const [loading, setLoading] = useState(false);

  const delay = (ms: number) => new Promise(r => setTimeout(r, ms));

  return (
      <LoginSignupGuest
          brandName="CarRental"
          subtitle="Your journey starts here"
          isLoading={loading}
          onLogin={async ({ email, password }) => {
            setLoading(true);
            await delay(400);
            setLoading(false);
            navigation.navigate("CarList"); // brug navigate (så back virker)
          }}
          onSignup={async (data) => {
            setLoading(true);
            await delay(600);
            setLoading(false);
            navigation.navigate("CarList");
          }}
          onContinueAsGuest={() => navigation.navigate("CarList")}
      />
  );
}
