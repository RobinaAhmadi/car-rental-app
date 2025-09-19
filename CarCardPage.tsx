// CarCardPage.tsx
import React, { useMemo, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    StatusBar,
    FlatList,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Car = {
    id: string;
    name: string;
    type: string;
    image: string;
    rating: number;
    location: string;
    features: string[];
    price: number;
    isAvailable: boolean;
};

const mockCars: Car[] = [
    {
        id: '1',
        name: 'BMW 3 Series',
        type: 'Sedan',
        image:
            'https://images.unsplash.com/photo-1710011115877-650f805ddd6f?auto=format&fit=crop&w=1200&q=60',
        rating: 4.8,
        location: 'Downtown',
        features: ['Automatic', 'GPS', 'AC', 'Bluetooth', 'Sunroof'],
        price: 89,
        isAvailable: true,
    },
    {
        id: '2',
        name: 'Mercedes C-Class',
        type: 'Sedan',
        image:
            'https://images.unsplash.com/photo-1731142582229-e0ee70302c02?auto=format&fit=crop&w=1200&q=60',
        rating: 4.7,
        location: 'Airport',
        features: ['Automatic', 'GPS', 'AC', 'Premium Sound'],
        price: 95,
        isAvailable: false,
    },
    {
        id: '3',
        name: 'Audi A4',
        type: 'Sedan',
        image:
            'https://images.unsplash.com/photo-1748215041506-2392c951fff2?auto=format&fit=crop&w=1200&q=60',
        rating: 4.6,
        location: 'Downtown',
        features: ['Automatic', 'GPS', 'AC'],
        price: 78,
        isAvailable: true,
    },
    {
        id: '4',
        name: 'Tesla Model 3',
        type: 'Sedan',
        image:
            'https://images.unsplash.com/photo-1653047256226-5abbfa82f1d7?auto=format&fit=crop&w=1200&q=60',
        rating: 4.9,
        location: 'Midtown',
        features: ['Electric', 'Autopilot', 'Supercharging', 'Premium Interior'],
        price: 120,
        isAvailable: true,
    },
    {
        id: '5',
        name: 'Range Rover Evoque',
        type: 'SUV',
        image:
            'https://images.unsplash.com/photo-1698413935252-04ed6377296d?auto=format&fit=crop&w=1200&q=60',
        rating: 4.5,
        location: 'Uptown',
        features: ['AWD', 'GPS', 'AC', 'Leather Seats', 'Panoramic Roof'],
        price: 150,
        isAvailable: true,
    },
];

/* --------------------- Car Card --------------------- */
type CarCardProps = {
    car: Car;
    isFavorite: boolean;
    onToggleFavorite: (id: string) => void;
    onViewDetails: (id: string) => void;
};

const CarCard: React.FC<CarCardProps> = ({
                                             car,
                                             isFavorite,
                                             onToggleFavorite,
                                             onViewDetails,
                                         }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => onViewDetails(car.id)}
            style={styles.card}
        >
            <View style={styles.imageWrap}>
                <Image source={{ uri: car.image }} style={styles.image} />
                <View style={[styles.badge, car.isAvailable ? styles.badgeGreen : styles.badgeGray]}>
                    <Text style={styles.badgeText}>{car.isAvailable ? 'Available' : 'Unavailable'}</Text>
                </View>
                <TouchableOpacity
                    style={styles.favBtn}
                    onPress={() => onToggleFavorite(car.id)}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={22} color="#ef4444" />
                </TouchableOpacity>
            </View>

            <View style={styles.cardBody}>
                <View style={styles.rowBetween}>
                    <Text style={styles.carName}>{car.name}</Text>
                    <Text style={styles.carType}>{car.type}</Text>
                </View>

                <View style={styles.metaRow}>
                    <Ionicons name="star" size={16} color="#f59e0b" />
                    <Text style={styles.metaText}>{car.rating.toFixed(1)}</Text>
                    <Ionicons name="location-outline" size={16} color="#6b7280" style={{ marginLeft: 8 }} />
                    <Text style={styles.metaSubText}>{car.location}</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 6 }}>
                    {car.features.map(f => (
                        <View key={f} style={styles.featureChip}>
                            <Text style={styles.featureText}>{f}</Text>
                        </View>
                    ))}
                </ScrollView>

                <View style={styles.rowBetween}>
                    <Text style={styles.priceText}>${car.price}/day</Text>
                    <View style={styles.detailsBtn}>
                        <Text style={styles.detailsText}>View details</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

/* --------------------- Filters --------------------- */
type PriceOrder = 'Low to High' | 'High to Low';

type CarFiltersProps = {
    types: string[];
    selectedType: string;
    onTypeChange: (t: string) => void;
    selectedPriceOrder: PriceOrder;
    onPriceOrderChange: (o: PriceOrder) => void;
};

