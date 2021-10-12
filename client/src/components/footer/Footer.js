import React from "react";
import { makeStyles } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../../imgs/lds.png";

const useStyles = makeStyles({
  footer: {
    background: "black",
    color: "#E7D777",
    fontFamily: ["Georama"],
    fontWeight: "bold",
    marginTop: "2rem",
    borderRadius: "20px",
  },

  link: {
    color: "white",
    textDecoration: "none",
  },

  footerLists: {
    display: "flex",
    justifyContent: "space-between",
  },

  listHead: {
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: "5px",
  },

  divider: {
    width: "100%",
    height: "3px",
    borderTop: "1px #ccc solid",
    margin: "30px 0",
  },

  footerContainer: {
    maxWidth: "1100px",
    margin: "auto",
    padding: "40px",
  },
  socialIcons: {
    paddingRight: "10px",
    color: "#E7D777",
    textDecoration: "none",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  img: {
    width: "50px",
  },
  socialholder: {
    display: "flex",
  },
  "@media(max-width: 855px)": {
    footerLists: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
    },
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        <div className={classes.divider}></div>
        <div className={classes.footerLists}>
          <ul style={{ listStyleType: "none" }}>
            <li className={classes.listHead}>Why LDSchur.ch?</li>
            <li>
              <a className={classes.link} href="/why">
                URL Shortening 101
              </a>
            </li>
            <li>
              <a className={classes.link} href="/why">
                Integration & API
              </a>
            </li>
            <li>
              <a className={classes.link} href="/why">
                Enterprise Class
              </a>
            </li>
            <li>
              <a className={classes.link} href="/why">
                Pricing
              </a>
            </li>
          </ul>

          <ul style={{ listStyleType: "none" }}>
            <li className={classes.listHead}>Solutions</li>
            <li>
              <a className={classes.link} href="/solutions">
                Social Media
              </a>
            </li>
            <li>
              <a className={classes.link} href="/solutions">
                Digital Marketing
              </a>
            </li>
            <li>
              <a className={classes.link} href="/solutions">
                Customer Service
              </a>
            </li>
            <li>
              <a className={classes.link} href="/solutions">
                For Developers
              </a>
            </li>
          </ul>
          <ul style={{ listStyleType: "none" }}>
            <li className={classes.listHead}>Features</li>
            <li>
              <a className={classes.link} href="/features">
                Link Management
              </a>
            </li>
            <li>
              <a className={classes.link} href="/features">
                Branded Links
              </a>
            </li>
            <li>
              <a className={classes.link} href="/features">
                Mobile Links
              </a>
            </li>
            <li>
              <a className={classes.link} href="/features">
                Campaigns
              </a>
            </li>
            <li>
              <a className={classes.link} href="/features">
                Management & Analytics
              </a>
            </li>
            <li>
              <a className={classes.link} href="/features">
                QR Codes
              </a>
            </li>
          </ul>
          <ul style={{ listStyleType: "none" }}>
            <li className={classes.listHead}>Resources</li>
            <li>
              <a className={classes.link} href="/resources">
                Blog
              </a>
            </li>
            <li>
              <a className={classes.link} href="/resources">
                Resource Library
              </a>
            </li>
            <li>
              <a className={classes.link} href="/resources">
                Developers
              </a>
            </li>
            <li>
              <a className={classes.link} href="/resources">
                Support
              </a>
            </li>
          </ul>
          <ul style={{ listStyleType: "none" }}>
            <li className={classes.listHead}>Legal</li>
            <li>
              <a className={classes.link} href="/home">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className={classes.link} href="/home">
                Terms of Service
              </a>
            </li>
          </ul>
          <ul style={{ listStyleType: "none" }}>
            <li className={classes.listHead}>Company</li>
            <li>
              <a className={classes.link} href="/home">
                About Us
              </a>
            </li>
            <li>
              <a className={classes.link} href="/home">
                Careers
              </a>
            </li>
            <li>
              <a className={classes.link} href="/home">
                Partners
              </a>
            </li>
            <li>
              <a className={classes.link} href="/home">
                Press
              </a>
            </li>
            <li>
              <a className={classes.link} href="/home">
                Contact
              </a>
            </li>
            <li>
              <a className={classes.link} href="/home">
                Reviews
              </a>
            </li>
          </ul>
        </div>
        <div className="socialholder">
          <div className={classes.socialIcons}>
            <a className={classes.socialIcons} href="https://facebook.com">
              <FacebookIcon />
            </a>
            <a className={classes.socialIcons} href="https://twitter.com">
              <TwitterIcon />
            </a>
            <a className={classes.socialIcons} href="https://youtube.com">
              <YouTubeIcon />
            </a>
            <a className={classes.socialIcons} href="https://instagram.com">
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div className={classes.divider}></div>
      </div>
    </footer>
  );
}

export default Footer;
