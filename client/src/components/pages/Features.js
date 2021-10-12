import React, { useLayoutEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import jesusPortrait from "../../imgs/baby_bible.jpg";
import Footer from "../footer/Footer";
import analytics from "../../imgs/analytics.jpg";
import brandedlinks from "../../imgs/brandedlinks.jpg";
import campaigns from "../../imgs/campaigns.jpg";
import linkmanagement from "../../imgs/linkmanagement.jpg";
import mobilelinks from "../../imgs/mobilelinks.jpg";
import qrcodes from "../../imgs/qrcodes.jpg";

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
  },
  img: {
    borderRadius: "50%",
    width: "500px",
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
  subheadline: {
    fontFamily: ["Georama"],
    marginTop: "20px",

    textAlign: "center",
  },
  infoContainer: {
    fontSize: "1.5rem",
    fontFamily: ["Georama"],
    border: "4px dotted lightgrey",
    padding: "20px",
    marginTop: "10px",
  },
});

export default function Features() {
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
              Features
            </Typography>
          </Grid>
        </Grid>
      </div>

      <Typography className={classes.subheadline} variant="h3" component="h3">
        <strong>Link Management</strong>
      </Typography>

      <div className={classes.infoContainer}>
        <div>
          {" "}
          <img
            src={linkmanagement}
            alt=""
            style={{ borderRadius: "10px", width: "100%", padding: "20px" }}
          />
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab
          harum itaque nisi eligendi omnis pariatur qui nobis, tenetur sit
          magnam aliquam quaerat beatae iste libero sequi repudiandae porro
          voluptas architecto commodi dicta debitis! Reiciendis voluptatum
          provident ut reprehenderit est quas harum doloribus ullam explicabo
          ex! Explicabo provident natus omnis atque sunt architecto minima
          veritatis nam expedita officiis voluptatum fugiat eos saepe, assumenda
          excepturi fugit molestias? Fuga accusantium harum doloremque eligendi
          vitae! Porro nemo, atque aspernatur ea esse.
        </div>
      </div>

      <Typography className={classes.subheadline} variant="h3" component="h3">
        <strong>Branded Links</strong>
      </Typography>

      <div className={classes.infoContainer}>
        <div>
          {" "}
          <img
            src={brandedlinks}
            alt=""
            style={{ borderRadius: "10px", width: "100%", padding: "20px" }}
          />
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab
          harum itaque nisi eligendi omnis pariatur qui nobis, tenetur sit
          magnam aliquam quaerat beatae iste libero sequi repudiandae porro
          voluptas architecto commodi dicta debitis! Reiciendis voluptatum
          provident ut reprehenderit est quas harum doloribus ullam explicabo
          ex! Explicabo provident natus omnis atque sunt architecto minima
          veritatis nam expedita officiis voluptatum fugiat eos saepe, assumenda
          excepturi fugit molestias? Fuga accusantium harum doloremque eligendi
          vitae! Porro nemo, atque aspernatur ea esse.
        </div>
      </div>

      <Typography className={classes.subheadline} variant="h3" component="h3">
        <strong>Mobile Links</strong>
      </Typography>

      <div className={classes.infoContainer}>
        <div>
          {" "}
          <img
            src={mobilelinks}
            alt=""
            style={{ borderRadius: "10px", width: "100%", padding: "20px" }}
          />
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab
          harum itaque nisi eligendi omnis pariatur qui nobis, tenetur sit
          magnam aliquam quaerat beatae iste libero sequi repudiandae porro
          voluptas architecto commodi dicta debitis! Reiciendis voluptatum
          provident ut reprehenderit est quas harum doloribus ullam explicabo
          ex! Explicabo provident natus omnis atque sunt architecto minima
          veritatis nam expedita officiis voluptatum fugiat eos saepe, assumenda
          excepturi fugit molestias? Fuga accusantium harum doloremque eligendi
          vitae! Porro nemo, atque aspernatur ea esse.
        </div>
      </div>

      <Typography className={classes.subheadline} variant="h3" component="h3">
        <strong>Campaigns</strong>
      </Typography>

      <div className={classes.infoContainer}>
        <div>
          {" "}
          <img
            src={campaigns}
            alt=""
            style={{ borderRadius: "10px", width: "100%", padding: "20px" }}
          />
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab
          harum itaque nisi eligendi omnis pariatur qui nobis, tenetur sit
          magnam aliquam quaerat beatae iste libero sequi repudiandae porro
          voluptas architecto commodi dicta debitis! Reiciendis voluptatum
          provident ut reprehenderit est quas harum doloribus ullam explicabo
          ex! Explicabo provident natus omnis atque sunt architecto minima
          veritatis nam expedita officiis voluptatum fugiat eos saepe, assumenda
          excepturi fugit molestias? Fuga accusantium harum doloremque eligendi
          vitae! Porro nemo, atque aspernatur ea esse.
        </div>
      </div>

      <Typography className={classes.subheadline} variant="h3" component="h3">
        <strong>Management & Analytics</strong>
      </Typography>

      <div className={classes.infoContainer}>
        <div>
          {" "}
          <img
            src={analytics}
            alt=""
            style={{ borderRadius: "10px", width: "100%", padding: "20px" }}
          />
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab
          harum itaque nisi eligendi omnis pariatur qui nobis, tenetur sit
          magnam aliquam quaerat beatae iste libero sequi repudiandae porro
          voluptas architecto commodi dicta debitis! Reiciendis voluptatum
          provident ut reprehenderit est quas harum doloribus ullam explicabo
          ex! Explicabo provident natus omnis atque sunt architecto minima
          veritatis nam expedita officiis voluptatum fugiat eos saepe, assumenda
          excepturi fugit molestias? Fuga accusantium harum doloremque eligendi
          vitae! Porro nemo, atque aspernatur ea esse.
        </div>
      </div>

      <Typography className={classes.subheadline} variant="h3" component="h3">
        <strong>QR Codes</strong>
      </Typography>

      <div className={classes.infoContainer}>
        <div>
          {" "}
          <img
            src={qrcodes}
            alt=""
            style={{ borderRadius: "10px", width: "100%", padding: "20px" }}
          />
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab
          harum itaque nisi eligendi omnis pariatur qui nobis, tenetur sit
          magnam aliquam quaerat beatae iste libero sequi repudiandae porro
          voluptas architecto commodi dicta debitis! Reiciendis voluptatum
          provident ut reprehenderit est quas harum doloribus ullam explicabo
          ex! Explicabo provident natus omnis atque sunt architecto minima
          veritatis nam expedita officiis voluptatum fugiat eos saepe, assumenda
          excepturi fugit molestias? Fuga accusantium harum doloremque eligendi
          vitae! Porro nemo, atque aspernatur ea esse.
        </div>
      </div>

      <Footer />
    </Container>
  );
}
