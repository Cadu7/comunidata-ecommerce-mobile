import { View, Text, TouchableOpacity, Button, FlatList, ScrollView } from 'react-native';
import { listarProdutos } from '../../data/Produto/produto_db';
import Commerce from '@chec/commerce.js';
import axios from 'axios';
import DrawerCarrinho from '../../components/DrawerCarrinho'
import React, { useState, useEffect } from 'react';
import styles from './styles'

const Home = ({ navigation }) => {

  const commerce = new Commerce('pk_test_301549b9c987e44b16e8c9b321eb64d1db21ca4387587');


  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const refresh = navigation.addListener('focus', () => {
      setProdutos(listarProdutos())

      // axios.get('https://api.chec.io/v1/categories').then((response) => {
      //   setCategorias(response.data.data)
      // }).catch((error)=> {
      //   console.log(error)
      // })
      // axios.get('https://api.chec.io/v1/categoriesr', {
      //   headers: {
      //     'Authorization': `pk_test_301549b9c987e44b16e8c9b321eb64d1db21ca4387587`
      //   }
      // })
      //   .then((res) => {
      //     console.log(res.data.data.name)
      //   })
      //   .catch((error) => {
      //     console.error(error)
      //   })

    })
  }, [])
  commerce.categories.list().then((resp) => resp.data.map(r=>/*setCategorias(...categorias, ...r.name)*/console.log(r.name)));
  console.log('state', categorias);

  return (
    <View>
      <View>
        <Text>Carroussel</Text>
        <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 10 }}>Retorno Página Produto</Text>
      </View>
      <View>
        <FlatList
          data={produtos}
          onRefresh={() => { setProdutos(listarProdutos) }}
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