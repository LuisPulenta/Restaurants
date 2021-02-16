import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator }from '@react-navigation/bottom-tabs'

import FavoritesStack from './FavoritesStack'
import TopRestaurantsStack from './TopRestaurantsStack'
import SearchStack from './SearchStack'
import AccountStack from './AccountStack'
import RestaurantsStack from './RestaurantsStack'
import { Icon } from 'react-native-elements'

const Tab = createBottomTabNavigator()

export default function Navigation() {
    const screenOptions = (route,color) =>{
        let iconName
        switch (route.name){
            case "restaurants":
                iconName="food-off"
                break;
            case "favorites":
                iconName="cards-heart"
                break;
            case "top-restaurants":
                iconName="star"
                break;
            case "search":
                iconName="card-search"
                break;
            case "account":
                iconName="home"
                break;
        }
        return (
            <Icon
                type="material-community"
                name={iconName}
                size={22}
                color={color}
            />
        )
    }
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName="restaurants"
            tabBarOptions={{
                inactiveTintColor:"#ffbc63",
                activeTintColor:"#cf4666"
            }}
            screenOptions={({route})=>({
                tabBarIcon:({color})=>screenOptions(route,color)
            })}
            >
                <Tab.Screen 
                name="restaurants"
                component={RestaurantsStack}
                options={{title:"Restaurantes"}}
                />
                <Tab.Screen 
                name="favorites"
                component={FavoritesStack}
                options={{title:"Favoritos"}}
                />
                <Tab.Screen 
                name="top-restaurants"
                component={TopRestaurantsStack}
                options={{title:"Top 5"}}
                />
                <Tab.Screen 
                name="search"
                component={SearchStack}
                options={{title:"Buscar"}}
                />
                 <Tab.Screen 
                name="account"
                component={AccountStack}
                options={{title:"Cuenta"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}