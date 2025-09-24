import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";


interface Props {
    features: string[];
}

export default function CarFeatures({ features }: Props) {
    if (!features.length) return null;

    return (
        <>
            <Text style={[styles.cardTitle, { marginTop: 10 }]}>Features</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 6 }}>
                {features.map((f) => (
                    <View key={f} style={styles.featureChip}>
                        <Text style={styles.featureText}>{f}</Text>
                    </View>
                ))}
            </ScrollView>
        </>
    );
}
