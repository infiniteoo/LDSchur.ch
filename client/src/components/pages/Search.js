import React, { useState, useEffect } from "react";
import FAQ from "../middleSplash/FAQ";
import Logo from "../logo/Logo";
import Header from "../header/Header";
import SearchBar from "../search/SearchBar";
import Container from "@material-ui/core/Container";
import SearchButton from "../button/SearchButton";
import Result from "../result/Result";
import { makeStyles } from "@material-ui/core/styles";
import Middle from "../middleSplash/Middle";
import Footer from "../footer/Footer";

const useStyles = makeStyles({
  jumbotron: {
    display: "flex",
    marginBottom: "50px",
  },
  "@media (max-width: 780px)": {
    jumbotron: {
      display: "block",
    },
  },
});

const Search = () => {
  const classes = useStyles();
  const [urlToConvert, setUrlToConvert] = useState("");
  const [shortURL, setShortURL] = useState("");

  useEffect(() => {
    console.log("returned short url", shortURL);
  }, [shortURL]);

  return (
    <div className="container">
      <Container>
        <div className={classes.jumbotron}>
          <Header />
          <Logo />
        </div>
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
        {shortURL ? <Result shortURL={shortURL} /> : null}
        <Middle />
        <FAQ />
        <Footer />
      </Container>
    </div>
  );
};

export default Search;