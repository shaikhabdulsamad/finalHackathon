import React from 'react'
import { KeyboardAvoidingView, View, StyleSheet, Text, TextInput, TouchableOpacity, Button } from 'react-native'
import { useState, useEffect } from 'react';
import { auth, signOut, onAuthStateChanged, ref, set, db, collection, addDoc, firestore, doc, setDoc } from '../config/firebase';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

export default function Form({ navigation }) {
  const [name, setName] = useState('')
  const [fname, setFname] = useState('')
  const [cnic, setCnic] = useState('')
  const [dob, setDob] = useState('')
  const [members, setMembers] = useState('')
  const [income, setIncome] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState(null);


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const Submit = async () => {

    const docRef = await addDoc(collection(firestore, "users"), {
      Name: name,
      FName: fname,
      CNIC: cnic,
      DoB: dob,
      Members: members,
      category: category,
      income: income,
      image: image,
    })
      // console.log("Document written with ID: ", docRef.id);

      // await setDoc(doc(firestore, "users/" + ), {
      //   Name: name,
      //   FName: fname,
      //   CNIC: cnic,
      //   DoB: dob,
      //   Members: members,
      //   category: category,
      //   income: income,
      //   image: image,
      // })

      .then(() => {

        setName('')
        setFname('')
        setCnic('')
        setDob('')
        setMembers('')
        setIncome('')

      })
  }

 

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >

      <View>
        <Text style={styles.loginHeading}>Application Form</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Father Name"
          value={fname}
          onChangeText={text => setFname(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="CNIC Number"
          value={cnic}
          onChangeText={text => setCnic(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Date of Birth"
          value={dob}
          onChangeText={text => setDob(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Family Members"
          value={members}
          onChangeText={text => setMembers(text)}
          style={styles.input}
        />
        <Picker
          style={styles.input}
          selectedValue={category}
          onValueChange={(itemValue, itemIndex) =>
            setCategory(itemValue)
          }>
          <Picker.Item label="Monthly Rashan" value="Monthly Rashan" />
          <Picker.Item label="Daily 1 time" value="Daily 1 time" />
          <Picker.Item label="Daily 2 times" value="Daily 2 times" />
          <Picker.Item label="Daily 3 times" value="Daily 3 times" />
        </Picker>

        <TextInput
          placeholder="Monthly Income"
          value={income}
          onChangeText={text => setIncome(text)}
          style={styles.input}
        />


      </View>

      <View>
      <TouchableOpacity
          style={styles.button}
          onPress={pickImage}
        >
          <Text style={styles.buttonText}>Pick an image from camera roll</Text>
        </TouchableOpacity>

        {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={Submit}
        >
          <Text style={styles.buttonText}>Submit</Text>
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
  button: {
    backgroundColor: 'blue',
    width: '100%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 700
  },
  buttonOutline: {
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    borderRadius: 10,
    borderColor: 'blue',
    borderWidth: 2,
    marginTop: 10,
    alignItems: 'center'
  },
  buttonOutlineText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 700
  },
  forgot: {
    color: 'blue',
    fontSize: 16,
    marginTop: 5
  },
  pickBtnText: {
    color: 'grey',
    fontSize: 16,

  },
  pickBtn: {
    backgroundColor: 'lightgrey',
    width: '100%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
})
