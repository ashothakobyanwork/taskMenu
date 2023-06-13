import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {AppText} from '../uiKit/AppText';
import {CategoriesModel} from '../../../models/categories';
import {SvgIcon} from '../SvgIcon';

interface Props {
  count: number;
  categories: CategoriesModel[];
  onSettingsPressHandler: () => void;
}

export const MenuListHeader: React.FC<Props> = ({
  count,
  categories,
  onSettingsPressHandler,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.nestedWrapper}>
        <AppText variant="h6">{count}</AppText>
        {categories.length ? (
          categories.map(categorie => (
            <AppText key={categorie.id} variant="h6">
              {' '}
              {categorie.name}
            </AppText>
          ))
        ) : (
          <AppText variant="h6"> All</AppText>
        )}
      </View>
      <Pressable onPress={onSettingsPressHandler}>
        <SvgIcon name="seatingsIcon" size={25} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {flexDirection: 'row', justifyContent: 'space-between'},
  nestedWrapper: {
    flexDirection: 'row',
  },
});
