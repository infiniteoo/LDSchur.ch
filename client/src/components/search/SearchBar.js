import React from "react";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  disclaimer: {
    fontFamily: ["Georama"],
    fontWeight: "600",
    textAlign: "center",
    fontSize: "13px",
    fontColor: "lightGray",
  },
});
const SearchBar = (props) => {
  const classes = useStyles();
  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField
          autoFocus
          id="outlined-basic"
          label="Enter Link to Convert"
          variant="outlined"
          fullWidth={true}
          value={props.urlToConvert}
          onChange={(e) => {
            props.setUrlToConvert(e.target.value);
          }}
        />
      </form>
      <Typography className={classes.disclaimer} variant="h6" component="h2">
        By clicking CONVERT you are agreeting to our Terms of Service and
        Privacy Policy
      </Typography>
    </div>
  );
};

export default SearchBar;
