import { View, Text, FlatList, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import styles from './styles'
import CarrinhoContext from '../../Context/CarrinhoContext/CarrinhoContext';

const Checkout = ({ navigation }) => {

    const context = useContext(CarrinhoContext);

    const confirmarCompra = () => {
        
        let totalPedido = 0.00;

        context.produtos.map(produto => {
            totalPedido += produto.produto.valorUnitario
            totalPedido = Number(totalPedido.toFixed(2))
        })

        Alert.alert(
            'Confirmar finalização da Compra?',
            `Valor total do pedido: R$${totalPedido}`,
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
                            onPress: () => navigation.navigate('Perfil')
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
                data={context.produtos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item: produto, index }) => {
                    return (
                        <View style={styles.areaProduto}>
                            <View style={styles.areaImagemProduto}>
                                <ImageBackground style={styles.imagemProduto}
                                                 source={{ uri: produto.produto.url }}
                                                 resizeMode='center'
                                />
                            </View>
                            <View style={styles.areaNomeProduto}>
                                <Text style={styles.nomeProduto}>{produto.produto.nome}</Text>
                            </View>
                            <View style={styles.areaPrecoProduto}>
                                <Text style={styles.precoProduto}>R${produto.produto.valorUnitario}</Text>
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