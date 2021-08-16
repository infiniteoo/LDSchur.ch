import React from "react";
import Paper from "@material-ui/core/Paper";
import LDSLogo from "../../imgs/lds.png";

const Logo = () => {
  return (
    <div>
      <Paper variant="outlined">
        <img src={LDSLogo} alt="Minimal LDS Logo" />
      </Paper>
    </div>
  );
};

export default Logo;
