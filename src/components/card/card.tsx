import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { CardTypes } from '../../services/api/globals';
import { CategoryDomain } from '../category/category.domain';
import { LocationDomain } from '../location/location.domain';

const styles = () => ({
  card: {
    cursor: 'pointer',
    maxWidth: 250,
    margin: 'auto',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    },
  },
  media: {
    paddingTop: '50%',
  },
  content: {
    textAlign: 'left',
    padding: '30px',
  },
  divider: {
    margin: `30px 0`,
  },
  heading: {
    fontWeight: 'bold',
  },
  subheading: {
    lineHeight: 1.8,
  },
  avatar: {
    display: 'inline-block',
    border: '2px solid white',
  },
});

export interface SimpleCardProps {
  classes: any;
  cardType: CardTypes;
  data: LocationDomain | CategoryDomain;
}

export const SimpleCard = ({ classes }: SimpleCardProps) => {
  return (
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography
            className={'MuiTypography--heading'}
            variant={'h6'}
            gutterBottom
          >
            Nature Around Us
          </Typography>
          <Typography
            className={'MuiTypography--subheading'}
            variant={'caption'}
          >
            We are going to learn different kinds of species in nature that live
            together to form amazing environment.
          </Typography>
          <Divider className={classes.divider} light />
        </CardContent>
      </Card>
  );
};

// @ts-ignore
export const CardElement = withStyles(styles)(SimpleCard);
