import React, { useLayoutEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import jesusPortrait from "../../imgs/jesus_b&w.jpg";
import Footer from "../footer/Footer";
import love from "../../imgs/love.svg";
import library from "../../imgs/library.png";
import support from "../../imgs/support.png";
import socialmedia from "../../imgs/socialmedia.png";

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
          <img src={socialmedia} alt="" />
          <div>
            <h3>
              <strong>Social Media</strong>
            </h3>
            <p>
              Coming soon! Our blog and social media accounts are being set up
              to market our awesome new app and backend technologies. Check back
              soon for all the links, updates and deets!
            </p>
          </div>
        </section>
        <section className="card">
          <img src={library} alt="" />
          <div>
            <h3>
              <strong>Resource Library</strong>
            </h3>
            <p>
              Our website and SafeLink technology are completely open source and
              available for cloning and forking on Github. To access the app's
              source code{" "}
              <a href="https://github.com/infiniteoo/LDSchur.ch">click here</a>.
              <br />
              <br />
              Our SafeLink technology, which filters out any malicious links, is
              available for free for use on any website. To access the SafeLink
              technology{" "}
              <a href="https://github.com/infiniteoo/NODEJS-unworthy_url_names">
                click here
              </a>
              .
            </p>
          </div>
        </section>
        <section className="card">
          <img src={love} alt="" />
          <div>
            <h3>
              <strong>Favorite Scripture</strong>
            </h3>
            <p>
              Helaman 3:29
              <br />
              <br />
              <em>
                Yea, we see that whosoever will may lay hold upon the word of
                God, which is quick and powerful, which shall divide asunder all
                the cunning and the snares and the wiles of the devil, and lead
                the man of Christ in a strait and narrow course across that
                everlasting gulf of misery which is prepared to engulf the
                wicked.
              </em>
            </p>
          </div>
        </section>
        <section className="card">
          <img src={support} alt="" />
          <div>
            <h3>
              <strong>Support</strong>
            </h3>
            <p>
              LDSchur.ch is an Idaho-based company. We are not affiliated with
              The Church of Latter-Day Saints, but we are Heavenly Father-loving
              Saints who study The Book of Mormon daily, and who who have
              received confirmation of the church's validity of and it's
              restored gospel of Jesus Christ.
              <br />
              <br />
              To contact us please use the contact form found{" "}
              <a href="/contact">here</a>.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </Container>
  );
}
