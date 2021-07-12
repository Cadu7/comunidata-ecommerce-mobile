import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { buscarPorNome } from '../../data/Produto/produto_db';
import DrawerCarrinho from '../DrawerCarrinho';
import styles from './styles';
import { Icon } from 'react-native-elements';

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
                style={{ width: 30, height: 30, resizeMode: 'contain' }}
                resizeMode="contain"
            />
            <View >
                <Text style={styles.text}>ComuniData</Text>
                <View>
                    <TextInput style={styles.nomeText} name='nomeProduto'
                        placeholder='Digite o nome do produto'
                        placeholderTextColor='white'

                        style={styles.textInput}
                        underlineColorAndroid='transparent'
                        onChangeText={nome => setNome(nome)}
                        value={nome}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        //onPress={}
                       
                    >
                        <Text>Pesquisar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/*<TouchableOpacity component={DrawerCarrinho} onPress={() => navigation.openDrawer()}>
                    <View style={{width: 35, height: 3, backgroundColor: '#000', marginVertical: 2.5}}/>
                    <View style={{width: 35, height: 3, backgroundColor: '#000', marginVertical: 2.5,}}/>
                    <View style={{width: 35, height: 3, backgroundColor: '#000', marginVertical: 2.5}}/>
                </TouchableOpacity>*/}

        </View>



    )
}


export default Header;

