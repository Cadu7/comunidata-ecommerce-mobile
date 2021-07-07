import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, FlatList } from 'react-native';
import styles from './styles'
import Cadastro from '../Cadastro'
import { listarProdutos } from '../../data/Produto/produto_db';


const Home = ({ navigation }) => {

    const [produtos, setProdutos] = useState(listarProdutos());
    return (
        <>
            <View>
                <Text>Carroussel</Text>
            </View>
            <View>
                <FlatList
                    data={produtos}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item: produto, index }) => {
                        return (
                            <View style={styles.viewContainer}>
                                <Text>{produto.produto_id}</Text>
                                <Text>{produto.produto_nome}</Text>
                                <Text>{produto.produto_descricao}</Text>
                                <Text>{produto.produto_preco}</Text>
                            </View>
                        )
                    }
                    }
                />
            </View>
        </>
    )
}
export default Home;