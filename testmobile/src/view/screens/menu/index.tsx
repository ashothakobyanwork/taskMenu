import React, {useCallback, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';

import {MainContainer} from '../../components/MainContainer';
import {AppText} from '../../components/uiKit/AppText';
import {getResponsiveHeight} from '../../../utils/responsive';
import {Avatar} from '../../components/avatar';

import {CategoriItem} from '../../components/categoriItem';
import {DishItem} from '../../components/dishItem';
import {useMenu} from './hooks';
import {MenuListHeader} from '../../components/menuListHeader/index';
import {filerSelectedCategories} from '../../../utils/menu';

export const Menu = () => {
  const {
    changeSelectedCategoriesHandler,
    categories,
    selectedCategories,
    dishes,
  } = useMenu();
  const [showCatrgories, setShowCategories] = useState<boolean>(true);

  const onSettingsPressHandler = useCallback(() => {
    setShowCategories(!showCatrgories);
  }, [showCatrgories]);

  return (
    <MainContainer withPadding>
      <View style={styles.mainContainer}>
        <View style={styles.userInfoWrapper}>
          <AppText style={styles.text} variant="h3">
            Hello,{`\n`}Kristin 👋
          </AppText>
          <Avatar />
        </View>

        <View style={styles.categoriesContainer}>
          {showCatrgories && (
            <ScrollView horizontal>
              {categories?.map(categori => (
                <CategoriItem
                  isSelcted={selectedCategories.includes(categori.id)}
                  data={categori}
                  key={categori.id}
                  onPress={changeSelectedCategoriesHandler}
                />
              ))}
            </ScrollView>
          )}
        </View>

        <FlatList
          ListHeaderComponent={
            <MenuListHeader
              count={dishes.length}
              categories={filerSelectedCategories(
                selectedCategories,
                categories,
              )}
              onSettingsPressHandler={onSettingsPressHandler}
            />
          }
          contentContainerStyle={styles.flatlistContainer}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          data={dishes}
          renderItem={({item}) => <DishItem {...item} />}
          style={styles.flatlist}
        />
      </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  text: {
    textAlign: 'left',
  },
  image: {
    height: getResponsiveHeight(66),
    width: getResponsiveHeight(66),
    borderRadius: 50,
  },
  pictureWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoriesContainer: {
    marginTop: getResponsiveHeight(15),
    marginBottom: getResponsiveHeight(15),
    height: 40,
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flatlist: {
    flexGrow: 1,
  },
  flatlistContainer: {
    gap: 15,
    marginTop: getResponsiveHeight(20),
    paddingBottom: 30,
  },
});
