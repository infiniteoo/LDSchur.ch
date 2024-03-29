import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    fontFamily: ["Georama"],
    fontWeight: "400",
    textAlign: "center",
    paddingTop: "8rem",
  },
  headline: {
    fontFamily: ["Georama"],
    fontWeight: "1900",
    textAlign: "center",
  },
  "@media (max-width: 470px)": {
    root: {
      fontSize: "75px",
    },
  },
  "@media (max-width: 370px)": {
    root: {
      fontSize: "50px",
    },
  },
  "@media (max-width: 260px)": {
    root: {
      fontSize: "40px",
    },
    headline: {
      fontSize: "20px",
    },
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      alignContent="center"
      justifyContent="center"
    >
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography className={classes.root} variant="h1" component="h2">
          Welcome to LDSchur.ch
        </Typography>
        <hr></hr>
        <Typography className={classes.headline} variant="h5" component="h2">
          A <strong>safe</strong> URL shortener for friends, family, and church
        </Typography>
      </Grid>{" "}
    </Grid>
  );
};

export default Header;
