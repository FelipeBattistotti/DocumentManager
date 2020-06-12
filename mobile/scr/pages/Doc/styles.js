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
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    actions: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    actionUploadDoc: {
        backgroundColor: '#FF8552',
        borderRadius: 8,
        height: 50,
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },

    actionLogout: {
        borderRadius: 8,
        height: 50,
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    totalText: {
        fontSize: 15,
        color: '#737380',
        marginTop: 20,
    },

    totalTextBold: {
        fontWeight: 'bold',
    },

    docList: {
        marginTop: 15,
    },

    doc: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    docProperty: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold',
    },

    docValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButtonText: {
        color: '#FF8552',
        fontSize: 15,
        fontWeight: 'bold',
    },
});
