import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ChooseYourDaily from '../screens/app/ChooseYourDaily'
const Stack = createStackNavigator();


export default class AppStack extends Component {
    render() {
        return (
            <Stack.Navigator
            mode={'modal'}
            headerMode={'screen'}
            >
            <Stack.Screen 
            options={{
                headerShown: false,
                headerStyle:{
                    backgroundColor: '#000'
                }
            }}
            name="Choose Daily" component={ChooseYourDaily} />
          </Stack.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
