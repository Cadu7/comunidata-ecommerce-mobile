import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, FlatList } from 'react-native';
import styles from './styles'
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
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.viewContainer}>
                                <Text>{item.produto_id}</Text>
                                <Text>{item.produto_nome}</Text>
                                <Text>{item.produto_descricao}</Text>
                                <Text>{item.produto_preco}</Text>
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