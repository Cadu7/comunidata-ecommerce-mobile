import React, { useState } from 'react'
import { View, Text, FlatList, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import styles from './styles'

const Checkout = ({ navigation }) => {

    // LucasFC91: ToDo - Trazer os dados do pedido para esse estado
    const [pedido, setPedido] = useState([
        {
            uriImagem: 'https://i.imgur.com/nbQ2F7v.png',
            nome: 'Bola de Basquete Grande Laranja',
            preco: 59.99,
        },
        {
            uriImagem: 'https://i.imgur.com/F3GGXad.png',
            nome: 'Taco de Baseball',
            preco: 79.99,
        },
        {
            uriImagem: 'https://i.imgur.com/Vs6RHX9.png',
            nome: 'Boné',
            preco: 19.99,
        },
        {
            uriImagem: 'https://i.imgur.com/nSxMRJu.png',
            nome: 'Vestido',
            preco: 74.99,
        },
        {
            uriImagem: 'https://i.imgur.com/SdQc0kb.png',
            nome: 'Bolo',
            preco: 39.99,
        },
    ])

    const confirmarCompra = () => {
        
        let totalPedido = 0.00;

        pedido.map(produto => {
            totalPedido += produto.preco
            totalPedido = Number(totalPedido.toFixed(2))
        })

        Alert.alert(
            'Confirmar finalização da Compra?',
            `Valor total do pedido: ${totalPedido}`,
            [
                {
                    text: 'Cancelar',
                },
                {
                    text: 'Confirmar',
                    onPress: () => Alert.alert(
                        'Compra finalizada!',
                        'Obrigado por comprar conosco!',
                        [{ 
                            text: 'OK',
                            onPress: () => navigation.navigate('Home')
                        }]
                    )
                }
            ]
        )

    }

    return (
        <View style={styles.container}>
            <Text style={styles.tituloPedido}>Pedido</Text>
            <FlatList
                data={pedido}
                // onRefresh={() => { setProdutos(listarProdutos) }}
                // refreshing={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.areaProduto}>
                            <View style={styles.areaImagemProduto}>
                                <ImageBackground style={styles.imagemProduto}
                                                 source={{ uri: item.uriImagem }}
                                                 resizeMode='center'
                                />
                            </View>
                            <View style={styles.areaNomeProduto}>
                                <Text style={styles.nomeProduto}>{item.nome}</Text>
                            </View>
                            <View style={styles.areaPrecoProduto}>
                                <Text style={styles.precoProduto}>{item.preco}</Text>
                            </View>
                        </View>
                    )
                }}
            />
            <View style={styles.areaFecharCompra}>
                <TouchableOpacity style={styles.botaoFecharCompra}
                                  onPress={confirmarCompra}>
                    <Text style={styles.textoFecharCompra}>Finalizar Compra</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Checkout;