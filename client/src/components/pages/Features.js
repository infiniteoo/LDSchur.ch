import React, { useLayoutEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import jesusPortrait from "../../imgs/baby_bible.jpg";
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
              We store our links in a cloud-based, No-SQL MongoDB database, that
              is secure and confidential for all users. Our Node.js/Express
              server is hosted by <a href="http://linode.com">Linode</a>, and
              our front end interface was created with JavaScript framework
              React (created and maintained by Facebook).
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
              Our certified, branded links guarantee that your links will be
              safe and wholesome. When you see receive a shared link that starts
              with <strong>"https://LDSchur.ch/"</strong>, you know it's legit!
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
              Our website is mobile-friendly, and designed with the latest
              responsive web technologies to ensure it looks good on any device
              it's view on, whether it's a smartphone, tablet, or desktop.
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
              Let us help you create a campaign to share your links with your
              custom branded links. We're open for business and eager to help
              your brand grow. Contact us today!
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
              We are tracking and analyzing your links to help you make the most
              of your click-through. Our bean-counters are hard at work creating
              fancy spreadsheets and graphs to determine how your links are
              performing and developing the best strategies to expand your
              brand!
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
              Coming soon! We plan on creating custom QR codes for your links.
              We are working on it!
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </Container>
  );
}
