import React from "react";
import {
  makeStyles,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";
import { useMemo } from "react";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  inline: {
    display: "inline",
  },
}));

export default function Index({ cryptoData, loading }) {
  const classes = useStyles();
  if (!cryptoData.length) loading = true;
  const ListItems = useMemo(
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
        ) => (
          <div key={key}>
            <ListItem alignItems="flex-start">
              {loading ? (
                <Skeleton
                  variant="rect"
                  width={1000}
                  height={40}
                  style={{ margin: "5px", padding: "5px" }}
                />
              ) : (
                <>
                  <ListItemAvatar>
                    <Avatar alt="image" src={image} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${name} (${symbol})`}
                    secondary={
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {`Price : $${current_price}  --  Total Volume : $${
                          total_volume ?? "Unknown"
                        }  --  MktCap : $${
                          market_cap ?? "Not Avaiable"
                        }  --  Rank :  ${market_cap_rank ?? "Not Ranked"}`}
                      </Typography>
                    }
                  />
                </>
              )}
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ),
      ),
    [cryptoData, classes.inline, loading],
  );
  return <List className={classes.root}>{ListItems}</List>;
}
