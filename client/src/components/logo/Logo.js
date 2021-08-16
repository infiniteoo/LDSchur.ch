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
    <div>
      <Grid
        container
        alignItems="center"
        alignContent="center"
        justifyContent="center"
      >
        <Grid item lg={1} md={1} sm={1} xs={1}>
          <img src={LDSLogo} alt="Minimal LDS Logo" className={classes.root} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Logo;
