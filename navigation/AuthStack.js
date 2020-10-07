import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();


export default class AuthStack extends Component {
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
            name="Welcome" component={WelcomeScreen} />
          </Stack.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
