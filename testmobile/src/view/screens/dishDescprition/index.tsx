import React, {useEffect, useMemo, useRef, useState} from 'react';
import {FlatList, Image, Pressable, StyleSheet, View} from 'react-native';
import {MainContainer} from '../../components/MainContainer/MainContainer';
import {AppText} from '../../components/uiKit/AppText';
import {StackHeader} from '../../components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  getResponsiveHeight,
  getResponsiveWidth,
} from '../../../utils/responsive';
import {theme} from '../../styles/theme';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {RecipeStep} from '../../components/recipeStep';
import {SvgIcon} from '../../components/SvgIcon';
type Props = NativeStackScreenProps<
  ReactNavigation.RootParamList,
  'DishDescprition'
>;

export const DishDescprition: React.FC<Props> = ({route}) => {
  const {name, image_url, kcal, grams, min, serve, products, recipes} =
    route.params;
  const [currentRecipeStap, setCurrentecipeState] = useState<number>(0);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['10%', '25%', '45%'], []);
  const [isFavorit, setIsFavorit] = useState<boolean>(false);

  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  return (
    <MainContainer withPadding>
      <StackHeader
        text={name}
        rightElement={
          <Pressable onPress={() => setIsFavorit(!isFavorit)}>
            <SvgIcon name={isFavorit ? 'heartFull' : 'heartEmpty'} size={30} />
          </Pressable>
        }
      />
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: image_url}} />
        <View style={styles.dishInfo}>
          <AppText
            color={theme.colors.secondary}
            style={styles.descpText}>{`${kcal}\n kcal`}</AppText>
          <AppText
            color={theme.colors.secondary}
            style={styles.descpText}>{`${grams}\n grams`}</AppText>
          <AppText
            color={theme.colors.secondary}
            style={styles.descpText}>{`${min}\n min`}</AppText>
          <AppText
            color={theme.colors.secondary}
            style={styles.descpText}>{`${serve}\n serve`}</AppText>
        </View>
      </View>
      <BottomSheetModal
        topInset={0}
        enablePanDownToClose={false}
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        backgroundStyle={styles.bottomSheetBackground}
        index={1}>
        <View style={styles.modal}>
          <View style={{flexDirection: 'row', gap: 5, marginBottom: 10}}>
            {products.map(product => (
              <View key={product.id} style={styles.productWrapper}>
                <Image
                  style={styles.productImage}
                  source={{uri: product.image_url}}
                />
              </View>
            ))}
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            style={styles.flatlistStyle}
            contentContainerStyle={styles.flatlistContainer}
            data={recipes}
            renderItem={({item}) => (
              <RecipeStep
                setCurrentecipeState={setCurrentecipeState}
                {...item}
                done={currentRecipeStap >= Number(item.step)}
              />
            )}
          />
        </View>
      </BottomSheetModal>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  flatlistStyle: {
    width: '100%',
  },
  flatlistContainer: {
    flexGrow: 0,
    paddingTop: 15,
  },
  image: {
    marginTop: 10,
    height: getResponsiveWidth(200),
    borderColor: 'red',
    width: getResponsiveWidth(200),
    borderRadius: getResponsiveWidth(100),
    resizeMode: 'cover',
  },
  dishInfo: {
    height: getResponsiveHeight(70),
    marginTop: getResponsiveHeight(30),
    width: '100%',
    borderWidth: 0.5,
    borderColor: theme.colors.secondary,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    opacity: 0.6,
  },
  bottomSheetBackground: {backgroundColor: theme.colors.blue, borderRadius: 50},
  descpText: {textAlign: 'center'},
  modal: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: getResponsiveWidth(20),
  },
  productImage: {
    height: getResponsiveHeight(40),
    width: getResponsiveHeight(40),
    borderRadius: 10,
  },
  productWrapper: {
    padding: 8,
    borderWidth: 1,
    borderColor: theme.colors.gray,
    borderRadius: 15,
  },
  bottomSheetScrol: {
    paddingTop: 20,
    width: '100%',
    borderWidth: 1,
    borderColor: 'red',
    flexGrow: 0,
  },
});
