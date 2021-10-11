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
            <li className={classes.listHead}>BROWSE</li>
            <li>
              <a className={classes.link} href="#">
                Streaming Library
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Live TV
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Live News
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Live Sports
              </a>
            </li>
          </ul>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <a className={classes.link} href="#">
                TV Shows
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Movies
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Originals
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Networks
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Kids
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                FX on Hulu
              </a>
            </li>
          </ul>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <a className={classes.link} href="#">
                Hulu, Disney+, and ESPN+
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Disney Bundle
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                HBO Max
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Cinimax
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Showtime
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                STARZ
              </a>
            </li>
          </ul>
          <ul style={{ listStyleType: "none" }}>
            <li className={classes.listHead}>HELP</li>
            <li>
              <a className={classes.link} href="#">
                Account & Billing
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Plans & Pricing
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Supported Devices
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Accesibility
              </a>
            </li>
          </ul>
          <ul style={{ listStyleType: "none" }}>
            <li className={classes.listHead}>ABOUT US</li>
            <li>
              <a className={classes.link} href="#">
                Press
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Jobs
              </a>
            </li>
            <li>
              <a className={classes.link} href="#">
                Contact
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
