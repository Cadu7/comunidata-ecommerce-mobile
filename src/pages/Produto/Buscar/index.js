import React, { useState } from 'react'
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native'
import { buscarPorNome, } from '../../../data/Produto/produto_db'


const Buscar = () => {
    const [nome, setNome] = useState(null);
    const [produto, setProduto] = useState([]);

    const buscarProduto = () => {
        let produto = buscarPorNome(nome);
        console.log(produto);
        setProduto(produto);
    }

    return (
        <>
            <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 10 }}>Busca por Nome</Text>
            <View style={{ padding: 10 }}>
                <TextInput
                    style={{ borderStyle: 'solid', borderWidth: 1, marginTop: 10 }}
                    name="nomeProduto"
                    placeholder="Nome do Produto"
                    onChangeText={nome => setNome(nome)}
                    value={nome}
                />
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={buscarProduto}>
                        <Image style={{ height: 50, width: 50, marginLeft: 5, marginTop: 10 }}
                            source={{ uri: 'https://th.bing.com/th/id/R.d9ffba932a78f5b38a4750f6704f2334?rik=1j1aOC5RDxXuRg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffree-png-plus-sign-plus-sign-icon-button-green-approved-check-712.png&ehk=rIpQZlg8tb3NjbJGECZCmgLGrq%2bwOuiLS80Wpq6dshE%3d&risl=&pid=ImgRaw' }} />

                    </TouchableOpacity>
                    <Text>{produto[0]?.produto_id}</Text>
                    <Text>{produto[0]?.produto_nome}</Text>
                    <Text>{produto[0]?.produto_descricao}</Text>
                    <Text>{produto[0]?.produto_preco}</Text>
                </View>
            </View>
        </>
    )
}
export default Buscar;