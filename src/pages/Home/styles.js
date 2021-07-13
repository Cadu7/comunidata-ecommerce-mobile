import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    viewContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'lightgray',
        margin: 10
    },
    titulo: {
        fontSize: 20,
        textAlign: 'center',
    },
    tituloContainer: {
        marginTop: 10,
        backgroundColor: 'lightblue',
        width: 200,
        alignSelf: 'center'
    },
    categoriaName: {
        fontSize: 20,
        paddingLeft: 10,
        paddingTop: 10
    },
    imageProduto: {
        height: 130,
        width: 130,
        alignSelf: 'center',
        margin: 5
    },
    viewContainerCard: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#242528',
        margin: 10,
        width: 150,
        height: 200,
        borderRadius: 10
    },
    textoCard: {
        color: 'rgb(250, 250, 250)',
        paddingLeft: 15,
        paddingTop: 3
    },
    superContainer: {
        height: 470,
    }
})
export default styles;