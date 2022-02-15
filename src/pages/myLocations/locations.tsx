import { Grid } from '@mui/material';
import useSWR from 'swr';

import { CardElement } from '../../components/card/card';
import { CardsContainer } from '../../components/cardContainer/cardsContainer';
import { CategoryDomain } from '../../components/category/category.domain';
import { CardTypes, SWR_LOCATIONS } from '../../services/api/globals';
import { getLocations } from '../../services/api/requests/locations/locations.api';
import { Main } from '../../templates/Main';

export interface LocationProps {
  category?: CategoryDomain;
}

const Locations = ({ category }: LocationProps) => {
  const { data: locations } = useSWR(SWR_LOCATIONS.locations, () => getLocations());

  return (
    <Main>
      <Grid container gap='5px'>
          {category ?
            locations?.map((categoryItem) => {
              return (
                categoryItem.category === category && (
                  <Grid item>
                    <CardElement
                      key={categoryItem.id}
                      cardType={CardTypes.LOCATION}
                      data={categoryItem}
                    />
                  </Grid>
                )
              );
            }) : locations?.map((categoryItem) => {
              return (
                <Grid item>
                  <CardElement
                    key={categoryItem.id}
                    cardType={CardTypes.LOCATION}
                    data={categoryItem}
                  />
                </Grid>
              );
            })
          }
      </Grid>
    </Main>
  );
};
export default Locations;
