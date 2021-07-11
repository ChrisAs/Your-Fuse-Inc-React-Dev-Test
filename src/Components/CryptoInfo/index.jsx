import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React from "react";
import { CryptoCardView, CryptoListView } from "..";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
    flexGrow: 1,
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
  },
}));
export default function Index() {
  const totalCount = 10;
  let currentPage = 1;
  const classes = useStyles();
  const view = "list";
  const onChangePage = (_e, value) => {
    currentPage = value;
  };
  return (
    <Container className={classes.root}>
      <Grid container justifyContent="center">
        <Typography variant="h1" component="h2">
          Your Fuse Inc React Dev Test
        </Typography>
      </Grid>
      <Grid container spacing={3} justifyContent="center">
        {view === "card" ? <CryptoCardView /> : <CryptoListView />}
      </Grid>
      <Grid container justifyContent="flex-end">
        <Pagination
          count={totalCount}
          page={currentPage}
          onChange={onChangePage}
          variant="outlined"
          color="primary"
        />
      </Grid>
    </Container>
  );
}
