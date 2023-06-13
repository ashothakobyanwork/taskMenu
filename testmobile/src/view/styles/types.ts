import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p1'
  | 'p2'
  | 'p3'
  | 'p4'
  | 'p5'
  | 'p6';

export interface TextThemeProps {
  fontFamily: string;
  fontSize: number;
  lineHeight?: number;
}

export type FontWeight = 'regular' | 'medium' | 'semiBold' | 'bold';

export type FontFamily = Record<FontWeight, string>;

export interface Theme {
  colors: {
    primary: string;
    accent: string;
    secondary: string;
    white: string;
    blue: string;
    gray: string;
  };
  fontFamily: FontFamily;
  text: Record<TextVariant, TextThemeProps>;
}

export type NamedStyles<T> = {
  [key in keyof T]: ViewStyle | TextStyle | ImageStyle;
};
export const makeStyles = <
  P extends Record<string, unknown> | void,
  S extends NamedStyles<S>,
>(
  styles: ((props: P) => S) | S,
): ((props: P) => S) => {
  return styles instanceof Function ? styles : () => styles;
};
