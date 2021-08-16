import React from "react";
import LDSLogo from "../../imgs/lds.png";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    borderRadius: "50%",
    marginTop: "20px",
  },
});

const Logo = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      alignContent="center"
      justifyContent="center"
    >
      <Grid item xl={2} lg={2} md={2} sm={4} xs={6}>
        <img src={LDSLogo} alt="Minimal LDS Logo" className={classes.root} />
      </Grid>
    </Grid>
  );
};

export default Logo;
