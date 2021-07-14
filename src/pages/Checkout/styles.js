import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: '98%',
        margin: 5,
        marginTop: 6,
        borderRadius: 9,
        backgroundColor: "#242528",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    tituloPedido: {
        marginVertical: 20,
        justifyContent: 'center',
        paddingHorizontal: 50,
        paddingVertical: 5,
        color: 'white',
        fontSize: 30,
        backgroundColor: '#424a4a',
        borderColor: '#cfcfcf',
        borderRadius: 50,
    },
        areaProduto: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor: '#303636',
        borderStyle: 'solid',
        borderColor: '#bfbfbf',
        borderWidth: 2,
        borderRadius: 2,
        height: 80,
        width: 350,
    },
    areaImagemProduto: {
        flex: 0.2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    imagemProduto: {
        height: 65,
        width: 65,    
    },
    areaNomeProduto: {
        flex: 0.65,
    },
    nomeProduto: {
        marginLeft: 10,
        color: 'white',
        fontSize: 20,
    },
    areaPrecoProduto: {
        flex: 0.15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    precoProduto: {
        color: 'white',
        fontSize: 16,
        backgroundColor: '#424a4a',
    },
    areaFecharCompra: {
        margin: 10,
        backgroundColor: '#424a4a',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#cfcfcf',
    },
    botaoFecharCompra: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoFecharCompra: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
})
export default styles;