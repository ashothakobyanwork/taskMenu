import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import {getResponsiveHeight} from '../../../utils/responsive';
import ProfilePicture from '../../assets/images/ProfilePicture.png';
import {useImagePicker} from '../../../hooks/useImagePicker';
import {openCameraSheetIos} from '../cameraSheet/ios';

export const Avatar = () => {
  const {picture, getImageFromCamera, getImageFromLibrary, deleteImage} =
    useImagePicker();

  const hendlerOpenCameraSheetMedia = (index: number): void => {
    switch (index) {
      case 1:
        getImageFromCamera();
        break;
      case 2:
        getImageFromLibrary();
        break;
      default:
        deleteImage();
    }
  };

  const handlerPressMedia = (): void => {
    openCameraSheetIos(
      (index: number) => hendlerOpenCameraSheetMedia(index),
      ['Cancel', 'Take Photo', 'Photo Library'],
    );
  };
  return (
    <Pressable style={styles.pictureWrapper} onPress={handlerPressMedia}>
      <Image
        source={picture?.uri ? {uri: picture?.uri} : ProfilePicture}
        style={styles.image}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
});
