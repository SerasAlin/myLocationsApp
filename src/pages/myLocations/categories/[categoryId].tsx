import { Grid } from '@mui/material';
import useSWR, { mutate } from 'swr';

import { CardElement } from '../../../components/card/card';
import { CardTypes, SWR_LOCATIONS } from '../../../services/api/globals';
import { Main } from '../../../templates/Main';
import { getLocations } from '../../../services/api/requests/locations/locations.api';
import { useRouter } from 'next/router';

const Category = () => {
  const { data: locations } = useSWR(SWR_LOCATIONS.locations, () => getLocations());
  const router = useRouter()
  const { categoryId } = router.query

  return (
    <Main>
      <Grid container gap='30px' justifyContent='center'>
        {locations?.map((locationItem) => {
          return locationItem?.category?.id === Number(categoryId.toString()) && (
            <Grid item>
              <CardElement
                key={locationItem.id}
                cardType={CardTypes.CATEGORY}
                data={locationItem}
              />
            </Grid>

          );
        })}
      </Grid>
    </Main>
  );
};
export default Category;
