import React, { memo } from "react";
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

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10ch",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function Index() {
  const classes = useStyles();
  const currencies = ["1", "2", "3", "4"];
  const ListItems = useMemo(
    () =>
      currencies?.map((currency, key) => (
        <>
          <ListItem alignItems="flex-start" key={key}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      )),
    [currencies, classes.inline],
  );
  return <List className={classes.root}>{ListItems}</List>;
}
