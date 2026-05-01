import { Children, ReactNode } from "react"
import { Text, TouchableOpacity, StyleSheet} from "react-native"

interface BotaoProps{
    children: ReactNode
}

export default function Botao({children} : BotaoProps){
    return(
<TouchableOpacity style={styles.botao}>{children}</TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao:{
        width: "100%",
        height: 45,
        backgroundColor: "#0dbbf0"
    }
})