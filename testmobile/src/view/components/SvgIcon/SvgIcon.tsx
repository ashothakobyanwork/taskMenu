import React, {FC} from 'react';
import {ViewStyle} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {svgSprite} from '../../../view/assets/icons/svg-sprite';

export type IconName = keyof typeof svgSprite;

interface SvgIconProps {
  name: IconName;
  width?: number;
  height?: number | string;
  size?: number;
  fill?: string;
  style?: ViewStyle;
  stroke?: string;
}

export const SvgIcon: FC<SvgIconProps> = ({
  name,
  width,
  size,
  height,
  ...props
}) => {
  return (
    <SvgXml
      xml={svgSprite[name]}
      width={size ?? width}
      height={size ?? height}
      {...props}
    />
  );
};
