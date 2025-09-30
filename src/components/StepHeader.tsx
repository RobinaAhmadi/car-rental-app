import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

type Props = { current: number; showBack?: boolean };

export default function StepHeader({ current, showBack }: Props) {
  const navigation = useNavigation<any>();
  const steps = [
    { icon: "cube-outline", label: "Shipping" },
    { icon: "card-outline", label: "Payment" },
    { icon: "checkmark-done-outline", label: "Review" },
  ];

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 16,
        paddingTop: 12,
        marginBottom: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Back button (left aligned) */}
        {showBack && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: "absolute",
              left: 0,
              padding: 8,
            }}
          >
            <Ionicons name="arrow-back" size={24} color="#111827" />
          </TouchableOpacity>
        )}

        {/* Stepper (centered) */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {steps.map((s, i) => {
            const active = current === i + 1;
            return (
              <React.Fragment key={s.label}>
                <View style={{ alignItems: "center" }}>
                  <View
                    style={{
                      backgroundColor: active ? "#2563EB" : "#E5E7EB",
                      padding: 10,
                      borderRadius: 50,
                    }}
                  >
                    <Ionicons
                      name={s.icon as any}
                      size={20}
                      color={active ? "#fff" : "#6B7280"}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 12,
                      marginTop: 4,
                      color: active ? "#2563EB" : "#6B7280",
                      fontWeight: active ? "600" : "400",
                    }}
                  >
                    {s.label}
                  </Text>
                </View>

                {i < steps.length - 1 && (
                  <View
                    style={{
                      width: 50,
                      height: 2,
                      marginHorizontal: 12,
                      backgroundColor: current > i + 1 ? "#2563EB" : "#E5E7EB",
                      alignSelf: "center",
                    }}
                  />
                )}
              </React.Fragment>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}
