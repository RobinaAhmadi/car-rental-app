import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';


export default function SearchBar() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.searchBox}>
                <View style={styles.iconPlaceholder} />
                <View style={styles.textBlock}>
                    <Text style={styles.title}>San Francisco</Text>
                    <Text style={styles.meta}>Sep 12 – 15 | 2025 • SUV • 4 doors</Text>
                </View>
                <Pressable style={styles.editBtn} onPress={() => {}}>
                    <Text style={styles.editText}>Edit</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: { padding: 16, backgroundColor: 'white' },
    searchBox: {
        backgroundColor: '#f0f2f5',
        height: 64,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    iconPlaceholder: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#cfd6e6',
        marginRight: 12,
    },
    textBlock: { flex: 1 },
    title: { fontWeight: '600', fontSize: 16 },
    meta: { color: '#828282', marginTop: 4 },
    editBtn: { padding: 8 },
    editText: { color: '#0554ca', fontWeight: '600' },
});