import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'


const DeletarProduto = () => {
    const [id, setId] = useState(null);
    return (
        <View>
            <TextInput 
            keyboardType = 'numeric'
            name = "idProduto"
            placeholder = "id do Produto"
            onChangeText = {id => setId(id)}
            value = {id}

            />
            <TouchableOpacity />


        </View>
    )
}
export default DeletarProduto;