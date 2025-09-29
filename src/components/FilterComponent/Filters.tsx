import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';


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
const styles = StyleSheet.create({
    row: { flexDirection: 'row', paddingHorizontal: 16, gap: 8, marginTop: 8 },
    chip: {
        backgroundColor: 'white',
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#e6e6e6',
    },
    chipText: { fontWeight: '500' },
});