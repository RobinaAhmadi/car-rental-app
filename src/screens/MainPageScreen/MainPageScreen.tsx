import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    FlatList,
    ActivityIndicator,
    Alert,
    View,
} from 'react-native';
import SearchBar from '../../components/SearchComponent/SearchBar';
import Filters from '../../components/FilterComponent/Filters';
import LocationCard from '../../components/CarCardComponent/CarCard';
import { styles } from './styles';
import type { CarRow, CardItem } from './types';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/types';

import { apiClient, API_ENDPOINTS } from '../../services/ApiClient';

export default function MainScreen() {
    const [items, setItems] = useState<CardItem[]>([]);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    useEffect(() => {
        (async () => {
            try {
                const res = await apiClient.get<CarRow[]>(API_ENDPOINTS.cars.list);
                const mapped: CardItem[] = res.data.map((car: CarRow) => ({
                    id: String(car.id),
                    title: car.name,
                    subtitle: `${car.type} • ${car.transmission}`,
                    rating: `${car.rating.toFixed(1)} `,
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
                numColumns={2} // << makes it symmetric grid
                contentContainerStyle={styles.gridContent}
                columnWrapperStyle={styles.gridRow}
                renderItem={({ item }) => (
                    <View style={styles.cardWrap}>
                        <LocationCard
                            {...item}
                            onSelect={(id) =>
                                navigation.navigate('CarDetails', { carId: id })
                            }
                        />
                    </View>
                )}
            />
        </SafeAreaView>
    );
}
