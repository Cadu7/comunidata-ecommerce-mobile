import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Image, ScrollView, Text } from 'react-native'
import { adicionarProdutos, atualizarProduto } from '../../../data/Produto/produto_db'
import Deletar from '../Deletar'
import Atualizar from '../Atualizar'
import Buscar from '../Buscar'

const Cadastro = () => {
    const [nome, setNome] = useState(null);
    const [descricao, setDescricao] = useState(null);
    const [preco, setPreco] = useState(null);

    function salvarProduto() {
        // Tarefa: Adicionar validação de dados nulos
        adicionarProdutos(nome, descricao, preco);
    }

    return (
        <>
            <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 10 }}>Banco Embarcado!!</Text>
            <ScrollView>
                <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 10 }}>Cadastro</Text>
                <View style={{ padding: 10 }}>
                    <TextInput style={{ borderStyle: 'solid', borderWidth: 1 }}
                        name='nome'
                        placeholder='Digite o nome'
                        onChangeText={nome => setNome(nome)}
                        value={nome} />
                    <TextInput style={{ borderStyle: 'solid', borderWidth: 1, marginTop: 10 }}
                        name='descricao'
                        placeholder='Digite a descrição'
                        onChangeText={descricao => setDescricao(descricao)}
                        value={descricao} />
                    <TextInput keyboardType='numeric'
                        style={{ borderStyle: 'solid', borderWidth: 1, marginTop: 10 }}
                        name='preco'
                        placeholder='Digite o preço'
                        onChangeText={transferPreco => setPreco(parseFloat(transferPreco))}
                        value={preco} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={salvarProduto}>
                        <Image style={{ height: 50, width: 50, marginLeft: 10 }}
                            source={{ uri: 'https://th.bing.com/th/id/R.d9ffba932a78f5b38a4750f6704f2334?rik=1j1aOC5RDxXuRg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffree-png-plus-sign-plus-sign-icon-button-green-approved-check-712.png&ehk=rIpQZlg8tb3NjbJGECZCmgLGrq%2bwOuiLS80Wpq6dshE%3d&risl=&pid=ImgRaw' }} />

                    </TouchableOpacity>
                </View>
                <Deletar />
                <Atualizar />
                <Buscar />
            </ScrollView>
        </>
    )
}

export default Cadastro;