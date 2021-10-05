import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { Grid } from "@material-ui/core";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Result = (props) => {
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
                <CopyToClipboard
                  text={props.shortURL}
                  onChange={() => console.log("copied to clipboard")}
                >
                  <Button size="small">
                    <ContentCopyIcon />
                    Copy to Clipboard
                  </Button>
                </CopyToClipboard>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
   
  );
};

export default Result;
