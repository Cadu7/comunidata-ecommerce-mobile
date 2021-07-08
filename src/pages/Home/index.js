import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, FlatList, ScrollView} from 'react-native';
import styles from './styles'
import { listarProdutos } from '../../data/Produto/produto_db';
import DrawerCarrinho from '../../components/DrawerCarrinho'
import CardProduto from '../../components/CardProdutos'


const Home = ({ navigation }) => {

    const [produtos, setProdutos] = useState(listarProdutos());


    useEffect(() => {
        setProdutos(produtos)
    }, [])

    return (
        <View>
            <View>
                <Text>Carroussel</Text>
            </View>
            <View>
                {/* {
                    produtos.map(produto => {
                        return (
                            <View>
                                <CardProduto item={produto} key={produto.produto_id} />
                            </View>
                        )
                    })
                } */}
                <FlatList
                    data={produtos}
                    extraData={setProdutos(listarProdutos())}
                    onRefresh={()=>{setProdutos(listarProdutos)}}
                    refreshing={false}
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
        </View>
    )
}
export default Home;