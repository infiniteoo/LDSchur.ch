import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import LDSLogo from "../imgs/lds.png";
import Typography from "@material-ui/core/Typography";

const Search = () => {
  return (
    <div className="container">
      <form className="searchBox" noValidate autoComplete="off">
        <Typography variant="h1" component="h2" gutterBottom>
          Welcome to LDSchur.ch
        </Typography>
        <Paper variant="outlined">
          <img src={LDSLogo} alt="Minimal LDS Logo" />
        </Paper>
        <TextField
          id="outlined-basic"
          label="Enter URL"
          variant="outlined"
          fullWidth={true}
        />
      </form>
    </div>
  );
};

export default Search;
