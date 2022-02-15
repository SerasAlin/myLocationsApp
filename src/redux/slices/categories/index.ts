import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CategoryDomain } from '../../../components/category/category.domain';

const initialState: { categories: CategoryDomain[] } = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategory: (state, { payload }: PayloadAction<CategoryDomain>) => {
      const index = state.categories
        .map((category: CategoryDomain) => {
          return category.id;
        })
        .indexOf(payload.id);
      // eslint-disable-next-line no-param-reassign
      state.categories[index] = payload;
    },
  },
});

export const { setCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
