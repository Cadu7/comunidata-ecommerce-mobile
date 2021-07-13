import { View, Text, TouchableOpacity, Button, FlatList, ScrollView, SectionList } from 'react-native';
import { listarProdutos } from '../../data/Produto/produto_db';
import axios from 'axios';
import Commerce from '@chec/commerce.js';
import DrawerCarrinho from '../../components/DrawerCarrinho'
import React, { useState, useEffect } from 'react';
import styles from './styles'

const Home = ({ navigation }) => {

  const commerce = new Commerce('pk_test_301549b9c987e44b16e8c9b321eb64d1db21ca4387587');


  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [prodCat, setProdCat] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProdutos(data)
  }
  //produtos.map(r => { console.log("categorias", r?.categories[0].id, "\n") });

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list()
    var slugs = []
    for (i = 0; i < data.length; i++) {
      if(i===0){
        slugs = [data[i].slug]
      }else{
        slugs = [...slugs, data[i].slug]
      }
      fetchProdutosByCategory(slugs)
    }
    setCategorias(data)
  }
  
  const fetchProdutosByCategory = async (slugs) => {
    //produtos.category_slug
    const { data } = await commerce.products.list({
       categories:[
         {
           slug: [slugs]
         }
       ] 
     });
    setProdCat(data)
  }

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [])

  return (
    <View>
      <View>
        <Text>Carroussel</Text>
        <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 10 }}>Retorno Página Produto</Text>
      </View>
      <View>
        {/* <SectionList
          sections={categorias}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item name={item} />}
          renderSectionHeader={({ section: { prodCat } }) => (
            <Text>{prodCat}</Text>
          )}
        /> */}
        <FlatList
          data={categorias}
          onRefresh={() => { categorias }}
          refreshing={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item: categoria }) => {
            return (
              <View style={styles.viewContainer}>
                <Text>{categoria.name}</Text>
                <FlatList
                  data={prodCat}
                  horizontal={true}
                  onRefresh={() => { prodCat }}
                  refreshing={false}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item: produto }) => {
                    return (
                      // Ainda está retornando o último colocado
                      <View style={styles.viewContainer}>
                        <Text>{produto.name}</Text>
                        <Text>{produto.price.formatted_with_symbol}</Text>
                        {/* precisamos de um botão para adicionar ao carrinho!! */}
                      </View>
                    )
                  }} />
              </View>
            )
          }} />
      </View>
    </View >
  )
}
export default Home;