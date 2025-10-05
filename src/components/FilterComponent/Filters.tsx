import React from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles"; 

export default function Filters() {
    return (
        <View style={styles.row}>
            <Pressable style={styles.chip} onPress={() => {}}>
                <Text style={styles.chipText}>Filter ▼</Text>
            </Pressable>
            <Pressable style={styles.chip} onPress={() => {}}>
                <Text style={styles.chipText}>Sort ▼</Text>
            </Pressable>
        </View>
    );
}
