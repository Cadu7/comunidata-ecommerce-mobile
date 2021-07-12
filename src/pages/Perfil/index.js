import { View, Text, Button, KeyboardAvoidingView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Clientecontext } from '../../Context'
import React, { useContext, useState } from 'react';
import styles from './styles';
import clientes from '../../mock/Clientes.json'

const Perfil = () => {

    const { isLogged, setIsLogged } = useContext(Clientecontext);
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    // const handleLogin = (e) => {
    //     const usuario = clientes.filter(cliente => cliente.nomeUsuario === nome)[0]
    //     if (nome === "admin") {
    //         console.log("entrei no admin");
    //         history.push("/admin")
    //     } else if (usuario !== undefined) {
    //         console.log("entrei no cliente");
    //         history.push(/clientes/${ usuario.id })
    //     } else {
    //         alert("Usuario não cadastrado")
    //     }
    // }

    function HandleLogin(e) {
        //e.preventDefault();
        const usuario = clientes.filter((cliente) => cliente.email === email)[0]
        console.log("email:",email)
        console.log("usuario:",usuario)
        console.log(clientes)
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
                    <Text style={styles.textnome}>{cliente.nome}</Text>
                </View>
                <View style={styles.elements}>
                    <Text style={styles.textPerfil}>Email:</Text>
                    <Text style={styles.textnome}>{cliente.email}</Text>
                </View>
                <View style={styles.elements}>
                    <Text style={styles.textPerfil}>Telefone:</Text>
                    <Text style={styles.textnome}>{cliente.telefone}</Text>
                </View>
                <View style={styles.elements}>
                    <Text style={styles.textPerfil}>Pedidos</Text>
                    <Text style={styles.textnome}>{cliente.pedidos}</Text>
                </View>
                <View style={styles.elements}>
                    <Text style={styles.textPerfil}>Favoritos</Text>
                    <Text style={styles.textnome}>{cliente.favoritos}</Text>
                </View>
                <Button title="mudar" onPress={() => Mudar()}></Button>
            </View>)
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
                        onChange={email => setEmail(email.value)}
                        value={email}
                    />
                    <TextInput
                        placeholderTextColor='black'
                        style={styles.input}
                        placeholder="Senha"
                        autoCorrect={false}
                        onChange={senha => setSenha(senha.value)}
                        value={senha}
                    />
                    <TouchableOpacity style={styles.acess} onPress={() => HandleLogin()}>
                        <Text style={styles.sumitText}>Acessar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
export default Perfil;