import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';

export default function Map({navigation}) {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
            latitude: 24.8773559,
            longitude: 67.2801129,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
      style={styles.map} />

<Button
        onPress={() => navigation.navigate('Home')}
        title="Confirm"
        color="blue"
        style={{marginTop:30}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});