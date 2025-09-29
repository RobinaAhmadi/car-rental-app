import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, ActivityIndicator, Platform, Alert } from 'react-native';
import axios from 'axios';
import SearchBar from '../../components/SearchComponent/SearchBar';
import Filters from '../../components/FilterComponent/Filters';
import LocationCard from '../../components/CarCardComponent/CarCard';
import { styles } from './styles';
import type { CarRow, CardItem } from './types';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/types';

const API_BASE =
    Platform.OS === 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000';

export default function MainScreen() {
    const [items, setItems] = useState<CardItem[]>([]);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get<CarRow[]>(`${API_BASE}/cars`);
                const mapped: CardItem[] = res.data.map((car) => ({
                    id: String(car.id),
                    title: car.name,
                    subtitle: `${car.type} • ${car.transmission}`,
                    rating: `${car.rating.toFixed(1)} ⭐`,
                    distance: car.location,
                    price: `$${car.price}`,
                    image: car.image,
                }));
                setItems(mapped);
            } catch (e: any) {
                Alert.alert('Error', e?.message ?? 'Failed to load cars');
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (loading) {
        return (
            <SafeAreaView style={styles.container}>
                <SearchBar />
                <Filters />
                <ActivityIndicator />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar />
            <Filters />
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <LocationCard
                        {...item}
                        onSelect={(id) => navigation.navigate('CarDetails', { carId: id })}
                    />
                )}
            />
        </SafeAreaView>
    );
}
