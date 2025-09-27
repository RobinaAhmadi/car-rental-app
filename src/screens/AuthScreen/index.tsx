import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import LoginSignupGuest from "../LoginSignupGuest";
import { RootStackParamList } from "../../navigation/types";
import { api } from "../../services/api";

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
        try {
          setLoading(true);
          const user = await api.login({ email, password });
          console.log("User logged in:", user);
          await delay(400);
          navigation.navigate("CarList");
        } catch (err) {
          const error = err as Error;
          console.error("Login error:", error.message);
          alert(error.message);
        } finally {
          setLoading(false);
        }
      }}
      onSignup={async (data) => {
        try {
          setLoading(true);
          const newUser = await api.signup(data);
          console.log("User created:", newUser);
          await delay(600);
          navigation.navigate("CarList");
        } catch (err) {
          const error = err as Error;
          console.error("Signup error:", error.message);
          alert(error.message);
        } finally {
          setLoading(false);
        }
      }}
      onContinueAsGuest={() => navigation.navigate("CarList")}
    />
  );
}
