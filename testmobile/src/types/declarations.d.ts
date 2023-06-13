declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

export declare enum AsyncStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  FAIL = 'error',
}

export declare type UnknownFunction = (...args: unknown[]) => unknown;
