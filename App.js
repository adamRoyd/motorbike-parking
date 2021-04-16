import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, Image } from 'react-native';
import MapView, { Marker, Callout, CalloutSubview } from 'react-native-maps';
import CustomCallout from './CustomCallout';
import Card from './components/Card';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width - 20;

export default function App() {

  const [isCardVisible, setCardVisibility] = useState(false);

  const [region, setRegion] = useState({
    latitude: 50.8289,
    longitude: -0.1400,
    latitudeDelta: 0.006,
    longitudeDelta: 0.006
  });

  const onMarkerPress = (mapEventData) => {
    const markerID = mapEventData._targetInst.return.key;
    setCardVisibility(true);
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={region => setRegion(region)}>
        <Marker
          coordinate={{ latitude: 50.8289, longitude: -0.1400 }}
          calloutOffset={{ x: -8, y: 28 }}
          calloutAnchor={{ x: 0.5, y: 0.4 }}
          onPress={(e) => onMarkerPress(e)}
          On={() => setCardVisibility(false)}
        >
          {/* <Callout
            alphaHitTest
            tooltip
            onPress={e => {
              if (
                e.nativeEvent.action === 'marker-inside-overlay-press' ||
                e.nativeEvent.action === 'callout-inside-press'
              ) {
                return;
              }
            }}
          >
            <CustomCallout>
              <Text>Click me test</Text>
            </CustomCallout>
          </Callout> */}
        </Marker>
      </MapView>
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search here"
          placeholderTextColor="#000"
          autoCapitalize="none"
          style={{ flex: 1, padding: 0 }}
        />
      </View>
      <StatusBar style="auto" />
      {isCardVisible &&
        <Card />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 40 : 30,
    flexDirection: "row",
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  card: {
    elevation: 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardtitle: {
    fontSize: 13,
    // marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
});
