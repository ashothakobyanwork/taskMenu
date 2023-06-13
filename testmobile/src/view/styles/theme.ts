import {getResponsiveValue} from '../../utils/responsive';
import {Theme} from './types';

const layout = {
  padding: 20,
};

const colors: Theme['colors'] = {
  primary: '#11151E',
  secondary: '#FFE598',
  accent: '#D6FC51',
  white: '#ffffff',
  blue: '#141D2A',
  gray: '#808080',
};

export const theme: Theme = {
  colors,

  fontFamily: {
    regular: 'MavenPro-Regular',
    medium: 'MavenPro-Medium',
    semiBold: 'MavenPro-VariableFont_wght',
    bold: 'MavenPro-Bold',
  },
  text: {
    h1: {
      fontFamily: 'MavenPro-Bold',
      fontSize: getResponsiveValue(34),
      lineHeight: getResponsiveValue(48),
    },
    h2: {
      fontFamily: 'MavenPro-Bold',
      fontSize: getResponsiveValue(29),
      lineHeight: getResponsiveValue(42),
    },
    h3: {
      fontFamily: 'MavenPro-Bold',
      fontSize: getResponsiveValue(26),
      lineHeight: getResponsiveValue(36),
    },
    h4: {
      fontFamily: 'MavenPro-Bold',
      fontSize: getResponsiveValue(21),
      lineHeight: getResponsiveValue(32),
    },
    h5: {
      fontFamily: 'MavenPro-Bold',
      fontSize: getResponsiveValue(19),
      lineHeight: getResponsiveValue(30),
    },
    h6: {
      fontFamily: 'MavenPro-Bold',
      fontSize: getResponsiveValue(17),
      lineHeight: getResponsiveValue(25),
    },
    p1: {
      fontFamily: 'MavenPro-Medium',
      fontSize: getResponsiveValue(15),
      lineHeight: getResponsiveValue(24),
    },
    p2: {
      fontFamily: 'MavenPro-Regular',
      fontSize: 0,
      lineHeight: 0,
    },
    p3: {
      fontFamily: 'MavenPro-Regular',
      fontSize: getResponsiveValue(13),
      lineHeight: getResponsiveValue(26),
    },
    p4: {
      fontFamily: 'MavenPro-Regular',
      fontSize: getResponsiveValue(12),
      lineHeight: getResponsiveValue(21),
    },
    p5: {
      fontFamily: 'MavenPro-Medium',
      fontSize: getResponsiveValue(12),
      lineHeight: getResponsiveValue(21),
    },
    p6: {
      fontFamily: 'MavenPro-Regular',
      fontSize: getResponsiveValue(10),
      lineHeight: getResponsiveValue(16),
    },
  },
};

export enum FontFamily {
  REGULAR = 'MavenPro-Regular',
  MEDIUM = 'MavenPro-Medium',
  SEMI_BOLD = 'MavenPro-VariableFont_wght',
  BOLD = 'MavenPro-Bold',
}

export {colors, layout};
