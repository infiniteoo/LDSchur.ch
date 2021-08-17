import React, { useState, useEffect } from "react";

import Logo from "../logo/Logo";
import Header from "../header/Header";
import SearchBar from "./SearchBar";
import Container from "@material-ui/core/Container";
import SearchButton from "../button/SearchButton";

const Search = () => {
  const [urlToConvert, setUrlToConvert] = useState("");
  const [shortURL, setShortURL] = useState("");

  useEffect(() => {
    console.log("returned short url", shortURL);
  }, [shortURL]);
  return (
    <div className="container">
      <Container>
        <Header />
        <Logo />
        <SearchBar
          urlToConvert={urlToConvert}
          setUrlToConvert={setUrlToConvert}
        />
        <SearchButton
          urlToConvert={urlToConvert}
          setShortURL={setShortURL}
          setUrlToConvert={setUrlToConvert}
        />
      </Container>
    </div>
  );
};

export default Search;
