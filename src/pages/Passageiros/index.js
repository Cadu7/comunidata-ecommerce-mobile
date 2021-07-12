import { View, FlatList, Text, Image, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Container, AreaText, AreaImage, Img } from './styles'

const Passageiros = () => {
  //const [passageiros, setPassageiros] = useState([]);
  const [dados, setDados] = useState({
    data: [],
    page: 0,
    loading: false,
  })
  const size = 20

  useEffect(() => {
    getPassageiros()
  }, [])

  const renderFooter = () => {
    if (!dados.loading)
      return null
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#898888" />
      </View>
    )
  }

  getPassageiros = () => {
    if (dados.loading)
      return;

    const { page } = dados;

    setDados({
      loading: true
    })
    //usar page e size para desafio
    axios.get(`https://api.instantwebtools.net/v1/passenger?page=${dados.page}&size=${size}`)
      .then((response) => {
        setDados({
          data: [...dados.data, ...response.data.data],
          page: page + 1,
          loading: false,
        })
      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <View>
      <FlatList
        data={dados.data}
        onEndReached={getPassageiros}
        onEndReachedThreshold={0.1}
        ListFooterComponent = {renderFooter}
        //horizontal={true}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <Container>
              <AreaImage>
                <Img source={{
                  uri: item.airline.logo
                }}
                />
              </AreaImage>
              <AreaText>
                <Text>Nome: {item.name}</Text>
                <Text>Qtde. Viagens: {item.trips}</Text>
                <Text>Cia. Aérea: {item.airline.name}</Text>
              </AreaText>
            </Container>
          )
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({

  loading: {
    alignSelf: 'center',
    marginVertical: 20,
  },
});
export default Passageiros;