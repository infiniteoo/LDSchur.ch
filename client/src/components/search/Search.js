import React from "react";

import Logo from "../logo/Logo";
import Header from "../header/Header";
import SearchBar from "./SearchBar";
import Container from "@material-ui/core/Container";
import SearchButton from "../button/SearchButton";

const Search = () => {
  return (
    <div className="container">
      <Container>
        <Header />
        <Logo />
        <SearchBar />
        <SearchButton />
      </Container>
    </div>
  );
};

export default Search;
