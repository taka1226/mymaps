import React, { Component, useState, useEffect } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Dimensions,
  View
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation, {
    GeolocationResponse,
} from '@react-native-community/geolocation';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export default class MyApp extends React.Component {
//   constructor(props){
//       super(props);
//       this.state = {
//         position:{
//             latitude: 0,
//             longitude: 0,
//             accuracy: 0,
//             altitude: 0,
//             altitudeAccuracy: 0,
//             heading: 0,
//             speed: 0
//         }
//       };
//   }
  render() {
    const { region } = this.props;

    Geolocation.getCurrentPosition(
        position => console.log(position),
        error => alert(err.message),
        {enableHighAccuracy: true, timeout: 10000, maximumAge:10000}
    )

    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 34.678752,
            longitude: 135.5187431,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
        <Marker
            coordinate={{
                latitude: 34.678752,
                longitude:  135.5187431
            }}
        />
         </MapView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
