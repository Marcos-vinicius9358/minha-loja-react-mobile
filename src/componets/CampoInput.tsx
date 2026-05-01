import { Text, View, StyleSheet, TextInput } from "react-native"

interface CampoInputProps{
  label:string
  placeholder:string
  mensagem:string
}
 

export default function CampoInput({label, placeholder, mensagem} : CampoInputProps) {




  return (
    <View style={styles.containerInput}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} />
      <Text style={styles.mensagem}>{mensagem}</Text>

    </View>
  )
}

const styles = StyleSheet.create({

  containerInput: {
    width: "100%"
  },

  label: {
    fontSize: 25
  },

  input: {
    borderWidth: 1,
    borderColor: "#585858",
    borderRadius:10,
    fontSize:20,

  },

  mensagem:{
    color:"red"
    
  }

})
