
import React from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function LandingScreen({ navigation }) {
    return (
        <ImageBackground source={require('../assets/AppBackground.png')} style={styles.backgroundContainer}>
            <ScrollView>
                <View style={styles.container}>
                    <TouchableOpacity>
                        <FontAwesomeIcon icon={ faBars } color={'white'} size={35} style={{ marginTop: 60, marginLeft: 300 }} onPress={() => navigation.navigate('Restaurant Login Screen')}/>
                    </TouchableOpacity>
                    <Image style={styles.HangryLogo} source={ require("../assets/HangryLogo.png") } />
                    <TouchableOpacity style={styles.EnterApplicationButton} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.EnterApplicationText}>Enter Application</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1
    },
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    HangryLogo: { 
        width: 350,
        height: 550,
        resizeMode: 'cover',
    },
    EnterApplicationButton: {
        alignSelf: 'center',
        width: "55%",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 15,
        padding: 15,
        bottom: 150
    },
    EnterApplicationText: {
        fontWeight: 'bold',
        color: '#9a5151',
        fontSize: 18
    }
});
