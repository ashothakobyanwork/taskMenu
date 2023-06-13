import {DishesModel} from '~/models/dishes';
import {CategoriesModel} from '../../../models/categories';
import {api} from '../api';
import {createCattegoriesFromApi, createDishesFromApi} from './utils';
// import {
//   CreateCardVariables,
//   GetCardVariables,
//   ParseCardData,
//   ParseCardPhotoResponse,
//   UpdateCardVariables,
// } from './types';

export const menuBuilder = api.injectEndpoints({
  endpoints: builder => ({
    getCategories: builder.query<CategoriesModel[], void>({
      query: () => ({
        url: '/api/categories',
        method: 'GET',
      }),
      transformResponse: (data: Record<string, any>) =>
        createCattegoriesFromApi(data),
    }),
    getDishes: builder.query<DishesModel[], void>({
      query: () => ({
        url: '/api/dishes?populate=*',
        method: 'GET',
      }),
      transformResponse: (data: Record<string, any>) =>
        createDishesFromApi(data),
    }),
  }),
  overrideExisting: true,
});

export const {useGetCategoriesQuery, useGetDishesQuery} = menuBuilder;
