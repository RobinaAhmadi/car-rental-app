import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    typeChipActive: { backgroundColor: '#111827', borderColor: '#111827' },
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
    segmentBtn: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 999 },
    segmentBtnActive: { backgroundColor: '#4338CA' },
    segmentText: { color: '#4338CA', fontWeight: '600' },
    segmentTextActive: { color: '#FFFFFF' },
});
