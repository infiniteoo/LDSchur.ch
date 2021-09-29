import React from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

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

  const handleClick = async (e) => {
    // make axios call to convert link
    e.preventDefault();
    var data = JSON.stringify({
      longUrl: props.urlToConvert,
    });

    var config = {
      method: "post",
      url: "http://localhost:7777/api/url/shorten",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Point": "*",
        "Access-Control-Allow-Credentials": "true",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        props.setShortURL(
          JSON.stringify(response.data.shortUrl).replace(/^"(.*)"$/, "$1")
        );
        props.setUrlToConvert("");
      })
      .catch(function (error) {
        console.log(error);
      });
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
