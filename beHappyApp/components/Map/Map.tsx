import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

interface State {
  latitude: number;
  longitude: number;
}

class Map extends React.Component {
  state: State = {
    latitude: 37.52,
    longitude: 126.97,
  };

  componentDidMount() {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status === 'granted') {
        let location = await Location.getCurrentPositionAsync({});
        console.log(location);
        let latitude = location.coords.latitude;
        let longitude = location.coords.longitude;
        this.setState({ latitude, longitude });
      }
    })();
  }

  render() {
    const { latitude, longitude } = this.state;
    return (
      <View style={{ width: '100%', height: '100%' }}>
        <Text>map</Text>
        <MapView
          style={styles.map}
          showsUserLocation={false}
          zoomEnabled={true}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: latitude, longitude: longitude }}
            pinColor='#000000'
            image={require('../../assets/mylocation.png')}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  text: {
    fontSize: 30,
  },
});

export default Map;
