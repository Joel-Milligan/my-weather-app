import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { SimpleButton } from './components/simple-button';

interface HelloWorldProps {
  shouldRenderWorld: boolean;
}

function HelloWorld(props: HelloWorldProps) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Hello</Text>
      {props.shouldRenderWorld && <Text style={styles.text}>World</Text>}
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <HelloWorld shouldRenderWorld />
      <SimpleButton title="Primary" />
      <SimpleButton title="Secondary" secondary />
      <SimpleButton title="Disabled" disabled />
      <StatusBar style="auto" />
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
  view: {
    width: '100%',
    alignItems: 'center',
    padding: 15,
  },
  text: {
    width: '100%',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
