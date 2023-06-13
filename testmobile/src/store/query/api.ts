import {createApi} from '@reduxjs/toolkit/query/react';

import {axiosBaseQuery} from './axiosBaseQuery';
import {CacheTag} from '../consts';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery,
  tagTypes: [CacheTag.MENU],
  endpoints: () => ({}),
});
