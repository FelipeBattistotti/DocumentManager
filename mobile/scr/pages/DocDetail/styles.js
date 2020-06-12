import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create ({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#f0f0f5',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    doc: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 35,
    },

    docPropertyBold: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold',
        marginTop: 5,
    },

    docProperty: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold',
        marginTop: 24,
    },

    docValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380',
    },

    contentProperty: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold',
        marginTop:  12,
    },

    scrollView: {
        marginHorizontal: 0,
        maxHeight: 280,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#f0f0f5',
    },

    contentValue: {
        marginTop: 5,
        marginHorizontal: 2,
        fontSize: 16,
        color: '#737380',
    },
});
