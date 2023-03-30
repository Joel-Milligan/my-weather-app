import React, { useState } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';

import { WeatherData } from '../components/WeatherData';
import { Locality } from '../reducers/location/reducer';
import { RootState } from '../store';
import { colors } from '../theme/colors';
import { metrics } from '../theme/metrics';

export function WeatherScreen() {
  const [locality, setLocality] = useState<Locality | undefined>();
  const settings = useSelector((state: RootState) => state.settings);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        onLongPress={(event) => {
          setLocality(undefined);
          const locality: Locality = {
            latitude: event.nativeEvent.coordinate.latitude,
            longitude: event.nativeEvent.coordinate.longitude,
          };
          setTimeout(() => {
            setLocality(locality);
          });
        }}
      >
        {locality != null && (
          <Marker style={styles.marker} coordinate={locality}>
            <Callout style={styles.callout}>
              <WeatherData locationDetails={locality} settings={settings} />
            </Callout>
          </Marker>
        )}
      </MapView>
    </View>
  );
}

const buttonStyle: StyleProp<ViewStyle> = {
  width: '40%',
  margin: metrics.baseMargin,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  backButton: {
    ...buttonStyle,
    marginRight: 0,
  },
  nextButton: buttonStyle,
  title: {
    fontSize: metrics.titleFontSize,
    color: colors.title,
  },
  map: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  marker: { margin: metrics.baseMargin },
  callout: { margin: metrics.baseMargin, minWidth: 300 },
});
