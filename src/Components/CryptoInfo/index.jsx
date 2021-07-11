import {
  Backdrop,
  CircularProgress,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useState } from "react";
import { CryptoCardView, CryptoListView } from "..";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCryptoData } from "../../Redux/Crypto/actions";
import { Button } from "@material-ui/core";

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
  marginTop: {
    marginTop: "10vh",
  },
}));
export default function Index() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { cryptoData, page, totalCurrencies, loading } = useSelector(
    ({ crypto }) => crypto,
  );
  const [view, setView] = useState(false);
  useEffect(() => {
    dispatch(fetchCryptoData(1));
  }, [dispatch]);
  const onChangePage = (_e, value) => {
    dispatch(fetchCryptoData(value));
  };
  return (
    <Container className={classes.root}>
      <Grid container justifyContent="center" className={classes.marginTop}>
        <Typography variant="h1" component="h2">
          Your Fuse Inc React Dev Test
        </Typography>
      </Grid>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        className={classes.marginTop}
      >
        {view ? (
          <CryptoCardView cryptoData={cryptoData} loading={loading} />
        ) : (
          <CryptoListView cryptoData={cryptoData} loading={loading} />
        )}
      </Grid>

      <Grid
        container
        justifyContent="space-between"
        className={classes.marginTop}
      >
        <Grid item>
          <Button
            onClick={() => setView(!view)}
            variant="outlined"
            color="primary"
          >{`Change To ${view ? "List" : "Card"} View`}</Button>
        </Grid>
        <Grid item>
          <Pagination
            count={Number(totalCurrencies)}
            page={Number(page)}
            onChange={onChangePage}
            variant="outlined"
            color="primary"
          />
        </Grid>
      </Grid>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
}
