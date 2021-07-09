import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image } from 'react-native'
import axios from 'axios';

const Passageiros = () => {
  const [passageiros, setPassageiros] = useState([]);

  useEffect(() => {
    getPassageiros()
  }, [])

  getPassageiros = () => {
    //usar page e size para desafio
    axios.get('https://api.instantwebtools.net/v1/passenger?page=0&size=10')
      .then((response) => {
        console.log(response.data.data);
        setPassageiros(response.data.data);
      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <View>
      <FlatList
        data={passageiros}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Text>Nome: {item.name}</Text>
              <Text>Qtde. Viagens: {item.trips}</Text>
              <Text>Cia. Aérea: {item.airline.name}</Text>
              <Image source={{
                uri: item.airline.logo
              }}
              />
            </View>
          )
        }}
      />
    </View>
  )
};

export default Passageiros;