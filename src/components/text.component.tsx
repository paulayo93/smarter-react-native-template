// import { COLORS } from '@constants';
// import normalize from '@utils/normalize';
import React from 'react';
import { GestureResponderEvent } from 'react-native';
import {
  StyleSheet,
  Text as RNText,
  TextStyle,
  ViewStyle,
  ImageStyle,
} from 'react-native';

type fontWeight = 'normal' | 'medium' | 'bold';
type variant =
  | 'sub'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'body'
  | 'small';

type TextProps = {
  children: React.ReactNode;
  variant?: variant;
  onPress?: (event: GestureResponderEvent) => void;
  color?: string;
  fontWeight?: fontWeight;
  centered?: boolean;
  style?: {};
};


const Text = (props: TextProps) => {
  const {
    variant = 'body',
    children,
    onPress,
    color,
    fontWeight = 'normal',
    centered = false,
    style,
    ...rest
  } = props;
  return (
    <RNText
      onPress={onPress}
      style={[
        {
          color: color,
          // color: color || COLORS.NEUTRAL._900,
          textAlign: centered ? 'center' : 'left',
          ...textStyles[fontWeight],
          ...textStyles[variant],
          ...style,
        },
      ]}
      {...rest}>
      {children}
    </RNText>
  );
};

type Style = {
  bold: TextStyle;
  medium: TextStyle;
  normal: TextStyle;
  heading0: TextStyle;
  heading1: TextStyle;
  heading2: TextStyle;
  heading3: TextStyle;
  heading4: TextStyle;
  body: TextStyle;
  small: TextStyle;
  sub: TextStyle;
};

const textStyles = StyleSheet.create<Style>({
  bold: {
    fontWeight: '700',
    fontFamily: 'DMSans-Bold',
  },
  medium: {
    fontWeight: '500',
    fontFamily: 'DMSans-Medium',
  },
  normal: {
    fontWeight: 'normal',
    fontFamily: 'DMSans-Regular',
  },
  heading0: {
    // fontSize: normalize(48),
    fontSize: 48,
    lineHeight: 64,
    letterSpacing: -1,
  },
  heading1: {
    // fontSize: normalize(32),
    fontSize: 32,
    lineHeight: 48,
    letterSpacing: -1,
  },
  heading2: {
    // fontSize: normalize(24),
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -1,
  },
  heading3: {
    // fontSize: normalize(20),
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.6,
  },
  heading4: {
    // fontSize: normalize(16),
    fontSize: 16,
    lineHeight: 24,
  },
  body: {
    // fontSize: normalize(14),
    fontSize: 14,
    lineHeight: 20,
  },
  small: {
    // fontSize: normalize(12),
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.000625,
  },
  sub: {
    // fontSize: normalize(10),
    fontSize: 10,
    lineHeight: 16,
  },
});

export default React.memo(Text);
