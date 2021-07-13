import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    rowcontainer: {
      flex: 1,
      flexDirection: 'column',
      marginLeft: 20,
      marginRight: 20,
      borderBottomWidth: 1,
      borderBottomColor: 'gray'
    },
    idrowcontainer: {
      flexDirection: 'row',
    },
    areaid: {
      flex: 0.9,
    },
    areadelete: {
      flex: 0.1,
      backgroundColor: '#d1d1d1',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      marginTop: 20,
      marginLeft: 20,
      fontSize: 30,
    },
    text: {
      padding: 10,
      fontSize: 20,
      color: '#101010',
    },
    delete: {
      alignSelf: 'flex-end',
      padding: 8,
      fontSize: 15,
    }
  });

  export default styles;