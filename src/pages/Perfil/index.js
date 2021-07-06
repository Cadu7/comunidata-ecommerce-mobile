import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Perfil = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.elements}>
                <Text style = {styles.text}>Nome Completo</Text>
            </View>
            <View style = {styles.elements}>
                <Text style = {styles.text}>Email</Text>
            </View>
            <View style = {styles.elements}>
                <Text style = {styles.text}>Telefone</Text>
            </View>
            <View style = {styles.elements}>
                <Text style = {styles.text}>Pedidos</Text>
            </View>
            <View style = {styles.elements}>
                <Text style = {styles.text}>Favoritos</Text>
            </View>
        </View>
    )
}
export default Perfil;