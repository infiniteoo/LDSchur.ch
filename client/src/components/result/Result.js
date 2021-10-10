import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { Grid } from "@material-ui/core";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";

const Result = (props) => {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item /*  xl={2} lg={2} md={2} sm={4} xs={6} */>
        <Card style={{ width: "100%", marginTop: "50px", padding: "20px" }}>
          <CardContent>
            <Typography variant="h4" className="resultsBox">
              {props.shortURL}
            </Typography>
          </CardContent>
          <CardActions>
            <Grid container justifyContent="center">
              <Stack spacing={2} sx={{ width: "100%" }}>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    Link copied to clipboard!
                  </Alert>
                </Snackbar>
                <CopyToClipboard text={props.shortURL}>
                  <Button
                    size="small"
                    onClick={() => {
                      handleClick();
                      console.log(open);
                    }}
                  >
                    <ContentCopyIcon />
                    Copy to Clipboard
                  </Button>
                </CopyToClipboard>
              </Stack>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Result;
