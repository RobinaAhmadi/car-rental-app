import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { CarFiltersProps, PriceOrder } from "../../screens/CarCardPage/types";
import { styles } from "./styles";

export default function CarFilters({
                                       types,
                                       selectedType,
                                       onTypeChange,
                                       selectedPriceOrder,
                                       onPriceOrderChange,
                                   }: CarFiltersProps) {
    return (
        <View style={styles.filtersWrap}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 8 }}>
                {types.map(t => (
                    <TouchableOpacity
                        key={t}
                        onPress={() => onTypeChange(t)}
                        style={[styles.typeChip, selectedType === t && styles.typeChipActive]}
                    >
                        <Text style={[styles.typeChipText, selectedType === t && styles.typeChipTextActive]}>
                            {t}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={styles.segment}>
                {(["Low to High", "High to Low"] as PriceOrder[]).map(option => {
                    const active = selectedPriceOrder === option;
                    return (
                        <TouchableOpacity
                            key={option}
                            onPress={() => onPriceOrderChange(option)}
                            style={[styles.segmentBtn, active && styles.segmentBtnActive]}
                        >
                            <Text style={[styles.segmentText, active && styles.segmentTextActive]}>
                                {option}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}
