import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  current: number; // 1 = Shipping, 2 = Payment, 3 = Review
};

export default function StepHeader({ current }: Props) {
  const steps = [
    { icon: "cube-outline", label: "Shipping" },
    { icon: "card-outline", label: "Payment" },
    { icon: "checkmark-done-outline", label: "Review" },
  ];

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
      {steps.map((s, i) => {
        const active = current === i + 1;
        return (
          <View key={s.label} style={{ alignItems: "center", flex: 1 }}>
            <Ionicons
              name={s.icon as any}
              size={26}
              color={active ? "#2563EB" : "#9CA3AF"}
            />
            <Text style={{ color: active ? "#2563EB" : "#6B7280", fontSize: 12, marginTop: 4 }}>
              {s.label}
            </Text>
            {i < steps.length - 1 && (
              <View
                style={{
                  position: "absolute",
                  top: 12,
                  right: -50,
                  height: 2,
                  width: 50,
                  backgroundColor: active ? "#2563EB" : "#E5E7EB",
                }}
              />
            )}
          </View>
        );
      })}
    </View>
  );
}
