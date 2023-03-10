import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Accumulator } from './components/Accumulator';
import { Counter } from './components/Counter';
import { Modal } from './components/ModalDialog';
import { OptionsList } from './components/OptionsList';
import { SimpleButton } from './components/SimpleButton';
import images from './themes/images';

interface HelloWorldProps {
  shouldRenderWorld: boolean;
}

const HelloWorld = (props: HelloWorldProps) => (
  <View style={styles.view}>
    <Text style={styles.text}>Hello</Text>
    {props.shouldRenderWorld && <Text style={styles.text}>World</Text>}
  </View>
);

export default function App() {
  const [showDialog, setShowDialog] = useState(true);

  return (
    <View style={styles.container}>
      <HelloWorld shouldRenderWorld />
      <SimpleButton title="Show Modal" onPress={() => setShowDialog(true)} />
      <OptionsList
        title="Settings"
        rows={[
          { title: 'Notifications', leftIcon: images.favIcon },
          { title: 'Sounds & Haptics', leftIcon: images.favIcon },
          { title: 'Focus', leftIcon: images.favIcon },
          { title: 'Screen Time', leftIcon: images.favIcon },
        ]}
      />
      <Modal
        title="Success"
        content={{
          type: 'standard',
          text: 'You have successfully completed the survey! You are one step closer to becoming a mobile phone. Great work!',
        }}
        show={showDialog}
        dismissButton={{ title: 'Dismiss', onDismiss: () => setShowDialog(false) }}
      />
      <Counter />
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
