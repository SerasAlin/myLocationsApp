import { Grid } from '@mui/material';
import useSWR from 'swr';

import { CardElement } from '../../components/card/card';
import { CardsContainer } from '../../components/cardContainer/cardsContainer';
import { CardTypes, SWR_CATEGORIES } from '../../services/api/globals';
import { getCategories } from '../../services/api/requests/categories/categories.api';
import { Main } from '../../templates/Main';

const Categories = () => {
  const { data: categories } = useSWR(SWR_CATEGORIES.categories, () => getCategories());
  return (
    <Main>
      <Grid container gap='5px'>
          {categories?.map((categoryItem) => {
            return (
              <Grid item>
                <CardElement
                  key={categoryItem.id}
                  cardType={CardTypes.CATEGORY}
                  data={categoryItem}
                />
              </Grid>

            );
          })}
      </Grid>
    </Main>
  );
};
export default Categories;
