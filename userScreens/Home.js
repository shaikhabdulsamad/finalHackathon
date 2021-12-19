import React from 'react'
import { View, StyleSheet, Text, Button, Image } from 'react-native'
import { auth, signOut } from '../config/firebase';
import Logo from '../assets/logo.png'

export default function Home({ navigation }) {

  const Logout = () => {
    signOut(auth).then(() => {
      navigation.navigate('Login')
    }).catch((error) => {
      // An error happened.
    });

  }



  return (
    <View style={styles.container}>
      <View>
        <Image source={Logo} style={{ width: 305, height: 159, marginTop:30 }} />
      </View>
      <Text style={{ marginTop:30, fontWeight: 600, fontSize: 20, }}>Welcome to our new App!</Text>
      <Button
        onPress={() => navigation.navigate('Form')}
        title="Apply for help"
        color="blue"
        style={{marginTop:30}}
      />
        <Button
               onPress={() => navigation.navigate('PendingCard')}
          title="View Card"
          color="blue"
          style={styles.Btn}
        />
        <Button
          onPress={Logout}
          title="Logout"
          color="blue"
          style={styles.Btn}
        />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   
  },
})
