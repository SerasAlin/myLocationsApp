import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Language } from './types';

const initialState: Language = {
  isLanguageManualSelected: false,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setIsLanguageManualSelected: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.isLanguageManualSelected = payload;
    },
  },
});

export const { setIsLanguageManualSelected } = languageSlice.actions;

export default languageSlice.reducer;
