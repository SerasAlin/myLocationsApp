import React, { useState } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { CardTypes } from "../../services/api/globals";
import { CategoryDomain } from "../category/category.domain";
import { LocationDomain } from "../location/location.domain";
import CardContextWrapper from "./index";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const styles = () => ({
  card: {
    justifyContent: 'cente',
    textAlign: 'center',
    cursor: "pointer",
    maxWidth: 250,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    paddingTop: "50%",
  },
  content: {
    display: 'flex',
    textAlign: "center",
    flexDirection: 'column',
    padding: "15px",
  },
  divider: {
    margin: `15px 0`,
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
  },
});

export interface SimpleCardProps {
  classes: any;
  cardType: CardTypes;
  data: any;
}

export const SimpleCard = ({ classes, cardType, data }: SimpleCardProps) => {
  const cardData = useState<LocationDomain | CategoryDomain>(null);

  return (
    <CardContextWrapper>
      {cardType === CardTypes.CATEGORY ? (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
              <Typography
                className={"MuiTypography--heading"}
                variant={"h6"}
                gutterBottom
              >
                {data.name}
              </Typography>
            </CardContent>
            <Button style={{ margin: "5px" }} variant="text" color='success'>
              Edit
            </Button>
        </Card>
      ) : (
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h6"}
              gutterBottom
            >
              Name: {data.name}
            </Typography>
            <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
            >
              Address: {data.address}
            </Typography>
            <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
            >
              Coordinates: {data.coordinates[0] + ',' + data.coordinates[1]}
            </Typography>
            <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
            >
              Category: {data.category.name}
            </Typography>
            <Divider className={classes.divider} light />
          </CardContent>
          <Button style={{ margin: "5px" }} variant="text" color='success'>
            Edit
          </Button>
        </Card>
      )}
    </CardContextWrapper>
  );
};

// @ts-ignore
export const CardElement = withStyles(styles)(SimpleCard);
