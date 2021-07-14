
import { View, Text, FlatList, ImageBackground, Touchable, TouchableOpacity, Alert } from 'react-native';
import { listarProdutos } from '../../data/Produto/produto_db';
import DrawerCarrinho from '../../components/DrawerCarrinho'
import Categorias from '../../mock/Categorias.json';
import React, { useState, useEffect, useContext } from 'react';
import Produtos from '../../mock/Produtos.json';
import Commerce from '@chec/commerce.js';
import styles from './styles';
import axios from 'axios';
import CarrinhoContext from '../../Context/CarrinhoContext/CarrinhoContext';


const Home = ({ navigation }) => {

  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [prodCat, setProdCat] = useState({});

  const { addProduto } = useContext(CarrinhoContext);

  const fetchProducts = async () => {
    const response = await axios.get('https://ecommerce-api-comunidata.herokuapp.com/produtos')
    setProdutos(response.data)
  }

  const fetchCategories = async () => {
    const response = await axios.get('https://ecommerce-api-comunidata.herokuapp.com/categorias')
    setCategorias(response.data.content)
  }

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [])

  function Comprar() {
    Alert.alert('Tem certeza que deseja adicionar o produto ao carrinho?', ' ', [{ text: 'Cancelar', },
    { text: 'Confirmar', }])
  }

  return (
    <View style={styles.superContainer}>
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>Produtos</Text>
      </View>
      <View>
        <FlatList
          data={categorias}
          keyExtractor={(item) => item.id}
          renderItem={({ item: categoria }) => {
            return (
              <View style={styles.viewContainer}>
                <Text style={{ fontWeight: 'bold' }}>{categoria.nome}</Text>
                <FlatList
                  data={produtos.filter(produto => produto.categoria.id === categoria.id)}
                  horizontal={true}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item: produto }) => {
                    return (
                      <View style={styles.viewContainerCard}>
                        <TouchableOpacity
                          onPress={() => addProduto({ produto })}>
                          <Text style={styles.textoCard}>{produto.nome}</Text>
                          <Text style={styles.textoCard}>R$ {produto.valorUnitario}</Text>
                          <ImageBackground
                            resizeMode='center'
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


