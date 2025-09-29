import React from "react";
import { View, Text, Image, Pressable } from "react-native";
// @ts-ignore
import searchIcon from "../../../assets/searchIcon.png";
import { styles } from "./styles";

export default function SearchBar() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.searchBox}>
                <Image source={searchIcon} style={styles.searchIcon} />
                <View style={styles.textBlock}>
                    <Text style={styles.title}>San Francisco?!?!</Text>
                    <Text style={styles.meta}>Sep 12 – 15 | 2025 • SUV • 4 doors ?!?!</Text>
                </View>
                <Pressable style={styles.editBtn} onPress={() => {}}>
                    <Text style={styles.editText}>Edit</Text>
                </Pressable>
            </View>
        </View>
    );
}
