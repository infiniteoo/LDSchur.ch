import React from "react";
import TextField from "@material-ui/core/TextField";

const SearchBar = () => {
  return (
    <div>
      <form className="searchBox" noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Enter Link to Convert"
          variant="outlined"
          fullWidth={true}
        />
      </form>
    </div>
  );
};

export default SearchBar;
