import React from 'react'
import { View, Text, FlatList } from 'react-native'

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