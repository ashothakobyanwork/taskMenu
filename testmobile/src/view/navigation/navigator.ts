import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

type NavigationRef = typeof navigationRef;

export const navigate = (
  ...args: Parameters<NavigationRef['navigate']>
): ReturnType<NavigationRef['navigate']> => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(...args);
  }
};

export const goBack = (
  ...args: Parameters<NavigationRef['goBack']>
): ReturnType<NavigationRef['goBack']> => {
  if (navigationRef.isReady()) {
    navigationRef.goBack(...args);
  }
};

export const reset = (
  ...args: Parameters<NavigationRef['reset']>
): ReturnType<NavigationRef['reset']> => {
  if (navigationRef.isReady()) {
    navigationRef.reset(...args);
  }
};
