import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Image } from 'react-native'
import { atualizarProduto, deletarProduto, listarProdutos } from '../../../data/Produto/produto_db'

const Atualizar = () => {
    const [id, setId] = useState(null);
    const [nome, setNome] = useState(null);
    const [descricao, setDescricao] = useState(null);
    const [preco, setPreco] = useState(null);

    const atualizar = () => {
        atualizarProduto(nome, descricao, preco, id)
    }

    return (
        <View style={{ padding: 10 }}>
            <TextInput
                style={{ borderStyle: 'solid', borderWidth: 1, marginTop: 10 }}
                keyboardType='numeric'
                name="idProduto"
                placeholder="id do Produto"
                onChangeText={id => setId(parseInt(id))}
                value={id}
            />
            <TextInput style={{ borderStyle: 'solid', borderWidth: 1 }}
                name='nome'
                placeholder='Digite o nome'
                onChangeText={nome => setNome(nome)}
                value={nome} />
            <TextInput style={{ borderStyle: 'solid', borderWidth: 1, marginTop: 10 }}
                name='descricao'
                placeholder='Digite a descricao'
                onChangeText={descricao => setDescricao(descricao)}
                value={descricao} />
            <TextInput keyboardType='numeric'
                style={{ borderStyle: 'solid', borderWidth: 1, marginTop: 10 }}
                name='preco'
                placeholder='Digite o preco'
                onChangeText={transferPreco => setPreco(parseFloat(transferPreco))}
                value={preco} />
            <TouchableOpacity onPress={atualizar}>
                <Image style={{ height: 50, width: 50 }}
                    source={{ uri: 'https://th.bing.com/th/id/R.d9ffba932a78f5b38a4750f6704f2334?rik=1j1aOC5RDxXuRg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffree-png-plus-sign-plus-sign-icon-button-green-approved-check-712.png&ehk=rIpQZlg8tb3NjbJGECZCmgLGrq%2bwOuiLS80Wpq6dshE%3d&risl=&pid=ImgRaw' }} />

            </TouchableOpacity>
        </View>
    )
}

export default Atualizar;