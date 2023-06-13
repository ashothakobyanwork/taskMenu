import React from 'react';
import {Recipes} from '../../../models/dishes';
import {Pressable, StyleSheet, View} from 'react-native';
import {AppText} from '../uiKit/AppText';
import {theme} from '../../styles/theme';
import {SvgIcon} from '../SvgIcon';

interface Props extends Recipes {
  done: boolean;
  setCurrentecipeState: (stap: number) => void;
}

export const RecipeStep: React.FC<Props> = ({
  step,
  description,
  done,
  setCurrentecipeState,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.nestedWrapper, done && styles.doneNestedWrapper]}>
        {!done && (
          <SvgIcon
            name="dotesLine"
            width={4}
            height={'100%'}
            style={styles.svgIcon}
          />
        )}
        <Pressable
          onPress={() =>
            setCurrentecipeState(done ? Number(step) - 1 : Number(step))
          }
          style={[styles.circkle, done && styles.doneCirckle]}>
          {done && <SvgIcon name="doneIcon" size={13} />}
        </Pressable>
        <AppText variant="h6" fontWeight="medium">
          Step {step}
        </AppText>
        <AppText variant="p3" color={theme.colors.gray} fontWeight="medium">
          {description}
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circkle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: theme.colors.accent,
    position: 'absolute',
    left: -14,
    top: -28,
    zIndex: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneCirckle: {
    backgroundColor: theme.colors.accent,
    borderWidth: 1,
  },
  wrapper: {
    padding: 20,
    paddingBottom: 10,
  },
  nestedWrapper: {
    paddingLeft: 30,
    borderLeftWidth: 1,
  },
  doneNestedWrapper: {
    borderLeftColor: theme.colors.accent,
  },
  svgIcon: {position: 'absolute', left: -2.5},
});
