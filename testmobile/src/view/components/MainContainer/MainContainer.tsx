import React, {FC, PropsWithChildren} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  getResponsiveHeight,
  getResponsiveWidth,
} from '../../../utils/responsive';
import {theme} from '../../styles/theme';

type MainContainerProps = PropsWithChildren<{
  backgroundColor?: string;
  withPadding?: boolean;
  withBottomInset?: boolean;
  statusBarColor?: string;
}>;

export const MainContainer: FC<MainContainerProps> = ({
  backgroundColor = theme.colors.primary,
  withPadding,
  withBottomInset = true,
  children,
  statusBarColor = theme.colors.white,
}) => {
  const {top, bottom} = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.main,
        {backgroundColor},
        withPadding && {paddingHorizontal: getResponsiveWidth(15)},
        {
          paddingTop: getResponsiveHeight(top + 8),
          paddingBottom: getResponsiveHeight(withBottomInset ? bottom : 0),
        },
      ]}>
      <StatusBar
        animated
        barStyle="dark-content"
        backgroundColor={statusBarColor}
      />
      <View
        style={{
          flex: 1,
        }}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
