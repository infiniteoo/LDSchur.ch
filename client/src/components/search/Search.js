import React, { useState } from "react";

import Logo from "../logo/Logo";
import Header from "../header/Header";
import SearchBar from "./SearchBar";
import Container from "@material-ui/core/Container";
import SearchButton from "../button/SearchButton";

const Search = () => {
  const [urlToConvert, setUrlToConvert] = useState("");
  return (
    <div className="container">
      <Container>
        <Header />
        <Logo />
        <SearchBar
          urlToConvert={urlToConvert}
          setUrlToConvert={setUrlToConvert}
        />
        <SearchButton urlToConvert={urlToConvert} />
      </Container>
    </div>
  );
};

export default Search;
