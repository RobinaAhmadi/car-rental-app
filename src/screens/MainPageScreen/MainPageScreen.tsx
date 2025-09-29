import React from 'react';
import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import SearchBar from "../../components/SearchComponent/SearchBar";
import Filters from '../../components/FilterComponent/Filters';
import LocationCard from '../../components/CarCardComponent/CarCard';
import { styles } from './styles';

export default function MainScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <SearchBar />
            <Filters />
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => <LocationCard {...item} />}
            />
        </SafeAreaView>
    );
}


{/*need douglas data */}

const DATA = [ //mock
    {
        id: '1',
        title: 'San Francisco',
        subtitle: 'SUV • 4 doors',
        rating: '4.8 (500 sucky reviews)',
        distance: '1.2 miles',
        price: '$123',
        image: require('../../../assets/car1.png'),

    },
    {
        id: '2',
        title: 'Mercedes',
        subtitle: 'SUV • 4 doors',
        rating: '4.7 (800 happy reviews)',
        distance: '1.5 km',
        price: '£456',
        image: require('../../../assets/car2.png'),

    },
];