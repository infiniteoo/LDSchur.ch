import React from "react";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import jesusPortrait from "../../imgs/jesus_portrait.jpg";
import Footer from "../footer/Footer";
import classroom from "../../imgs/classroom.jpg";
import programming from "../../imgs/programming.jpg";
import pricing from "../../imgs/pricing.jpg";
import enterprise from "../../imgs/enterprise.jpg";

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

export default function Why() {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.jumbotron}>
        <img src={jesusPortrait} className={classes.img} alt="" />
        <Grid container justify="center" alignItems="center">
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

      <Typography className={classes.subheadline} variant="h3" component="h3">
        <strong>URL Shortening 101</strong>
      </Typography>

      <div className={classes.infoContainer}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={7} sm={7} md={7} lg={7}>
            {" "}
            <img src={classroom} alt="" style={{ borderRadius: "10px" }} />
          </Grid>
          <Grid item xs={5} sm={5} md={5} lg={5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab
            harum itaque nisi eligendi omnis pariatur qui nobis, tenetur sit
            magnam aliquam quaerat beatae iste libero sequi repudiandae porro
            voluptas architecto commodi dicta debitis! Reiciendis voluptatum
            provident ut reprehenderit est quas harum doloribus ullam explicabo
            ex! Explicabo provident natus omnis atque sunt architecto minima
            veritatis nam expedita officiis voluptatum fugiat eos saepe,
            assumenda excepturi fugit molestias? Fuga accusantium harum
            doloremque eligendi vitae! Porro nemo, atque aspernatur ea esse, cum
            placeat enim dolor numquam beatae accusamus rem fugit aut delectus
            explicabo quidem, saepe optio praesentium adipisci repellat amet
            magnam. Veritatis, ipsa?
          </Grid>
        </Grid>
      </div>

      <Typography className={classes.subheadline} variant="h3" component="h3">
        <strong>Integration & API</strong>
      </Typography>

      <div className={classes.infoContainer}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={7} sm={7} md={7} lg={7}>
            {" "}
            <img src={programming} alt="" style={{ borderRadius: "10px" }} />
          </Grid>
          <Grid item xs={5} sm={5} md={5} lg={5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab
            harum itaque nisi eligendi omnis pariatur qui nobis, tenetur sit
            magnam aliquam quaerat beatae iste libero sequi repudiandae porro
            voluptas architecto commodi dicta debitis! Reiciendis voluptatum
            provident ut reprehenderit est quas harum doloribus ullam explicabo
            ex! Explicabo provident natus omnis atque sunt architecto minima
            veritatis nam expedita officiis voluptatum fugiat eos saepe,
            assumenda excepturi fugit molestias? Fuga accusantium harum
            doloremque eligendi vitae! Porro nemo, atque aspernatur ea esse, cum
            placeat enim dolor numquam beatae accusamus rem fugit aut delectus
            explicabo quidem, saepe optio praesentium adipisci repellat amet
            magnam. Veritatis, ipsa?
          </Grid>
        </Grid>
      </div>

      <Typography className={classes.subheadline} variant="h3" component="h3">
        <strong>Enterprise Class</strong>
      </Typography>
      <div className={classes.infoContainer}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={7} sm={7} md={7} lg={7}>
            {" "}
            <img src={enterprise} alt="" style={{ borderRadius: "10px" }} />
          </Grid>
          <Grid item xs={5} sm={5} md={5} lg={5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab
            harum itaque nisi eligendi omnis pariatur qui nobis, tenetur sit
            magnam aliquam quaerat beatae iste libero sequi repudiandae porro
            voluptas architecto commodi dicta debitis! Reiciendis voluptatum
            provident ut reprehenderit est quas harum doloribus ullam explicabo
            ex! Explicabo provident natus omnis atque sunt architecto minima
            veritatis nam expedita officiis voluptatum fugiat eos saepe,
            assumenda excepturi fugit molestias? Fuga accusantium harum
            doloremque eligendi vitae! Porro nemo, atque aspernatur ea esse, cum
            placeat enim dolor numquam beatae accusamus rem fugit aut delectus
            explicabo quidem, saepe optio praesentium adipisci repellat amet
            magnam. Veritatis, ipsa?
          </Grid>
        </Grid>
      </div>

      <Typography className={classes.subheadline} variant="h3" component="h3">
        <strong>Pricing</strong>
      </Typography>
      <div className={classes.infoContainer}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={7} sm={7} md={7} lg={7}>
            {" "}
            <img src={pricing} alt="" style={{ borderRadius: "10px" }} />
          </Grid>
          <Grid item xs={5} sm={5} md={5} lg={5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab
            harum itaque nisi eligendi omnis pariatur qui nobis, tenetur sit
            magnam aliquam quaerat beatae iste libero sequi repudiandae porro
            voluptas architecto commodi dicta debitis! Reiciendis voluptatum
            provident ut reprehenderit est quas harum doloribus ullam explicabo
            ex! Explicabo provident natus omnis atque sunt architecto minima
            veritatis nam expedita officiis voluptatum fugiat eos saepe,
            assumenda excepturi fugit molestias? Fuga accusantium harum
            doloremque eligendi vitae! Porro nemo, atque aspernatur ea esse, cum
            placeat enim dolor numquam beatae accusamus rem fugit aut delectus
            explicabo quidem, saepe optio praesentium adipisci repellat amet
            magnam. Veritatis, ipsa?
          </Grid>
        </Grid>
      </div>

      <Footer />
    </Container>
  );
}
