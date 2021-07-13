import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Carrinho = () => {

    return (
        <View>
            <FlatList
          data={carrinho}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.viewContainer}>
                <Text>{item.pedido.nome}</Text>
                <Text>{item.pedido.quantidade}</Text>
                <Text>{item.pedido.ValorUnitario}</Text>
                <Text>{valorTotal}</Text>
              </View>
            )
          }
          }
        />
        </View>
    )
}
export default Carrinho;