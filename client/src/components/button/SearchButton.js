import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

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
  "@media(max-width: 500px)": {
    root: {
      width: "300px",
    },
  },
});

const SearchButton = (props) => {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const [open, setOpen] = useState(false);
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
        // if response is a banned keyword or a porn site show error msg
        if (
          response.data === "banned keyword" ||
          response.data === "porn site"
        ) {
          // display error message
          setOpen(true);
        } else {
          // if response data is not "porn site" or "banned keyword" then setShortURL
          props.setShortURL(
            JSON.stringify(response.data.shortUrl).replace(/^"(.*)"$/, "$1")
          );
        }

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
      <CopyToClipboard text={props.shortURL}>
        <Grid item>
          <Button
            variant="contained"
            className={classes.root}
            onClick={handleClick}
          >
            Convert
          </Button>
        </Grid>
      </CopyToClipboard>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          sx={{
            width: "100%",
            backgroundColor: "red",
            color: "white",
          }}
        >
          Sorry, that link is not allowed.
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default SearchButton;
