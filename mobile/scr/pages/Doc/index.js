import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity, AsyncStorage, ToastAndroid } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

import api from '../../services/api';
import logoImg from '../../assets/rocket.png';
import styles from './styles';

export default function Doc () {
    const navigation = useNavigation();
    const route = useRoute();
    const [docs, setDocs] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const userId = route.params.userId; // recebe o userId como parametro

    async function loadDocs () {

        if (loading) {
            return;
        }

        if (total > 0 && docs.length === total) {
            return;
        }

        setLoading(true);

        const response = await api.get('doc', {
            params: { page },
            headers: {
                Authorization: userId,
            }
        });

        setDocs([ ... docs, ... response.data ]);
        setTotal(response.headers['x-total-count']);

        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadDocs ();
    }, [userId]);

    function navigateToDetail (doc) {
        navigation.navigate('DocDetail', { doc }); // ao selecionar os detalhes de um doc, navega para a pagina de Detalhes
    }

    function logout () {
        AsyncStorage.clear();
        navigation.navigate('Logon'); // volta pra pagina de Logon
    }

    const uploadDoc = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        if (result.type === "success") {
            upload(result);
        }
    }

    const upload = async data => {
       const formData = new FormData();
       const info = {
          uri: data.uri,
          name: data.name,
          type: `application/${data.name.split(".").reverse()[0]}`
       };

       formData.append("file", info);

       try {
            // salva o documento no banco de dados
            const response = await api.post('upload', formData, { headers: { Authorization: userId } });

            ToastAndroid.show("Upload realizado com Sucesso!", ToastAndroid.SHORT);
       }
       catch (err) {
            alert('Falha ao carregar o documento!');
       }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
            </View>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.actionUploadDoc} onPress={uploadDoc}>
                    <Text style={styles.actionText}>Upload</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionLogout} onPress={logout}>
                    <Feather name="log-out" size={30} color="#FF0000" />
                </TouchableOpacity>
            </View>

            <Text style={styles.totalText}>
                Total de <Text style={styles.totalTextBold}>{total} documentos</Text>:
            </Text>

            <FlatList 
                style={styles.docList}
                data={docs}
                keyExtractor={doc => String(doc.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadDocs}
                onEndReachedThreshold={0.1}
                refreshing={true}
                renderItem={({ item: doc }) => (
                    <View style={styles.doc}>
                        <Text style={styles.docProperty}>Documento: <Text style={styles.docProperty}>{doc.id}</Text> </Text>
                        <Text style={styles.docValue}>{doc.name}</Text>

                        <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(doc)}>
                            <Text style={styles.detailsButtonText}>
                                Ver mais detalhes
                            </Text>
                            <Feather name="arrow-right" size={20} color="#FF8552" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}
