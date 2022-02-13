import { LocationDomain } from './location.domain';

export const allLocationsSample: { data: LocationDomain[] } = {
  data: [
    {
      name: 'Location One',
      address: 'Address One',
      coordinates: ['21.297052', '7.948308'],
      category: {
        name: 'First Category',
      },
    },
    {
      name: 'Location Two',
      address: 'Address Two',
      coordinates: ['21.297052', '7.948308'],
      category: {
        name: 'Second Category',
      },
    },
    {
      name: 'Location Three',
      address: 'Address Three',
      coordinates: ['21.297052', '7.948308'],
      category: {
        name: 'Third Category',
      },
    },
  ],
};
