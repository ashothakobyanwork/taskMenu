import React, {memo} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {DishesModel} from '~/models/dishes';
import {AppText} from '../uiKit/AppText';
import {theme} from '../../styles/theme';
import {
  getResponsiveHeight,
  getResponsiveWidth,
} from '../../../utils/responsive';
import {useNavigation} from '@react-navigation/native';

export const DishItem: React.FC<DishesModel> = memo(dish => {
  const {image_url, grams, kcal, name, description} = dish;
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('DishDescprition', {...dish})}>
      <Image source={{uri: image_url}} style={styles.image} />
      <View>
        <View style={styles.textWrapper}>
          <AppText color={theme.colors.secondary} variant="p4">
            {grams}g
          </AppText>
          <AppText color={theme.colors.secondary} variant="p4">
            {kcal}cal
          </AppText>
        </View>
        <AppText variant="h5" fontWeight="medium">
          {name}
        </AppText>
        <AppText
          color={theme.colors.gray}
          variant="p2"
          style={styles.descriptionText}>
          {description}
        </AppText>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.blue,
    height: getResponsiveHeight(150),
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: getResponsiveWidth(20),
  },
  image: {
    width: getResponsiveHeight(120),
    height: getResponsiveHeight(120),
    borderRadius: getResponsiveHeight(60),
    resizeMode: 'cover',
    marginRight: getResponsiveWidth(20),
  },
  textWrapper: {flexDirection: 'row', gap: 10},
  descriptionText: {
    maxWidth: getResponsiveWidth(140),
  },
});
