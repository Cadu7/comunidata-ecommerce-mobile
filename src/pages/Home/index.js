
import { View, Text, FlatList, ImageBackground, Touchable, TouchableOpacity, Alert } from 'react-native';
import { listarProdutos } from '../../data/Produto/produto_db';
import DrawerCarrinho from '../../components/DrawerCarrinho'
import Categorias from '../../mock/Categorias.json';
import React, { useState, useEffect } from 'react';
import Produtos from '../../mock/Produtos.json';
import Commerce from '@chec/commerce.js';
import styles from './styles';
import axios from 'axios';


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

  // 
  function Comprar() {
    Alert.alert('Tem certeza que deseja adicionar o produto ao carrinho?', ' ', [{text: 'Cancelar',},
    {text: 'Confirmar',}])
  }
  
  return (
    <View style={styles.superContainer}>
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>Produtos</Text>
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
          data={Categorias}
          // onRefresh={() => { categorias }}
          // refreshing={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item: categoria }) => {
            return (
              <View style={styles.viewContainer}>
                <Text style={styles.categoriaName}>{categoria.nome}</Text>
                <FlatList
                  data={Produtos.filter(produto => produto.categoria === categoria.id)}
                  horizontal={true}
                  // onRefresh={() => { prodCat }}
                  // refreshing={false}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item: produto }) => {
                    return (
                    <View style={styles.viewContainerCard}>
                        <TouchableOpacity
                        onPress= {Comprar}>
                          <Text style={styles.textoCard}>{produto.nome}</Text>
                          <Text style={styles.textoCard}>R$ {produto.ValorUnitario}</Text>
                          <ImageBackground
                            realizeMode='center'
                            source={{ uri: produto.url }}
                            style={styles.imageProduto}
                          />
                        </TouchableOpacity>

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


