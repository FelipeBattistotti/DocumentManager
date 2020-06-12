import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

import logoImg from '../../assets/rocket2.png';
import styles from './styles';

export default function DocDetail () {
    const navigation = useNavigation();
    const route = useRoute();
    const doc = route.params.doc; // recebe o documento como parametro

    function navigateBack () {
        navigation.goBack(); // volta para a pagina de Documentos
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>    
                <Image source={logoImg} />
                
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={30} color="#FF8552" />
                </TouchableOpacity>
            </View>

            <View style={styles.doc}>
                <Text style={styles.docPropertyBold}>Documento: <Text style={styles.docProperty}>{doc.id}</Text> </Text>
                <Text style={styles.docValue}>{doc.name}</Text>
                <Text style={styles.docValue}>{doc.size} bytes </Text>

                <Text style={styles.contentProperty}>Conteúdo:</Text>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.contentValue}>{doc.content}</Text>
                </ScrollView>
            </View>
        </View>
    );
}
