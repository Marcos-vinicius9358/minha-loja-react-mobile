import CampoInput from "@/componets/CampoInput";
import { Text, View, StyleSheet } from "react-native";
import Botao from "@/componets/Botao";

export default function () {


  return (
    <View style={styles.form} >
      <CampoInput label="Nome" placeholder="Primeiro nome" mensagem="erro"/>
      <CampoInput label="Email" placeholder="Email" mensagem="erro"/>
      <CampoInput label="Senha" placeholder="senha" mensagem="erro"/>
      <CampoInput label="senha" placeholder="confirma senha" mensagem="erro"/>
      <Botao>cadastrar</Botao>
    </View>

  )
}



  const styles = StyleSheet.create({

    form:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#fff",
      padding:15,
    },
   
  })