import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { LocationDomain } from '../../../components/location/location.domain';

const initialState: { locations: LocationDomain[] } = {
  locations: [],
};

const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    setLocation: (state, { payload }: PayloadAction<LocationDomain>) => {
      const index = state.locations
        .map((location: LocationDomain) => {
          return location.id;
        })
        .indexOf(payload.id);
      // eslint-disable-next-line no-param-reassign
      state.locations[index] = payload;
    },
  },
});

export const { setLocation } = locationsSlice.actions;

export default locationsSlice.reducer;
