import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    fontFamily: ["Georama"],
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        alignItems="center"
        alignContent="center"
        justifyContent="center"
      >
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography
            className={classes.root}
            variant="h1"
            component="h2"
            gutterBottom
          >
            Welcome to LDSchur.ch
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
