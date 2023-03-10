import { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, Text } from 'react-native';

export function ShowRandomNumber() {
  const [result, setResult] = useState<number | undefined>();

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (result === undefined) {
      fetchRandomNumber()
        .then((res) => {
          if (isMounted.current) setResult(res);
          else Alert.alert("Didn't set state");
        })
        .catch((err) => {
          if (isMounted.current) setResult(undefined);
          console.warn(err);
        });
    }
  }, [result]);

  const onPress = useCallback(() => {
    setResult(undefined);
  }, []);

  if (result === undefined) return <Text>Waiting on a number</Text>;

  return <Text onPress={onPress}>{`Random number: ${result}`}</Text>;
}

async function fetchRandomNumber(): Promise<number> {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve(Math.trunc(Math.random() * 100));
    }, 1500),
  );
}
