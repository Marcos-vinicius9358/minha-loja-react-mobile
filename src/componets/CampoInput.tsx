import { Text, View, StyleSheet, TextInput } from "react-native"

interface CampoInputProps{
  label:string
  placeholder:string
  mensagem:string
}
 

export default function CampoInput({label, placeholder, mensagem} : CampoInputProps) {




  return (
    <View style={styles.form}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} />
      <Text style={styles.mensagem}>{mensagem}</Text>

    </View>
  )
}

const styles = StyleSheet.create({

  form: {
    width: "100%"
  },

  label: {
    fontSize: 20
  },

  input: {
    borderWidth: 1,
    borderColor: "#5a5a5a",

  },

  mensagem:{
    color:"red"
  }

})
