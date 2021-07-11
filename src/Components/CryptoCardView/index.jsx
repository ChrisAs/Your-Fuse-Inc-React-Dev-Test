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

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
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
export default function Index() {
  const classes = useStyles();
  const gridStyles = useGridStyles();
  const currencies = ["1", "2", "3", "4"];
  const CardItems = useMemo(
    () =>
      currencies?.map((currency, key) => (
        <Grid key={key} item xs>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="alt image"
                height="140"
                image="url"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  name
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  details
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      )),
    [currencies],
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
