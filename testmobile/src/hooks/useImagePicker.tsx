import {useCallback, useMemo, useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import ImagePicker, {Image} from 'react-native-image-crop-picker';
import {PERMISSIONS, request} from 'react-native-permissions';
import {pickName} from '../utils/pickName';
import {logger} from '../utils/logger';

export interface FileProps {
  uri: string;
  name: string;
  type: string;
}

interface UseImagePicker {
  getImageFromLibrary: () => void;
  getImageFromCamera: () => void;
  deleteImage: () => void;
  picture: FileProps | null;
}

export const useImagePicker = (): UseImagePicker => {
  const [picture, setPicture] = useState<FileProps | null>(null);

  const saveImage = (image: Image): void => {
    if (image?.path) {
      const {path, mime: type} = image;
      const name = pickName(path);
      setPicture({
        name,
        uri: path,
        type: type || 'photo',
      });
    }
  };

  const getImageFromCamera = useCallback(async () => {
    try {
      let imageRes;
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          imageRes = await ImagePicker.openCamera({
            forceJpg: true,
            mediaType: 'photo',
            cropping: true,
          });
        }
      } else {
        const permisionRes = await request(PERMISSIONS.IOS.CAMERA);
        if (permisionRes !== 'blocked' && permisionRes !== 'denied') {
          imageRes = await ImagePicker.openCamera({
            forceJpg: true,
            mediaType: 'photo',
            cropping: true,
          });
        }
      }
      if (imageRes) {
        saveImage(imageRes);
      }
    } catch (error) {
      logger.warn(error);
    }
  }, []);

  const getImageFromLibrary = useCallback(async () => {
    try {
      let imageRes;
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          imageRes = await ImagePicker.openPicker({
            forceJpg: true,
            mediaType: 'photo',
            cropping: true,
          });
        }
      } else {
        imageRes = await ImagePicker.openPicker({
          forceJpg: true,
          mediaType: 'photo',
          cropping: true,
        });
      }
      if (imageRes) {
        saveImage(imageRes);
      }
    } catch (error) {
      logger.warn(error);
    }
  }, []);

  const deleteImage = useCallback(() => {
    setPicture(null);
  }, []);

  return useMemo(
    () => ({
      getImageFromLibrary,
      getImageFromCamera,
      deleteImage,
      picture,
    }),
    [getImageFromLibrary, getImageFromCamera, deleteImage, picture],
  );
};
