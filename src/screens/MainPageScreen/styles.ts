import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    gridContent: {
        padding: 16,
    },
    gridRow: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    cardWrap: {
        flex: 1,
        marginHorizontal: 4, // keeps equal spacing
    },
});
