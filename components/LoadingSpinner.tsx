import LottieView from 'lottie-react-native';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import animations from '../theme/animations';
import { metrics } from '../theme/metrics';

const DEFAULT_SPEED = 0.5;

export type LoadingSpinnerSize = 'small' | 'regular' | 'large';

function getAnimationSize(size: LoadingSpinnerSize) {
  switch (size) {
    case 'small':
      return metrics.baseMargin * 6;
    case 'regular':
      return metrics.baseMargin * 12;
    case 'large':
      return metrics.baseMargin * 24;
  }
}

interface Props {
  size?: LoadingSpinnerSize;
}

export default function LoadingSpinner({ size = 'regular' }: Props) {
  const animStyle = useMemo(
    () => ({
      width: getAnimationSize(size),
    }),
    [size],
  );

  return (
    <LottieView source={animations.loading} style={[styles.lottie, animStyle]} speed={DEFAULT_SPEED} autoPlay loop />
  );
}

const styles = StyleSheet.create({
  lottie: {
    alignSelf: 'center',
  },
});
