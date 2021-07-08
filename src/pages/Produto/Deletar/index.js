import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Image } from 'react-native'
import { deletarProduto, listarProdutos } from '../../../data/Produto/produto_db'


const Deletar = () => {
    const [id, setId] = useState(null);

    const apagarProduto = () => {
        deletarProduto(id);
    }
    
    return (
        <View>
            <TextInput 
            style={{ borderStyle: 'solid', borderWidth: 1, marginTop: 10 }}
            keyboardType = 'numeric'
            name = "idProduto"
            placeholder = "id do Produto"
            onChangeText = {id => setId(parseInt(id))}
            value = {id}
            

            />
            <TouchableOpacity onPress={apagarProduto}>
                <Image style={{ height: 50, width: 50 }}
                    source={{ uri: 'https://th.bing.com/th/id/R.d9ffba932a78f5b38a4750f6704f2334?rik=1j1aOC5RDxXuRg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffree-png-plus-sign-plus-sign-icon-button-green-approved-check-712.png&ehk=rIpQZlg8tb3NjbJGECZCmgLGrq%2bwOuiLS80Wpq6dshE%3d&risl=&pid=ImgRaw' }} />

            </TouchableOpacity>


        </View>
    )
}
export default Deletar;