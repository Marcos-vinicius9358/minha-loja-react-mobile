import { Text, View, StyleSheet } from "react-native";

export default function () {


  return (
    <View style={styles.container} >
      <Text style={styles.titulo}>ola</Text>
      <Text style={styles.titulo}>ola mundo</Text>
    </View>

  )
}



  const styles = StyleSheet.create({

    container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#000",
    },
    titulo:{
      fontSize:20,
      color:"#ff0000",
    }
  })