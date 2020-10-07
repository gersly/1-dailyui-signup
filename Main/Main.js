import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();


export default class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
          </Stack.Navigator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
