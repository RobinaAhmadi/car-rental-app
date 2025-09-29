import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';


type Props = {
    id?: string;
    title: string;
    subtitle?: string;
    rating?: string;
    distance?: string;
    price?: string;
    image: any;
};


export default function LocationCard({ title, rating, distance, price, image }: Props) {
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


const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 16,
    },
    image: { width: '100%', height: 150 },
    info: { padding: 12 },
    rowTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    brand: { fontSize: 16, fontWeight: '600' },
    ratingDistance: { flexDirection: 'row', alignItems: 'center' },
    smallText: { color: '#666' },
    rowBottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 },
    price: { fontSize: 20, fontWeight: '700' },
    perNight: { color: '#777', fontSize: 12 },
    selectBtn: { backgroundColor: '#0554ca', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 40 },
});