import { useCallback, useEffect, useState } from 'react';
import { Alert, Text } from 'react-native';

import { useIsMounted } from '../utils/common-hooks';

export function ShowRandomNumber() {
  const [result, setResult] = useState<number | undefined>();

  const isMounted = useIsMounted();

  useEffect(() => {
    if (result == null) {
      fetchRandomNumber()
        .then((res) => {
          if (isMounted()) setResult(res);
          else Alert.alert("Didn't set state");
        })
        .catch((err) => {
          if (isMounted()) setResult(undefined);
          console.warn(err);
        });
    }
  }, [isMounted, result]);

  const onPress = useCallback(() => {
    setResult(undefined);
  }, []);

  if (result == null) return <Text>Waiting on a number</Text>;

  return <Text onPress={onPress}>{`Random number: ${result}`}</Text>;
}

async function fetchRandomNumber(): Promise<number> {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve(Math.trunc(Math.random() * 100));
    }, 1500),
  );
}
