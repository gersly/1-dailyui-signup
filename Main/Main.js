import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import AppStack from '../navigation/AppStack';
import AuthStack from '../navigation/AuthStack';
import { connect } from 'react-redux'


class Main extends Component {
    render() {
        const {user} = this.props
        console.log("user is", user)
        return (
            <View style={styles.container}>
            {user.user_token?
               <AppStack /> :

             <AuthStack />
            }
           
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
