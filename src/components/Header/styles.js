import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#1E4B75',
        flexDirection: 'row',
        padding: 8,
        justifyContent: 'center',
        paddingRight:20
    },
    text: {
        fontWeight: 'bold',
        letterSpacing: 0.5,
        color: '#FFF',
        fontSize: 18,
        marginLeft: 30,
    },
    nomeText: {
        fontSize: 15,
        marginLeft:20,
        
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        height:20,
        width:80,
        marginLeft:40
      }
    
});

export default styles;