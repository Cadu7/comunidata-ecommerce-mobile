import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Image } from 'react-native'

const Cadastro = () => {

    const [nome, setNome] = useState();
    const [descricao, setDescricao] = useState();
    const [preco, setPreco] = useState();

    return (
        <View>
            <View style={{ padding: 10 }}>
                <TextInput style={{ borderStyle: 'solid', borderWidth: 1 }} name='nome' placeholder='Digite o nome' onChangeText={setNome} />
                <TextInput style={{ borderStyle: 'solid', borderWidth: 1, marginTop: 10 }} name='descricao' placeholder='Digite a descricao' onchangeText={setDescricao} />
                <TextInput style={{ borderStyle: 'solid', borderWidth: 1, marginTop: 10 }} name='preco' placeholder='Digite o preco' onchangeText={setPreco} />
            </View>
            <TouchableOpacity >
                <Image style={{ height: 50, width: 50 }} source={{ uri: 'https://th.bing.com/th/id/R.d9ffba932a78f5b38a4750f6704f2334?rik=1j1aOC5RDxXuRg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffree-png-plus-sign-plus-sign-icon-button-green-approved-check-712.png&ehk=rIpQZlg8tb3NjbJGECZCmgLGrq%2bwOuiLS80Wpq6dshE%3d&risl=&pid=ImgRaw' }} />
            </TouchableOpacity>
        </View>

    )
}

export default Cadastro;