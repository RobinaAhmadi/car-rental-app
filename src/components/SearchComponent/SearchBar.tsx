import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import searchIcon from "../../../assets/searchIcon.png"; {/* what ya problem? */}
import { styles } from "./styles";



export default function SearchBar() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.searchBox}>
                <Image source={searchIcon} style={styles.searchIcon} />
                <View style={styles.textBlock}>
                    <Text style={styles.title}>San Francisco?!?!</Text> {/* placeholder text */}
                    <Text style={styles.meta}>Sep 12 – 15 | 2025 • SUV • 4 doors ?!?!</Text> {/* placeholder text */}
                </View>
                <Pressable style={styles.editBtn} onPress={() => {}}>
                    <Text style={styles.editText}>Edit</Text>
                </Pressable>
            </View>
        </View>
    );
}

