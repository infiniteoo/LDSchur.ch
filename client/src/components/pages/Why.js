import React, { useLayoutEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import jesusPortrait from "../../imgs/jesus_portrait.jpg";
import Footer from "../footer/Footer";
import classroom from "../../imgs/education.svg";
import programming from "../../imgs/programming.svg";
import pricing from "../../imgs/pricing.svg";
import enterprise from "../../imgs/security.svg";
import "./why.css";

const useStyles = makeStyles({
  jumbotron: {
    marginTop: "6rem",
    display: "flex",
    marginBottom: "50px",
  },
  "@media (max-width: 780px)": {
    jumbotron: {
      display: "block",
    },
    img: {
      width: "90%",
      marginBottom: "20px",
    },
    headline: {
      fontSize: "2.5rem",
    },
  },

  img: {
    borderRadius: "50%",
    height: "50%",
    background: "linear-gradient(145deg, #d0c26b, #f7e67f)",
    boxShadow: "12px 12px 40px #b0a35a, -12px -12px 40px #fff",
  },
  headline: {
    fontFamily: ["Georama"],
    fontWeight: "100",
    color: "white",
    textShadow: "2px 2px 4px #000000",
    backgroundColor: "#E7D777",
    textAlign: "center",

    marginLeft: "60px",
    background:
      "linear-gradient(120deg, rgba(255,255,255,1) 11%, rgba(231,215,119,1) 64%, rgba(255,255,255,1) 88%)",
  },
});

export default function Why() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.jumbotron}>
        <img src={jesusPortrait} className={classes.img} alt="" />
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography
              className={classes.headline}
              variant="h1"
              component="h2"
            >
              Why?
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div class="container">
        <section class="card">
          <img src={classroom} alt="" />
          <div>
            <h3>
              <strong>URL Shortening 101</strong>
            </h3>
            <p>
              Most URL links are long, confusing and cumbersome. As a result,
              people are reluctant to click them. Plus, have you tried sharing a
              long Facebook link on Twitter? You're lucky if you have enough
              characters to post it! That's where a URL shortner comes in. We'll
              take that ginormous link and make it into a teeny-tiny link that's
              easy to share.
            </p>
          </div>
        </section>
        <section class="card">
          <img src={programming} alt="" />
          <div>
            <h3>
              <strong>Integration & API</strong>
            </h3>
            <p>
              Coming soon! We're working on a full-featured API that will allow
              developers to connect to our system on the back-end to create
              links and shorten them.
            </p>
          </div>
        </section>
        <section class="card">
          <img src={enterprise} alt="" />
          <div>
            <h3>
              <strong>Safe Link Technology</strong>
            </h3>
            <p>
              Other URL shorteners are not safe. They will literally let you
              share any link from any website. This means someone could send you
              pornography, or blasphemous material, or violent content without
              you even knowing it. Not with us! Our SafeLink integrated filter
              technology prevents people from sharing links from nefarious
              websites.
            </p>
          </div>
        </section>
        <section class="card">
          <img src={pricing} alt="" />
          <div>
            <h3>
              <strong>Pricing</strong>
            </h3>
            <p>
              Our services are completely free! We're not going to charge you
              for shortening a link. Jeez.
            </p>
          </div>
        </section>

        {/* <Typography className={classes.subheadline} variant="h3" component="h3">
        <strong>URL Shortening 101</strong>
      </Typography>

      <div className={classes.infoContainer}>
        <img
          src={classroom}
          alt=""
          style={{ borderRadius: "10px", height: "auto" }}
          className={classes.img3}
        />

        <div className={classes.textBox}>
          Most URL links are long, confusing and cumbersome. As a result, people
          are reluctant to click them. Plus, have you tried sharing a long
          Facebook link on Twitter? You're lucky if you have enough characters
          to post it! That's where a URL shortner comes in. We'll take that
          ginormous link and make it into a teeny-tiny link that's easy to
          share.
        </div>
      </div>

      <Typography className={classes.subheadline} variant="h3" component="h3">
        <strong>Integration & API</strong>
      </Typography>

      <div className={classes.infoContainer}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={7} sm={7} md={7} lg={7}>
            {" "}
            <img src={classroom} alt="" style={{ borderRadius: "10px" }} />
          </Grid>
          <Grid item xs={5} sm={5} md={5} lg={5}>
            Most URL links are long, confusing and cumbersome. As a result,
            people are reluctant to click them. Plus, have you tried sharing a
            long Facebook link on Twitter? You're lucky if you have enough
            characters to post it! That's where a URL shortner comes in. We'll
            take that ginormous link and make it into a teeny-tiny link that's
            easy to share.
          </Grid>
        </Grid>

        <div className={classes.img2}>
          {" "}
          <img
            src={programming}
            alt=""
            style={{ borderRadius: "10px", width: "100%", padding: "20px" }}
          />
        </div>
        <div>
          Coming soon! We're working on a full-featured API that will allow
          developers to connect to our system on the back-end to create links
          and shorten them.
        </div>
      </div>

      <Typography className={classes.subheadline} variant="h3" component="h3">
        <strong>Safe Link Technology</strong>
      </Typography>

      <div className={classes.infoContainer}>
        <div className={classes.img2}>
          {" "}
          <img
            src={enterprise}
            alt=""
            style={{ borderRadius: "10px", width: "100%", padding: "20px" }}
          />
        </div>
        <div>
          Other URL shorteners are not safe. They will literally let you share
          any link from any website. This means someone could send you
          pornography, or blasphemous material, or violent content without you
          even knowing it. Not with us! Our SafeLink integrated filter
          technology prevents people from sharing links from nefarious websites.
        </div>
      </div>

      <Typography className={classes.subheadline} variant="h3" component="h3">
        <strong>Pricing</strong>
      </Typography>

      <div className={classes.infoContainer}>
        <div className={classes.img2}>
          {" "}
          <img
            src={pricing}
            alt=""
            style={{ borderRadius: "10px", width: "100%", padding: "20px" }}
          />
        </div>
        <div>
          Our services are completely free! We're not going to charge you for
          shortening a link. Jeez.
        </div>
      </div> */}
      </div>
      <Footer />
    </Container>
  );
}
