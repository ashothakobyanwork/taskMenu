import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {createTransform, persistReducer} from 'redux-persist';
import {api} from './query/api';
import {menuReducer} from './modules/menu';
import {isString} from '../utils/string';

const transforms = [
  createTransform(
    state => JSON.stringify(state),
    state =>
      JSON.parse(state, (key, value) =>
        isString(value) && value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)
          ? new Date(value)
          : value,
      ),
  ),
];

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['menu'],
  transforms,
};

const appReducer = combineReducers({
  menu: menuReducer,
  [api.reducerPath]: api.reducer,
});

const reducer: typeof appReducer = (state, action) => {
  return appReducer(state, action);
};

export const rootReducer = persistReducer<ReturnType<typeof reducer>>(
  rootPersistConfig,
  reducer,
);
