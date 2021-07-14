import { Text, View, Image, TouchableOpacity } from 'react-native';
import { buscarPorNome } from '../../data/Produto/produto_db';
import { TextInput } from 'react-native-gesture-handler';
import DrawerCarrinho from '../DrawerCarrinho';
import { Icon } from 'react-native-elements';
import React, { useState } from 'react';
import styles from './styles';

const Header = ({ navigation }) => {
    const [nome, setNome] = useState(null);
    const [produto, setProduto] = useState([]);
    const buscarProduto = () => {
        let produto = buscarPorNome(nome);
        setProduto(produto);
    }
    return (
        <View style={styles.header}>
            <Image
                source={require('../../assets/logoCanto.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <View >
                <Text style={styles.text}>ComuniData</Text>
            </View>
        </View>
    )
}
export default Header;

