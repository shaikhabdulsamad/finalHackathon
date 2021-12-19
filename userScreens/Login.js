import React from 'react'
import { KeyboardAvoidingView, View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { useState, useEffect } from 'react';
import { auth, data, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, ref, set  } from '../config/firebase';
import Logo from '../assets/logo.png'

export default function Login({navigation}) {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
     console.log(user)
    
     set(ref(data, 'users'), {
       email: email,
        
      })
      setEmail('')
      setPassword('')
    })
    .catch((error) => {
      console.log(error)
    });
}
const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
     console.log(user)
     setEmail('')
      setPassword('')
    })
    .catch((error) => {
      console.log(error)
    });
}

useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            navigation.navigate('Home')
        }
      });
}, [])
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
<View>
<Image source={Logo} style={{ width: 305, height: 159 }} /> 
</View>
            <View>
            
                <Text style={styles.loginHeading}>Log In / Register</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text=>setEmail(text)}
                    style={styles.input}
                />
                
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text=>setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
                <TouchableOpacity
                style={styles.forgot}
                >
                    forgot password?</TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSignIn}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonOutline}
                    onPress={handleSignUp}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    loginHeading: {
        marginTop: 30,
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputContainer: {
        width: '80%',
        marginTop: 20,
    },
    input: {
        backgroundColor: 'lightgrey',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: '60%',
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        backgroundColor: 'blue',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        alignItems:'center'
    },
buttonText:{
    color:'white',
    fontSize: 16,
    fontWeight:700
},
    buttonOutline:{
        backgroundColor: 'white',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        borderColor: 'blue',
        borderWidth: 2,
        marginTop:10,
        alignItems:'center'
    },
buttonOutlineText:{
    color:'blue',
    fontSize: 16,
    fontWeight:700
},
forgot:{
    color:'blue',
    fontSize: 14,
    marginTop: 5
}

});