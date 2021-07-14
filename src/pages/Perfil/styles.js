import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
    container: {
        height: '98%',
        margin: 5,
        marginTop: 6,
        borderRadius:9,
        backgroundColor: "#242528",
        display: 'flex',
        flexDirection: 'column',
    },
    containerLogin: {
        height: '98%',
        margin: 5,
        marginTop: 6,
        borderRadius:9,
        backgroundColor: "#242528",
        alignItems:'center',
        justifyContent:'center',
        display: 'flex',
        flexDirection: 'column',
       
    },
    elements: {
        marginTop: 30,
        flexDirection:'row'
    },
    text:{
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontFamily: 'Verdana',
   
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
        marginLeft: 3,
        padding: 7,
        fontSize: 22,
        color: 'white',
        fontFamily: 'Verdana'
    },
    textnome:{
        padding: 7,
        fontSize: 22,
        color: 'white',
        fontFamily: 'Verdana'
    },
})
export default styles;