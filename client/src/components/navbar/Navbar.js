import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import logo from "../../imgs/lds.png";
const useStyles = makeStyles({
  root: {
    fontFamily: ["Georama"],
    backgroundColor: "#000",

    justifyContent: "flex-end",
    padding: "10px",
    marginTop: "10px",
    marginRight: "50px",
    fontSize: "30px",
    display: "flex",
  },
  link: {
    color: "#E7D777",
    textDecoration: "none",
    marginLeft: "50px",
    "&:hover": {
      fontWeight: "bold",
    },
  },

  img: {
    height: "55px",
    border: "2px solid white",
    clipPath: "ellipse(25% 40% at 50% 50%)",
    margin: "5px",
    backgroundColor: "black",
  },
  navHolder: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#000",
    position: "fixed",
    top: "0",
    width: "100%",
    marginBottom: "1rem",
    zIndex: "100",
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.navHolder}>
      <Link to="/home">
        <img src={logo} alt="" className={classes.img} />
      </Link>
      <div className={classes.root}>
        <Link to="/why" className={classes.link}>
          Why?
        </Link>
        <Link to="/solutions" className={classes.link}>
          Solutions
        </Link>
        <Link to="/features" className={classes.link}>
          Features
        </Link>
        <Link to="/resources" className={classes.link}>
          Resources
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
