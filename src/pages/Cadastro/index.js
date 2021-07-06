import React, { useState } from 'react'
import { View, Form, TextInput, TouchableOpacity, Image } from 'react-native'

const Cadastro = () => {

    const [nome, setNome] = useState();
    const [descricao, setDescricao] = useState();
    const [preco, setPreco] = useState();

    return (
        <View>

            <TextInput name='nome' placeholder='Digite o nome' onChangeText={setNome} />
            <TextInput name='descricao' placeholder='Digite a descrição' onChangeText={setDescricao} />
            <TextInput name='preco' placeholder='Digite o preço' onChangeText={setPreco} />
            <TouchableOpacity>
                <Image style={{ height: 50, width: 50 }} source={{ uri: 'https://w7.pngwing.com/pngs/302/689/png-transparent-logo-plus-and-minus-signs-symbol-symbol-miscellaneous-logo-sign.png' }} />
            </TouchableOpacity>
        </View>
    )
}

export default Cadastro;