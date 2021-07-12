import React, { useMemo } from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    overflow: "auto",
    [breakpoints.only("xs")]: {
      "& > *:not(:first-child)": {
        paddingLeft: 0,
      },
    },
    [breakpoints.up("sm")]: {
      justifyContent: "center",
    },
  },
}));
export default function Index({ cryptoData, loading }) {
  const gridStyles = useGridStyles();
  if (!cryptoData.length) loading = true;
  const CardItems = useMemo(
    () =>
      cryptoData?.map(
        (
          {
            image,
            name,
            symbol,
            total_volume,
            current_price,
            market_cap,
            market_cap_rank,
          },
          key,
        ) =>
          loading ? (
            <Skeleton
              key={key}
              variant="rect"
              width={280}
              height={200}
              style={{ margin: "5px", padding: "5px" }}
            />
          ) : (
            <Grid key={key} item xs>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="alt image"
                    height="140"
                    style={{ objectFit: "cover" }}
                    image={image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {name} ({symbol.toUpperCase()})
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      component="p"
                    >
                      {`Price : $${current_price}`}
                    </Typography>{" "}
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      component="p"
                    >
                      {`Total Volume : $${total_volume ?? "Unknown"}`}
                    </Typography>{" "}
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      component="p"
                    >
                      {`Mkt Cap : $${market_cap ?? "Not Avaiable"}`}
                    </Typography>{" "}
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      component="p"
                    >
                      {`RANK : ${market_cap_rank ?? "Not Ranked"}`}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ),
      ),
    [cryptoData, loading],
  );
  return (
    <Grid
      style={{ padding: 16 }}
      classes={gridStyles}
      wrap={"nowrap"}
      container
      spacing={4}
    >
      {CardItems}
    </Grid>
  );
}
