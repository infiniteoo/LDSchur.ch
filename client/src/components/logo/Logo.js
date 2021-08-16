import React from "react";
import Paper from "@material-ui/core/Paper";
import LDSLogo from "../../imgs/lds.png";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    borderRadius: "50%",
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
        justify="center"
        lg="12"
        md="12"
        sm="12"
        xs="12"
      >
        <Grid item>
          <Paper variant="outlined">
            <img
              src={LDSLogo}
              alt="Minimal LDS Logo"
              className={classes.root}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Logo;
