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
  },
  icons: {
    fontSize: "7rem !important",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Middle() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.scroll}>
        <p>Scroll to learn more</p>
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
            <HealthAndSafetyIcon />
          </div>
          <h2>Inspire Trust</h2>
          <p>
            With more clicks comes increased brand recognition and consumer
            trust in your communications—which in turn inspires even more
            engagement with your links. (It’s a wonderful cycle.)
          </p>
        </div>
        <div>
          <div className={classes.icons}>
            <ShowChartIcon />
          </div>
          <h2>Boost Results</h2>
          <p>
            On top of better deliverability and click-through, rich link-level
            data gives you crucial insight into your link engagement so your
            team can make smarter decisions around its content and
            communications.
          </p>
        </div>
        <div>
          <div className={classes.icons}>
            <ControlCameraIcon />
          </div>
          <h2>Gain control</h2>
          <p>
            Take credit for your content and learn more about how it’s consumed
            by enabling auto-branding—a feature that ensures your brand remains
            in any link someone shortens pointing to your website.
          </p>
        </div>
      </div>
    </>
  );
}
