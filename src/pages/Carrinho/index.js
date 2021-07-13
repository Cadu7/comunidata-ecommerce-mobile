import React, { useContext } from 'react'
import { View, Text, FlatList } from 'react-native'
import StackNav from '../../components/StackNav'
import CarrinhoContext from '../../Context/CarrinhoContext/CarrinhoContext'

const Carrinho = () => {

    const {produtos} = useContext(CarrinhoContext)

    const valorTotal = produtos.reduce((total, prod) => total + prod.item.valorUnitario, 0).toFixed(2);

    return (
        <View>
            <FlatList
          data={produtos}
          keyExtractor={(item) => item.data.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.viewContainer}>
                <Text>{item.produtos.data.name}</Text>
                <Text>{item.produtos.data.price}</Text>
                <Text>{valorTotal}</Text>
              </View>
            )
          }}
        />
        <StackNav />
        </View>
    )
}
export default Carrinho;