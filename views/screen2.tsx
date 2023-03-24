import React, { ReactElement, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { DefaultStackScreenProps } from './nav-types';
import { SimpleButton } from '../components/SimpleButton';
import colors from '../theme/colors';
import metrics from '../theme/metrics';

type Props = DefaultStackScreenProps<'Screen2'>;

export function Screen2(props: Props): ReactElement<Props> {
  const counterRef = useRef(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 2 Body</Text>
      <View style={styles.buttonContainer}>
        <SimpleButton
          title="Go back"
          onPress={() => {
            props.navigation.goBack();
          }}
          style={styles.backButton}
          secondary
        />
        <SimpleButton
          title="Go To Screen 3"
          onPress={() => {
            counterRef.current += 1;
            props.navigation.navigate('Screen3', {
              counter: counterRef.current,
            });
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', margin: metrics.baseMargin },
  buttonContainer: { flexDirection: 'row', width: '100%', justifyContent: 'space-between' },
  backButton: { marginRight: metrics.baseMargin },
  title: {
    fontSize: metrics.titleFontSize,
    color: colors.title,
  },
});
