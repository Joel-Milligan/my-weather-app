import { ReactElement, useMemo } from 'react';
import { Text } from 'react-native';

interface Props {
  bigArray: number[];
}

export function Accumulator(props: Props): ReactElement<Props> {
  const allAdded = useMemo(() => props.bigArray.reduce((a, b) => a + b, 0), [props.bigArray]);
  return <Text>{allAdded}</Text>;
}
