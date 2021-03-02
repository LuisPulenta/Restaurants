import { map } from 'lodash';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Icon } from 'react-native-elements';

export default function AccountOptions(user, toastRef) {
    const menuOptions=generateOptions();

    
    return (
        <View>
            {
                map(menuOptions,(menu,index)=>(
                    <ListItem
                    key={index}
                    style={styles.menuItem}
                    onPress={menu.onPress}
                >
                    <Icon
                        type="material-community"
                        name={menu.iconNameLeft}
                        color={menu.iconColorLeft}
                    />
                    <ListItem.Content>
                        <ListItem.Title>{menu.title}</ListItem.Title>
                    </ListItem.Content>
                    <Icon
                        type="material-community"
                        name={menu.iconNameRight}
                        color={menu.iconColorRight}
                    />
                </ListItem>
                ))
            }
        </View>
    )
}

const generateOptions = () => {
    return [
        {
            title : "Cambiar Nombres y Apellido",
            iconNameLeft: "account-circle",
            iconColorLeft: "#a7bfd3",
            iconNameRight: "chevron-right",
            iconColorRight: "#a7bfd3",
            onPress: () => selectedComponent("displayName")
        },
        {
            title : "Cambiar Email",
            iconNameLeft: "at",
            iconColorLeft: "#a7bfd3",
            iconNameRight: "chevron-right",
            iconColorRight: "#a7bfd3",
            onPress: () => selectedComponent("email")
        },
        {
            title : "Cambiar Contraseña",
            iconNameLeft: "lock-reset",
            iconColorLeft: "#a7bfd3",
            iconNameRight: "chevron-right",
            iconColorRight: "#a7bfd3",
            onPress: () => selectedComponent("password")
        },
    ]
}

const styles = StyleSheet.create({
    menuItem: {
        borderBottomWidth: 1,
        borderBottomColor: "#a7bfd3"
    }
})