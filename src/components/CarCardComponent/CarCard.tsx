
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { styles } from './styles';
import type { CarCardProps } from './types';

export default function LocationCard({ id, title, rating, distance, price, image, onSelect }: CarCardProps) {
    const src = typeof image === 'string' ? { uri: image } : image;

    return (
        <View style={styles.card}>
            <Image source={src} style={styles.image} resizeMode="cover" />
            <View style={styles.info}>
                <View style={styles.rowTop}>
                    <Text style={styles.brand} numberOfLines={1}>{title}</Text>
                    <View style={styles.ratingDistance}>
                        {!!rating && <Text style={styles.smallText}>{rating}</Text>}
                        {!!distance && <Text style={[styles.smallText, { marginLeft: 12 }]}>{distance}</Text>}
                    </View>
                </View>

                <View style={styles.rowBottom}>
                    <View>
                        <Text style={styles.price}>{price}</Text>
                        <Text style={styles.perNight}>/ night</Text>
                    </View>

                    <Pressable style={styles.selectBtn} onPress={() => onSelect?.(id)}>
                        <Text style={{ color: 'white', fontWeight: '600' }}>Select</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
