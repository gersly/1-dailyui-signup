import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux'
import MasonryList from "react-native-masonry-list";
import {user_logout} from '../../actions/user'


const screen = Dimensions.get("screen");

class ChooseYourDaily extends Component {

    state = {
        images: [
            {
                uri: "https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                title: "Boxing"
            },
            {
                uri: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=626&q=80",
                title: "Yoga"
            },
            {
                uri: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                title: "Interval"
            },
            {
                uri: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                title: "Gym"
            },
            {
                uri: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                title: "Training"
            },
            {
                uri: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
                title: "Ropes"
            },
            {
                uri: 'https://images.unsplash.com/photo-1540539234-c14a20fb7c7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                title: 'Running'
            },
            {
                uri: 'https://images.unsplash.com/photo-1514994667787-b48ca37155f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=759&q=80',
                title: 'Jump Rope'
            }
        ]
    }

    getRandomHeight = () => {
        return Math.floor(Math.random() * 240) + 150
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={[styles.title,{
                    textTransform: 'none', textAlign: 'center', margin: 12
                }]}>Choose your daily</Text>
                <TouchableOpacity
                onPress={() => this.props.user_logout()}
                >
                <Text style={[styles.title,{
                    textTransform: 'none', 
                    textAlign: 'center',
                     margin: 2,
                     fontSize: 14
                }]}>or click here log out</Text>
                </TouchableOpacity>
                <MasonryList
                    containerWidth={screen.width}
                    backgroundColor={'#000'}
                    spacing={1}
                    images={this.state.images}
                    completeCustomComponent={(image) =>
                        <View style={{ marginHorizontal: 2, marginVertical: 2 }}>
                            <ImageBackground source={image.source} style={[styles.image, { height: this.getRandomHeight() }]}>
                                <LinearGradient
                                    colors={['rgba(0,0,0,0.25)', 'rgba(0,0,0,.5)', 'rgba(0,0,0,.5)','rgba(0,0,0,.5)', 'rgba(0,0,0,0.25)']}
                                    style={{
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        top: 0,
                                        height: '100%',
                                    }}
                                />
                                <View style={styles.introContainer}>
                                    <Text style={styles.title}>{image.data.title}</Text>
                                </View>
                            </ImageBackground>
                        </View>

                    }
                // customImageComponent={ (image) =>
                //     <View style={{margin: 2}}>
                //       {console.log("props for custom comp", image)} 
                //      <ImageBackground source={image.source} style={[styles.image,{ height: this.getRandomHeight()}]}>
                //      <LinearGradient
                //      colors={['rgba(0,0,0,0.9)', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.9)']}
                //      style={{
                //        position: 'absolute',
                //        left: 0,
                //        right: 0,
                //        top: 0,
                //        height: '100%',
                //      }}
                //    />
                //    <View style={styles.introContainer}>
                //    <Text style={styles.title}>hi</Text>
                //    </View>
                //  </ImageBackground>
                //     </View>
                // }
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        padding: 10,
    },
    image: {
        width: screen.width / 2,
    },
    introContainer: {
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        paddingVertical: 4,
        textTransform: 'uppercase'
    },
})

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => {
    return{
    user_logout: () => dispatch(user_logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseYourDaily)
