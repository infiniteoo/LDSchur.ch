import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  middle: {
    fontFamily: ["Georama"],
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "45px",
  },
  accordion: {
    fontFamily: ["Georama !important"],
    fontWeight: "bold !important",
    fontSize: "21px !important",
  },
});

function FAQ() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.middle}>
        <strong>
          <p>Frequenty asked questions</p>
        </strong>
      </div>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.accordion}>
            What is a URL Shortner?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A URL shortener, also known as a link shortener, works by
            transforming any long URL into a shorter, more readable link. When a
            user clicks the shortened version, they’re automatically forwarded
            to the original, longer URL.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.accordion}>
            What are the Benefits of a Short URL?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Extremely long website URLs can be confusing and intimidating to
            users. Plus, on social media platforms such as Twitter, you are
            limited to the amount of characters you can use. A short URL will
            condense a really long website address into a few characters. This
            will make it easier to share the link and overall increase traffic.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.accordion}>
            What is SafeLink&#174; Technology?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Other URL shortening services allow you to convert ANY long link
            into a short link. This means they could send you to a fake link, or
            a link unsuitable for a wholesome person's eyes, such as pornography
            or violent content. SafeLink&#174; Technology is a built-in custom
            filter only found on on our platform, that removes the ability to do
            this, and ensures when a user receives an LDSchur.ch link, they are
            guaranteed to be safe.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.accordion}>
            Are You Affiliated With The Church of Jesus Christ of Latter-Day
            Saints?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            While the creators of this website are active, temple-recommended
            members of The Church of Jesus Christ of Latter-Day Saints, we are
            not directly affiliated, endorsed or run by the church.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.accordion}>
            Why Did You Build This Website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We built this website to serve our Lord Jesus Christ and to help
            people find the best short links for their websites. We hope you
            enjoy using it, and we hope you will join us in our mission to
            spread the Gospel of Jesus Christ. We also hope you will share your
            own LDSchur.ch links with your friends and family. In addition, this
            site was built as a demostration of our development skills to
            showcase our ability on our portfolio, and one day to find full-time
            employment as a full-stack web developer.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FAQ;
