import { useCallback, useEffect, useState } from 'react';
import { Alert, Text } from 'react-native';

export function Counter() {
  const [counter, setCounter] = useState(0);

  const onPress = useCallback(() => setCounter((count) => count + 1), [setCounter]);

  useEffect(() => {
    if (counter % 10 === 0) Alert.alert(`Count: ${counter}`);
  }, [counter]);

  return <Text onPress={onPress}>{`Count: ${counter}`}</Text>;
}
