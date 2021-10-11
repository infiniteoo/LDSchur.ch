import React from "react";
import { makeStyles } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

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
              <a className={classes.link} href="#">
                URL Shortening 101
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Integration & API
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Enterprise Class
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Pricing
              </a>
            </li>
          </ul>

          <ul style={{ listStyleType: "none" }}>
            <li className={classes.listHead}>Solutions</li>
            <li>
              <a className={classes.link} href="#">
                Social Media
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Digital Marketing
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Customer Service
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                For Developers
              </a>
            </li>
          </ul>
          <ul style={{ listStyleType: "none" }}>
            <li className={classes.listHead}>Features</li>
            <li>
              <a className={classes.link} href="#">
                Link Management
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Branded Links
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Mobile Links
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Campaigns
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Management & Analytics
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                QR Codes
              </a>
            </li>
          </ul>
          <ul style={{ listStyleType: "none" }}>
            <li className={classes.listHead}>Resources</li>
            <li>
              <a className={classes.link} href="#">
                Blog
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Resource Library
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Developers
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Support
              </a>
            </li>
          </ul>
          <ul style={{ listStyleType: "none" }}>
            <li className={classes.listHead}>Legal</li>
            <li>
              <a className={classes.link} href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Terms of Service
              </a>
            </li>
          </ul>
          <ul style={{ listStyleType: "none" }}>
            <li className={classes.listHead}>Company</li>
            <li>
              <a className={classes.link} href="#">
                About Us
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Careers
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Partners
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Press
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Contact
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Reviews
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.socialIcons}>
          <a className={classes.socialIcons} href="#">
            <FacebookIcon />
          </a>
          <a className={classes.socialIcons} href="#">
            <TwitterIcon />
          </a>
          <a className={classes.socialIcons} href="#">
            <YouTubeIcon />
          </a>
          <a className={classes.socialIcons} href="#">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
