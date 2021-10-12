import React from "react";
import { makeStyles } from "@material-ui/core";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";

const useStyles = makeStyles({
  middle: {
    fontFamily: ["Georama"],
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "55px",
  },
  scroll: {
    marginTop: "50px",
    fontFamily: ["Georama"],
    textAlign: "center",
    fontSize: "20px",
  },
  factoids: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    fontFamily: ["Georama"],
    gap: "20px",
    border: "5px dashed lightgrey",
    borderRadius: "10px",
    padding: "50px",
  },
  spanicon: {
    "& svg": {
      fontSize: "100",
    },
  },

  icons: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "#E7D777",
    padding: "20px",
  },
  "@media(max-width: 768px)": {
    factoids: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
});

export default function Middle() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.scroll}>
        <p>Scroll to learn more</p>
        <ArrowDownward />
        <ArrowDownward />
        <ArrowDownward />
      </div>
      <div className={classes.middle}>
        <strong>
          <p>The link shortner that has your family's back</p>
        </strong>
      </div>
      <div className={classes.factoids}>
        <div>
          <div className={classes.icons}>
            <span className={classes.spanicon}>
              <HealthAndSafetyIcon style={{ fontSize: "75px" }} />
            </span>
          </div>
          <h2>Inspire Trust</h2>
          <p style={{ fontSize: "1.25rem" }}>
            Other link shortner services are not as safe as us. From
            pornography, to violence, to blasphemous material, you aren't
            guaranteed the link you'll be clicking will be family and church
            friendly. With us, you know you're only getting safe, reliable
            content.
          </p>
        </div>
        <div>
          <div className={classes.icons}>
            <ShowChartIcon style={{ fontSize: "75px" }} />
          </div>
          <h2>Boost Results</h2>
          <p style={{ fontSize: "1.25rem" }}>
            We're not just a link shortner. We're a link shortner that's built
            on top of SafeLink &#174; technology, which is a custom filter that
            determines if a link is safe to share. Plus, LDSchur.ch links are
            more attractive and compact, resulting in more click-throughs and
            deliverability.
          </p>
        </div>
        <div>
          <div className={classes.icons}>
            <ControlCameraIcon style={{ fontSize: "75px" }} />
          </div>
          <h2>Gain control</h2>
          <p style={{ fontSize: "1.25rem" }}>
            Take credit for your content and learn more about how it’s consumed
            by enabling auto-branding—a feature that ensures your brand remains
            in any link someone shortens pointing to your website.
          </p>
        </div>
      </div>
    </>
  );
}
