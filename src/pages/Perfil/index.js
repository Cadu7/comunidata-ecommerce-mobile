import { View, Text, Button, KeyboardAvoidingView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Clientecontext } from '../../Context/ClienteContext'
import React, { useContext, useState } from 'react';
import styles from './styles';
import clientes from '../../mock/Clientes.json'

const Perfil = () => {

    const { isLogged, setIsLogged } = useContext(Clientecontext);
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState("")
    const [usuario, setUsuario] = useState({})

    function HandleLogin() {
        setUsuario(clientes.filter(cliente => cliente.email == email)[0])
        if (usuario !== undefined) {
            setIsLogged(!isLogged);
            alert("Login feito com sucesso")
        } else {
            alert("Usuario não cadastrado")
        }
    }

    if (isLogged) {
        return (
            <View style={styles.container}>
                <View style={styles.elements}>
                    <Text style={styles.textPerfil}>Nome Completo:</Text>
                    <Text style={styles.textnome}>{usuario.nome}</Text>
                </View>
                <View style={styles.elements}>
                    <Text style={styles.textPerfil}>Email:</Text>
                    <Text style={styles.textnome}>{usuario.email}</Text>
                </View>
                <View style={styles.elements}>
                    <Text style={styles.textPerfil}>Telefone:</Text>
                    <Text style={styles.textnome}>{usuario.telefone}</Text>
                </View>
                <View style={styles.elements}>
                    <Text style={styles.textPerfil}>Favoritos</Text>
                    <Text style={styles.textnome}>{usuario.favoritos}</Text>
                </View>
            </View>
        )
    } else {
        return (
            <KeyboardAvoidingView>
                <View style={styles.containerLogin}>
                    <Text style={styles.text}>Login</Text>
                    <TextInput
                        placeholderTextColor='black'
                        keyboardType='email-address'
                        style={styles.input}
                        placeholder="Email"
                        autoCorrect={false}
                        onChangeText={email => setEmail(email)}
                        value={email}
                    />
                    <TextInput
                        placeholderTextColor='black'
                        style={styles.input}
                        placeholder="Senha"
                        autoCorrect={false}
                        onChangeText={senha => setSenha(senha)}
                        value={senha}
                    />
                    <TouchableOpacity style={styles.acess} onPress={HandleLogin}>
                        <Text style={styles.sumitText}>Acessar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
export default Perfil;