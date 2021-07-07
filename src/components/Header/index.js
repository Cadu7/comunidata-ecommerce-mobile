import React from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import DrawerCarrinho from '../DrawerCarrinho';
import styles from './styles';

const Header = ({navigation}) => {
    return (
            <View style={styles.header}>
                <Image
                    source={require('../../assets/logoCanto.png')}
                    style={{ width: 30, height: 30 }}
                    resizeMode="contain"
                />
                <View >
                    <Text style={styles.text}>ComuniData</Text>
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

