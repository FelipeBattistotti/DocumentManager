import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

import api from '../../services/api';
import logoImg from '../../assets/logo2.png';
import styles from './styles';

export default function Logon () {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [pwd, setPWD] = useState('');

    async function createSession (e) {
        e.preventDefault();

        try {
            const response = await api.post('session', { email, pwd });
            const userId = response.data.id;
            
            navigation.navigate('Doc', {userId}); // apos realizar logon, navega para a pagina de documentos
        }
        catch (err) {
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
            </View>

            <View style={styles.logon}>
                <TextInput placeholder = "E-mail"
                           defaultValue={email}
                           onChangeText={email => setEmail(email)}
                           style={styles.textInput}/>
                <TextInput placeholder = "Senha"
                           defaultValue={pwd}
                           onChangeText={pwd => setPWD(pwd)}
                           secureTextEntry={true}
                           style={styles.textInput}/>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={createSession}>
                        <Text style={styles.actionText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
