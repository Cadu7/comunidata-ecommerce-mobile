import { View, Text, Button, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import React, { useContext } from 'react';
import { Clientecontext } from '../../Context'

const Perfil = () => {

    const { isLogged, setIsLogged } = useContext(Clientecontext);

    function Mudar() {
        setIsLogged(!isLogged);
    }

    if (isLogged) {
        return (
            <View style={styles.container}>
                <View style={styles.elements}>
                    <Text style={styles.textPerfil}>Nome Completo</Text>
                    <Text style={styles.textnome}>Nome Completo</Text>
                </View>
                <View style={styles.elements}>
                    <Text style={styles.textPerfil}>Email</Text>
                    <Text style={styles.textnome}>Email</Text>
                </View>
                <View style={styles.elements}>
                    <Text style={styles.textPerfil}>Telefone</Text>
                    <Text style={styles.textnome}>Telefone</Text>
                </View>
                <View style={styles.elements}>
                    <Text style={styles.textPerfil}>Pedidos</Text>
                </View>
                <View style={styles.elements}>
                    <Text style={styles.textPerfil}>Favoritos</Text>
                </View>
                <Button title="mudar" onPress={() => Mudar()}></Button>
            </View>)
    } else {
        return (
            <KeyboardAvoidingView>
                <View style={styles.container}>
                    <Text style={styles.text}>Login</Text>
                    <TextInput 
                        placeholderTextColor='black'
                        style={styles.input}
                        placeholder="Email"
                        autoCorrect={false}
                        onChangeText={() => { }}
                    />
                    <TextInput
                        placeholderTextColor='black'
                        style={styles.input}
                        placeholder="Senha"
                        autoCorrect={false}
                        onChangeText={() => { }}
                    />
                    <TouchableOpacity style={styles.acess} onPress={() => Mudar()}>
                        <Text style={styles.sumitText}>Acessar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
export default Perfil;