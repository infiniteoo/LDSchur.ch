import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const Result = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item /*  xl={2} lg={2} md={2} sm={4} xs={6} */>
        <Card style={{ width: "100%", marginTop: "50px" }}>
          <CardContent>
            <Typography
              justifyContent="center"
              variant="h4"
              className="resultsBox"
            >
              https://LDSchur.ch/sx$23f
            </Typography>
          </CardContent>
          <CardActions>
            <Grid container justifyContent="center">
              <Button size="small">
                <ContentCopyIcon />
                Copy to Clipboard
              </Button>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Result;
