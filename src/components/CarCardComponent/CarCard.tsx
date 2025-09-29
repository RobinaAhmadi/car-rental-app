import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { styles } from './styles';
import { CarCardProps}  from "./types";


export default function LocationCard({ title, rating, distance, price, image }: CarCardProps) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} resizeMode="cover" />
            <View style={styles.info}>
                <View style={styles.rowTop}>
                    <Text style={styles.brand}>{title}</Text>
                    <View style={styles.ratingDistance}>
                        <Text style={styles.smallText}>{rating}</Text>
                        <Text style={[styles.smallText, { marginLeft: 12 }]}>{distance}</Text>
                    </View>
                </View>
                <View style={styles.rowBottom}>
                    <View>
                        <Text style={styles.price}>{price}</Text>
                        <Text style={styles.perNight}>/ night</Text>
                    </View>
                    <Pressable style={styles.selectBtn} onPress={() => {}}>
                        <Text style={{ color: 'white', fontWeight: '600' }}>Select</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
