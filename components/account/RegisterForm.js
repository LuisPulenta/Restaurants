import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input,Button} from 'react-native-elements'

export default function RegisterForm() {
    return (
        <View style={styles.form}>
            <Input
                containerStyle={styles.input}
                placeholder="Ingresa tu email..."

            ></Input>
            <Input
                containerStyle={styles.input}
                placeholder="Ingresa tu contraseña..."
                password={true}
                secureTextEntry={true}
            ></Input>
            <Input
                containerStyle={styles.input}
                placeholder="Confirma tu contraseña..."
                password={true}
                secureTextEntry={true}
            ></Input>
            <Button
                title="Registrar Nuevo Usuario"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={() => doRegisterUser()}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    form: {
        marginTop: 30
    },
    input: {
        width: "100%"
    },  
    btnContainer: {
        marginTop: 20,
        width: "95%",
        alignSelf: "center"
    },
    btn: {
        backgroundColor: "#442484"
    },
    icon: {
        color: "#c1c1c1"
    }
})
