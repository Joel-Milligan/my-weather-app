import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { StaticDropDown } from '../components/StaticDropDown';
import { SettingsActions, Unit } from '../reducers/settings/reducer';
import { RootState } from '../store';
import { metrics } from '../theme/metrics';

export function SettingsScreen() {
  const settings = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>Units</Text>
      <StaticDropDown
        options={['Celcius', 'Farenheit', 'Kelvin']}
        selected={settings.units}
        onSelectItem={(item: Unit) => dispatch(SettingsActions.setUnits(item))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: metrics.baseMargin,
  },
});
