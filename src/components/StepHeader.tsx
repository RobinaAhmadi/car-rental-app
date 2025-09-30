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
          marginBottom: 24,
          paddingHorizontal: 16,
        }}
      >
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
                    size={22}
                    color={active ? "#fff" : "#6B7280"}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    marginTop: 6,
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
    </SafeAreaView>
  );
}
