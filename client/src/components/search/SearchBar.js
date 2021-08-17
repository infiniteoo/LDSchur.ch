import React from "react";
import TextField from "@material-ui/core/TextField";

const SearchBar = (props) => {
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
    </div>
  );
};

export default SearchBar;
