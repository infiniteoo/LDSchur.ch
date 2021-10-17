import React, { useLayoutEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import jesusPortrait from "../../imgs/jesus_portrait.jpg";
import Footer from "../footer/Footer";
import analytics from "../../imgs/analytics.svg";
import brandedlinks from "../../imgs/brandedlinks.svg";
import campaigns from "../../imgs/campaigns.svg";
import linkmanagement from "../../imgs/linkmanagement.svg";
import mobilelinks from "../../imgs/mobilelinks.svg";
import qrcodes from "../../imgs/qrcodes.svg";

import "./pages.css";

export default function Why() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Container>
      <div className="container">
        <div className="jumbotron">
          <img
            src={jesusPortrait}
            className="titlepic"
            alt="portrait of jesus"
          />
          <Typography
            className="headline"
            variant="h1"
            component="h2"
            style={{ fontFamily: ["Georama", "sans-serif"] }}
          >
            Features
          </Typography>
        </div>
        <section className="card">
          <img src={linkmanagement} alt="" />
          <div>
            <h3>
              <strong>Link Management</strong>
            </h3>
            <p>
              Most URL links are long, confusing and cumbersome. As a result,
              people are reluctant to click them. We'll take that ginormous link
              and make it into a teeny-tiny link that's easy to share.
            </p>
          </div>
        </section>
        <section className="card">
          <img src={brandedlinks} alt="" />
          <div>
            <h3>
              <strong>Branded Links</strong>
            </h3>
            <p>
              Coming soon! We're working on a full-featured API that will allow
              developers to connect to our system on the back-end to create
              links and shorten them.
            </p>
          </div>
        </section>
        <section className="card">
          <img src={mobilelinks} alt="" />
          <div>
            <h3>
              <strong>Mobile Links</strong>
            </h3>
            <p>
              Other URL shorteners are not safe. They will let you share any
              link from anywhere. This means someone could send you harmful
              content without you even knowing it. Not with us! Our SafeLink
              integrated filter technology prevents people from sharing
              nefarious links.
            </p>
          </div>
        </section>
        <section className="card">
          <img src={campaigns} alt="" />
          <div>
            <h3>
              <strong>Campaigns</strong>
            </h3>
            <p>
              Our services are completely free! We're not going to charge you
              for shortening a link. Jeez.
            </p>
          </div>
        </section>
        <section className="card">
          <img src={analytics} alt="" />
          <div>
            <h3>
              <strong>Management & Analytics</strong>
            </h3>
            <p>
              Our services are completely free! We're not going to charge you
              for shortening a link. Jeez.
            </p>
          </div>
        </section>
        <section className="card">
          <img src={qrcodes} alt="" />
          <div>
            <h3>
              <strong>QR Codes</strong>
            </h3>
            <p>
              Our services are completely free! We're not going to charge you
              for shortening a link. Jeez.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </Container>
  );
}
