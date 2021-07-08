import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Image, Text } from 'react-native'
import { deletarProduto, listarProdutos } from '../../../data/Produto/produto_db'


const Deletar = () => {
    const [id, setId] = useState(null);

    const apagarProduto = () => {
        deletarProduto(id);
    }

    return (
        <View style={{ padding: 10 }}>
            <Text style={{fontSize: 18, textAlign: 'center' }}>Deletar por ID</Text>
            <TextInput
                style={{ borderStyle: 'solid', borderWidth: 1, marginTop: 10 }}
                keyboardType='numeric'
                name="idProduto"
                placeholder="ID do Produto"
                onChangeText={id => setId(parseInt(id))}
                value={id}


            />
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={apagarProduto}>
                    <Image style={{ height: 50, width: 50, marginLeft: 5, marginTop: 10 }}
                        source={{ uri: 'https://th.bing.com/th/id/R.d9ffba932a78f5b38a4750f6704f2334?rik=1j1aOC5RDxXuRg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffree-png-plus-sign-plus-sign-icon-button-green-approved-check-712.png&ehk=rIpQZlg8tb3NjbJGECZCmgLGrq%2bwOuiLS80Wpq6dshE%3d&risl=&pid=ImgRaw' }} />

                </TouchableOpacity>
            </View>


        </View>
    )
}
export default Deletar;