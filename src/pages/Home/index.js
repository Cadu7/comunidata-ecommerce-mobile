import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

const Home = ({ navigation }) => {

    return (
        <>
        <View>
            <TouchableOpacity style={{height: 50, width: 50}} 
            name='Cadastro' onPress={Cadastro} />
        </View>
        <View>
            <Text>Home !!</Text>
        </View>
        </>
    )
}
export default Home;