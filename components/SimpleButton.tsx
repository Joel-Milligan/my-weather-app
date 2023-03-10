import React, { ReactElement } from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, Text, ViewStyle } from 'react-native';

import colors from '../themes/colors';
import metrics from '../themes/metrics';

/**
 * A sum type which states that the theme can be primary or secondary.
 * If you've not heard of a sum type before, this article may be of interest (although it's not Typescript specific) https://adapptor.com.au/blog/sum-types-in-swift-and-kotlin
 */
export type ButtonTheme = 'primary' | 'secondary' | 'disabled';

interface Props {
  /**
   * The label that will be present on the button
   */
  title: string;

  /**
   * The callback that will be called when the button is pushed. Particularly during development, it's useful to make these callbacks
   * optional so we can build and style it without assigning any actions to the button.
   */
  onPress?: () => void;

  /**
   * An optional styling property. Most commonly used for setting custom width and height of the button
   */
  style?: StyleProp<ViewStyle>;

  /**
   * An optional true|false property which tells us whether or not this button should use a secondary style.
   */
  secondary?: boolean;

  disabled?: boolean;
}

export function SimpleButton(props: Props): ReactElement<Props> {
  const buttonTheme: ButtonTheme = props.disabled ? 'disabled' : props.secondary ? 'secondary' : 'primary';

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles[buttonTheme].container, props.style]}
      disabled={props.disabled}
    >
      <Text style={styles[buttonTheme].title}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const commonStyles = StyleSheet.create({
  container: {
    padding: metrics.largerMargin,
    borderRadius: metrics.borderRadius,
  },
  title: {
    fontSize: metrics.h2FontSize,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const whiteOnRedStyles = StyleSheet.create({
  ...commonStyles,
  container: {
    ...commonStyles.container,
    backgroundColor: colors.buttonRed,
  },
  title: {
    ...commonStyles.title,
    color: colors.buttonWhite,
    fontWeight: 'bold',
  },
});

const redOnWhiteStyles = StyleSheet.create({
  ...commonStyles,
  container: {
    ...commonStyles.container,
    backgroundColor: colors.buttonWhite,
  },
  title: {
    ...commonStyles.title,
    color: colors.buttonRed,
  },
});

const disabledStyles = StyleSheet.create({
  ...commonStyles,
  container: {
    ...commonStyles.container,
    backgroundColor: colors.blankedOutBackground,
  },
  title: {
    ...commonStyles.title,
    color: colors.bodyTextColor,
  },
});

const styles = {
  primary: whiteOnRedStyles,
  secondary: redOnWhiteStyles,
  disabled: disabledStyles,
};
