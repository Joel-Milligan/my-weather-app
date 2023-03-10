import { useCallback, useState } from 'react';
import { Text } from 'react-native';

export function Counter() {
  const [counter, setCounter] = useState(0);
  const onPress = useCallback(() => setCounter((count) => count + 1), [setCounter]);
  return <Text onPress={onPress}>{`Count: ${counter}`}</Text>;
}
