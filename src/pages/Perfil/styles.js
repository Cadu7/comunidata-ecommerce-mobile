import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
    container: {
        height: 680,
        margin: 5,
        borderRadius:9,
        backgroundColor: "#242528",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    elements: {
        marginTop: 50
    },
    text:{
        padding: 20,
        fontSize: 30,
        color: 'white',
        fontFamily: 'Verdana'
    },
    input:{
        color:'black',
        borderRadius: 9,
        margin: 20,
        backgroundColor:'white',
        width: 300,

    },   
    acess:{
        height: 45,
        width: 100,
        backgroundColor:'#1E4B60',
        borderRadius: 9,
        
    },
    sumitText:{
        marginTop:7,
        alignSelf:'center',
        justifyContent:'center',
        fontSize:20,
    },
    textPerfil:{
        padding: 7,
        fontSize: 22,
        color: 'white',
        fontFamily: 'Verdana'
    },
})

export default styles;