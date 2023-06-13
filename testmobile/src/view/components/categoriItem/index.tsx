import React from 'react';
import {CategoriesModel} from '../../../models/categories';
import {AppText} from '../uiKit/AppText';
import {Pressable, StyleSheet} from 'react-native';
import {
  getResponsiveHeight,
  getResponsiveWidth,
} from '../../../utils/responsive';
import {theme} from '../../styles/theme';

interface Props {
  data: CategoriesModel;
  isSelcted: boolean;
  onPress: (id: number) => void;
}

export const CategoriItem: React.FC<Props> = ({data, isSelcted, onPress}) => {
  return (
    <Pressable
      onPress={() => onPress(data.id)}
      style={[styles.container, isSelcted && styles.selectedConatiner]}>
      <AppText
        variant="p1"
        color={isSelcted ? theme.colors.secondary : theme.colors.white}>
        {data.name}
      </AppText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: theme.colors.white,
    paddingHorizontal: getResponsiveWidth(20),
    paddingVertical: getResponsiveHeight(5),
    borderRadius: 50,
    marginRight: getResponsiveWidth(10),
    opacity: 0.5,
  },
  selectedConatiner: {
    opacity: 1,
    borderColor: theme.colors.secondary,
  },
});
