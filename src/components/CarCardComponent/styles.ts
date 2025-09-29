import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
