import React, { useState } from 'react'
import { View, Text, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLongArrowAltLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function RestaurantLoginScreen({ navigation }) {

    const [inputPassword, setPassword] = useState('');

    return (
        <ImageBackground source={require('../assets/AppBackground.png')} style={styles.backgroundContainer}>
            <ScrollView>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.BackButtonContainer} onPress={() => navigation.goBack()}>
                        <FontAwesomeIcon icon={ faLongArrowAltLeft } color={'white'} size={30}/>
                        <Text style={styles.GoBackText}>Go Back</Text>
                    </TouchableOpacity>   
                    <Text style={styles.EnterPasswordText}>Enter Password:</Text>
                    <View style={styles.InputContainer}>
                        <TextInput value={inputPassword} onChangeText = {(inputPassword) => setPassword(inputPassword)} placeholder="Password" secureTextEntry={true} style={styles.PasswordInputBox}></TextInput>
                        <TouchableOpacity>
                            <FontAwesomeIcon icon={ faArrowRight } color={'white'} size={40} style={styles.SubmitIcon} onPress={() => {
                                                                                                                                        if(inputPassword == "12345") 
                                                                                                                                        {
                                                                                                                                            navigation.navigate('Restaurant_waitlist');
                                                                                                                                            console.log("Password is Correct")
                                                                                                                                        }
                                                                                                                                        else
                                                                                                                                        {
                                                                                                                                            console.log("Password is Incorrect")
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                               }
                            />
                        </TouchableOpacity>
                    </View>
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
        justifyContent: 'center',
        top: 350
    },
    BackButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        bottom: 300,
        right: 120
    }, 
    GoBackText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
        alignSelf: 'center'
    },
    EnterPasswordText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    InputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    PasswordInputBox: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        width: "70%",
        margin: 20,
        backgroundColor: "#FBFBFF",
        borderRadius: 5,
        color: 'black'
    },
    SubmitIcon: {
        marginRight: 10
    }
});

