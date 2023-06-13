import {useReduxDevToolsExtension} from '@react-navigation/devtools';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {navigationRef} from './navigator';
import {Menu} from '../screens/menu';
import {DishesModel} from '../../models/dishes';
import {DishDescprition} from '../screens/dishDescprition';

const screenOptions = {
  gestureEnabled: false,
  headerShown: false,
};

export type RootStackParamList = {
  Menu: undefined;
  DishDescprition: DishesModel;
};

const AppStack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  useReduxDevToolsExtension(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack.Navigator screenOptions={screenOptions}>
        <AppStack.Screen name="Menu" component={Menu} />
        <AppStack.Screen name="DishDescprition" component={DishDescprition} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
