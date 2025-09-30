import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = { current: number };

export default function StepHeader({ current }: Props) {
  const steps = [
    { icon: "cube-outline", label: "Shipping" },
    { icon: "card-outline", label: "Payment" },
    { icon: "checkmark-done-outline", label: "Review" },
  ];

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
          paddingHorizontal: 16,
        }}
      >
        {steps.map((s, i) => {
          const active = current === i + 1;
          return (
            <React.Fragment key={s.label}>
              {/* Step */}
              <View style={{ alignItems: "center" }}>
                <Ionicons
                  name={s.icon as any}
                  size={28}
                  color={active ? "#2563EB" : "#9CA3AF"}
                />
                <Text
                  style={{
                    fontSize: 13,
                    marginTop: 6,
                    color: active ? "#2563EB" : "#6B7280",
                    fontWeight: active ? "600" : "400",
                  }}
                >
                  {s.label}
                </Text>
              </View>

              {/* Connector (only between steps) */}
              {i < steps.length - 1 && (
                <View
                  style={{
                    width: 60, // controls spacing
                    height: 2,
                    marginHorizontal: 12,
                    backgroundColor: current > i + 1 ? "#2563EB" : "#E5E7EB",
                    alignSelf: "center", // perfectly centers line
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
