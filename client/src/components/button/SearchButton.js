import React from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    marginTop: "20px",
    backgroundColor: "black",
    color: "#E7D777",
    width: "500px",
    height: "75px",
    "&:hover": {
      backgroundColor: "#E7D777",
      color: "black",
    },
  },
});

const SearchButton = (props) => {
  const classes = useStyles();

  const handleClick = () => {
    // make axios call to convert link
    console.log(props.urlToConvert);
  };

  return (
    <Grid
      container
      alignItems="center"
      alignContent="center"
      justifyContent="center"
    >
      <Grid item>
        <Button
          variant="contained"
          className={classes.root}
          onClick={handleClick}
        >
          Convert Link
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchButton;
