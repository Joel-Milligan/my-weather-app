import React, { ReactElement, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { DefaultStackScreenProps } from './nav-types';
import { SimpleButton } from '../components/SimpleButton';
import { CollapsibleContainer } from '../components/collapsible-container';
import { GlobalLoaderActions } from '../reducers/global-loader/reducer';
import { colors } from '../theme/colors';
import { metrics } from '../theme/metrics';

type Props = DefaultStackScreenProps<'Screen1'>;

export function Screen1(props: Props): ReactElement {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 1 Body</Text>
      <SimpleButton
        title="Load"
        onPress={() => {
          dispatch(GlobalLoaderActions.show({ cancelMessage: 'Cancel load' }));
        }}
        style={styles.button}
        secondary
      />
      <CollapsibleContainer
        label="Collapsible container"
        collapsed={collapsed}
        toggleCollapsed={() => setCollapsed((prev) => !prev)}
      >
        <Text>Copy and paste</Text>
        <Text>Copy and paste</Text>
        <Text>Copy and paste</Text>
        <Text>Copy and paste</Text>
        <Text>Copy and paste</Text>
        <Text>Copy and paste</Text>
        <Text>Copy and paste</Text>
        <Text>Copy and paste</Text>
        <Text>Copy and paste</Text>
        <Text>Copy and paste</Text>
        <Text>Copy and paste</Text>
        <Text>Copy and paste</Text>
        <Text>Copy and paste</Text>
        <Text>Copy and paste</Text>
        <Text>Copy and paste</Text>
        <Text>Copy and paste</Text>
        <Text>Copy and paste</Text>
        <Text>Copy and paste</Text>
        <SimpleButton
          title="Go To Screen 2"
          onPress={() => {
            props.navigation.navigate('Screen2');
          }}
          style={styles.button}
        />
      </CollapsibleContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: metrics.doubleMargin,
  },
  button: { margin: metrics.baseMargin },
  title: {
    fontSize: metrics.titleFontSize,
    color: colors.title,
  },
});