const CarFilters: React.FC<CarFiltersProps> = ({
                                                   types,
                                                   selectedType,
                                                   onTypeChange,
                                                   selectedPriceOrder,
                                                   onPriceOrderChange,
                                               }) => {
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
                {(['Low to High', 'High to Low'] as PriceOrder[]).map(option => {
                    const active = selectedPriceOrder === option;
                    return (
                        <TouchableOpacity
                            key={option}
                            onPress={() => onPriceOrderChange(option)}
                            style={[styles.segmentBtn, active && styles.segmentBtnActive]}
                        >
                            <Text style={[styles.segmentText, active && styles.segmentTextActive]}>{option}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};

/* --------------------- Page --------------------- */
const CarCardPage: React.FC = () => {
    const [cars] = useState<Car[]>(mockCars);
    const [favorites, setFavorites] = useState<string[]>(['1']);
    const [selectedType, setSelectedType] = useState<string>('All Types');
    const [selectedPriceOrder, setSelectedPriceOrder] = useState<PriceOrder>('Low to High');

    const allTypes = useMemo(() => {
        const types = Array.from(new Set(cars.map(c => c.type)));
        return ['All Types', ...types];
    }, [cars]);

    const filteredCars = useMemo(() => {
        const list = cars.filter(c => selectedType === 'All Types' || c.type === selectedType);
        list.sort((a, b) =>
            selectedPriceOrder === 'Low to High' ? a.price - b.price : b.price - a.price
        );
        return list;
    }, [cars, selectedType, selectedPriceOrder]);

    const handleToggleFavorite = (carId: string) => {
        setFavorites(prev =>
            prev.includes(carId) ? prev.filter(id => id !== carId) : [...prev, carId]
        );
    };

    const handleViewDetails = (carId: string) => {
        console.log('View details for car:', carId);
        // navigation integration goes here
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />



            {/* Filters */}
            <CarFilters
                types={allTypes}
                selectedType={selectedType}
                onTypeChange={setSelectedType}
                selectedPriceOrder={selectedPriceOrder}
                onPriceOrderChange={setSelectedPriceOrder}
            />

            {/* Results Count */}
            <View style={styles.countWrap}>
                <Text style={styles.countText}>
                    Showing {filteredCars.length} of {cars.length} cars
                </Text>
            </View>

            {/* List */}
            <FlatList
                data={filteredCars}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
                ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                renderItem={({ item }) => (
                    <CarCard
                        car={item}
                        isFavorite={favorites.includes(item.id)}
                        onToggleFavorite={handleToggleFavorite}
                        onViewDetails={handleViewDetails}
                    />
                )}
            />
        </SafeAreaView>
    );
};

export default CarCardPage;

/* --------------------- Styles --------------------- */
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8FAFC' },

    header: {
        backgroundColor: '#FFFFFF',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#E5E7EB',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    iconBtn: {
        width: 40,
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: { flex: 1, textAlign: 'center', fontSize: 18, fontWeight: '600', color: '#111827' },

    filtersWrap: { paddingHorizontal: 16, paddingTop: 12, paddingBottom: 4 },
    typeChip: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        backgroundColor: '#FFFFFF',
        marginRight: 8,
    },
    typeChipActive: {
        backgroundColor: '#111827',
        borderColor: '#111827',
    },
    typeChipText: { color: '#111827', fontWeight: '600' },
    typeChipTextActive: { color: '#FFFFFF' },

    segment: {
        flexDirection: 'row',
        backgroundColor: '#EEF2FF',
        borderRadius: 999,
        padding: 4,
        alignSelf: 'flex-start',
        marginTop: 6,
    },
    segmentBtn: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 999,
    },
    segmentBtnActive: {
        backgroundColor: '#4338CA',
    },
    segmentText: { color: '#4338CA', fontWeight: '600' },
    segmentTextActive: { color: '#FFFFFF' },

    countWrap: { paddingHorizontal: 16, paddingVertical: 8 },
    countText: { color: '#6B7280', fontSize: 13 },

    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        overflow: 'hidden',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#E5E7EB',
    },
    imageWrap: { position: 'relative' },
    image: { width: '100%', height: 160 },
    favBtn: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 999,
        padding: 6,
        elevation: 2,
    },
    badge: {
        position: 'absolute',
        top: 10,
        left: 10,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 999,
    },
    badgeGreen: { backgroundColor: '#DCFCE7' },
    badgeGray: { backgroundColor: '#E5E7EB' },
    badgeText: { color: '#065F46', fontWeight: '700', fontSize: 12 },

    cardBody: { padding: 12 },
    rowBetween: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    carName: { fontSize: 16, fontWeight: '700', color: '#0F172A', flexShrink: 1, paddingRight: 8 },
    carType: { fontSize: 12, fontWeight: '700', color: '#6B7280' },
    metaRow: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },
    metaText: { marginLeft: 4, color: '#0F172A', fontWeight: '600' },
    metaSubText: { marginLeft: 4, color: '#6B7280' },
    featureChip: {
        borderWidth: 1,
        borderColor: '#E5E7EB',
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 999,
        marginRight: 8,
        backgroundColor: '#FFFFFF',
    },
    featureText: { color: '#111827', fontSize: 12, fontWeight: '600' },
    priceText: { fontSize: 16, fontWeight: '800', color: '#111827' },
    detailsBtn: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: '#111827',
        borderRadius: 10,
    },
    detailsText: { color: '#FFFFFF', fontWeight: '700' },
});
