import React from 'react';
import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import SearchBar from "../../components/SearchBar";
import Filters from '../../components/Filters';
import LocationCard from '../../components/LocationCard';


const DATA = [ //mock
    {
        id: '1',
        title: 'San Francisco',
        subtitle: 'SUV • 4 doors',
        rating: '4.8 (500 reviews)',
        distance: '1.2 miles',
        price: '$123',
        image: require('../../../assets/car1.png'),

    },
    {
        id: '2',
        title: 'Mercedes',
        subtitle: 'SUV • 4 doors',
        rating: '4.7 (800 reviews)',
        distance: '1.5 miles',
        price: '$178',
        image: require('../../../assets/car2.png'),

    },
];


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


const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f7' },
    list: { padding: 16, paddingTop: 8 },
});