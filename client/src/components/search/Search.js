import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Logo from "../logo/Logo";
import Header from "../header/Header";
import SearchBar from "./SearchBar";
import Container from "@material-ui/core/Container";
import SearchButton from "../button/SearchButton";
import Result from "../result/Result";

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
          shortURL={shortURL}
          urlToConvert={urlToConvert}
          setShortURL={setShortURL}
          setUrlToConvert={setUrlToConvert}
        />

        
          <Result shortURL={shortURL} />
       
      </Container>
    </div>
  );
};

export default Search;
