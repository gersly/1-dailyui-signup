import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, TouchableOpacity, SafeAreaView, ImageBackground} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons'; 
import {user_login} from '../../actions/user'
import { connect } from 'react-redux'


const image = {uri: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}
const screen = Dimensions.get("screen");

class WelcomeScreen extends Component {
    render() {
        const {user_login} = this.props
        return (
            <SafeAreaView style={styles.container}>
            {/* Header with Linear Gradient */}
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
                 {/* End of Header with Linear Gradient */}
                <View style={{flex:1, padding: 20 }}>
                {/* Facebook Button */}
                <View style={styles.buttonContainer}>
                <TouchableOpacity 
                onPress={() => this.props.user_login()}
                activeOpacity={.5}
                style={[styles.button,{
                    backgroundColor: '#4267B2'
                }]}>
                <FontAwesome5 name="facebook-square" size={20} color="#fff" />
                <Text style={styles.buttonText}>Sign up with Facebook</Text>
                </TouchableOpacity>
                </View>
                {/* Apple Button */}
                <View style={styles.buttonContainer}>
                <TouchableOpacity 
                onPress={() => this.props.user_login()}
                activeOpacity={.5}
                style={[styles.button,{
                    backgroundColor: '#A3AAAE'
                }]}>
                <FontAwesome5 name="apple" size={20} color="#fff" />
                <Text style={styles.buttonText}>Sign up with Apple</Text>
                </TouchableOpacity>
                </View>
                 {/* Horizontal Line */}
                 <View style={{height: 1, backgroundColor: '#fff', marginVertical: 10 }} />
                {/* Email Button */}
                <View style={styles.buttonContainer}>
                <TouchableOpacity 
                onPress={() => this.props.user_login()}
                activeOpacity={.5}
                style={[styles.button,{
                    backgroundColor: '#1A1A1A'
                }]}>
                <FontAwesome5 name="envelope" size={20} color="#fff" />
                <Text style={styles.buttonText}>Sign up with Email</Text>
                </TouchableOpacity>
                </View>
                {/* Email Button */}
                <View style={styles.buttonContainer}>
                <TouchableOpacity 
                onPress={() => this.props.user_login()}
                activeOpacity={.5}
                style={[styles.button,{
                    backgroundColor: 'transparent'
                }]}>
                <Text style={[styles.buttonText,{
                    fontWeight: 'normal'
                }]}>
                Already have an account?
                <React.Fragment>
                <Text style={{fontWeight: 'bold'}}>{' '}Sign In</Text>
                </React.Fragment>
                </Text>
                </TouchableOpacity>
                </View>
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
    },
    buttonContainer:{
        paddingHorizontal: 0,
        paddingVertical: 4,
        backgroundColor: 'transparent',
        height: 54,
        
    },
    button:{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold',
        paddingHorizontal: 10
    }
})


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => {
    return{
    user_login: () => dispatch(user_login())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)
