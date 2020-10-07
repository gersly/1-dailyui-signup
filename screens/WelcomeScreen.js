import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, TouchableOpacity, SafeAreaView, ImageBackground} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const image = {uri: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}
const screen = Dimensions.get("screen");

export default class WelcomeScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{flex:2 }}>
                    <ImageBackground source={image} style={styles.image}>
                    <LinearGradient
                    colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0.75)','rgba(0,0,0,0.25)','rgba(0,0,0,0.75)','rgba(0,0,0,1)']}
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      height: '100%',
                    }}
                  />
                  <View style={styles.introContainer}>
                  <Text style={styles.title}>DailyFit</Text>
                  <Text style={styles.subtitle}>Follow our trainer approved videos for workouts you can do at the gym, at home or just about anywhere</Text>
                  </View>
                </ImageBackground>
                </View>
                <View style={{flex:1}}>
                <Text>Buttons</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    image: {
        width: screen.width,
        height: '100%'
    },
    introContainer:{
        backgroundColor: 'transparent', 
        flex: 1,  
        justifyContent: 'flex-end', 
        alignItems: 'center'
    },
    title:{
        fontSize: 22,
        color: '#fff', 
        fontWeight: 'bold',
        paddingVertical: 4
    },
    subtitle:{
        fontSize: 12,
        color: 'rgba(175,175,175, 1)',
        textAlign: 'center', 
        width: screen.width - 80,
        fontWeight: 'bold'
    }
})
