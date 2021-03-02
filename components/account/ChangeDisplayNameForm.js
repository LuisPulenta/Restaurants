import React from 'react'
import { StyleSheet,  View } from 'react-native'
import { Button,Input } from 'react-native-elements'

export default function ChangeDisplayNameForm({displayName,setShowModal,toastRef}) {
    return (
        <View style={styles.view}>
            <Input
                placeholder="Ingresa nombre y apellido"
                containerStyle={styles.input}
                defaultValue={displayName}
                // onChange={(e) => setNewDisplayName(e.nativeEvent.text)}
                // errorMessage={error}
                rightIcon={{
                    type: "material-community",
                    name: "account-circle-outline",
                    color: "#c2c2c2"
                }}
            />
            <Button
                title="Cambiar Nombre y Apellido"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                // onPress={onSubmit}
                // loading={loading}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        alignItems: "center",
        paddingVertical: 10
    },
    input: {
        marginBottom: 10
    },
    btnContainer: {
        width: "95%"
    },
    btn: {
        backgroundColor: "#442484"
    }
})