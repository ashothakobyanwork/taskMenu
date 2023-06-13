import {useNavigation} from '@react-navigation/native';
import React, {ReactElement} from 'react';
import {Pressable, View, ViewStyle} from 'react-native';
import {SvgIcon} from '../SvgIcon';
import {AppText} from '../uiKit/AppText';
import {makeStyles} from '../../../view/styles/types';
import {
  getResponsiveHeight,
  getResponsiveWidth,
} from '../../../utils/responsive';

interface Props {
  text?: string;
  goBack?: () => void;
  style?: ViewStyle;
  rightElement?: ReactElement;
}

export const StackHeader: React.FC<Props> = ({
  text,
  goBack,
  style,
  rightElement,
}) => {
  const styles = useStyles();
  const navigation = useNavigation();

  const handleBack = (): void => {
    if (goBack) {
      goBack();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={[styles.container, style]}>
      <Pressable onPress={handleBack} style={styles.backBtn} hitSlop={15}>
        <SvgIcon name="backIcon" height={18} width={18} />
      </Pressable>
      {text && (
        <AppText variant="h5" fontWeight="medium">
          {text}
        </AppText>
      )}
      {rightElement && <View style={styles.rightElement}>{rightElement}</View>}
    </View>
  );
};

const useStyles = makeStyles({
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    height: getResponsiveHeight(50),
  },
  backBtn: {
    marginLeft: getResponsiveWidth(3),
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: getResponsiveWidth(0),
  },
  rightElement: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: getResponsiveWidth(0),
    top: getResponsiveHeight(12),
  },
});
