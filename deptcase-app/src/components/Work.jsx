import { Grid, Typography } from "@mui/material";
import * as React from "react";
import workTopLeft from "../assets/images/work1.png";

function Work() {
  return (
    <Grid container className="work">
      <Grid className="small-header-box" item lg={6}>
        <Typography className="small-header-left" variant="h5" component="div">
          Show me <span>all work</span>
        </Typography>
      </Grid>
      <Grid className="small-header-box" item lg={6}>
        <Typography className="small-header-right" variant="h5" component="div" sx={{ textAlign: "right" }}>
          in <span>all industries</span>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} lg={6}>
        <img className="work-image" src={workTopLeft} alt="Dept work"></img>
        <Grid className="work-text-box" item xs={12} sm={12} md={6} lg={6}>
          <Typography
            className="small-header"
            variant="h5"
            component="div"
            sx={{ mb: 4 }}
          >
            BOL.COM
          </Typography>
          <Typography className="main-text" variant="h3" component="div">
            A Summer island in the Netherlands
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} lg={6}>
        <img className="work-image" src={workTopLeft} alt="Dept hero"></img>
        <Grid className="work-text-box" item xs={12} sm={12} md={6} lg={6}>
          <Typography
            className="small-header"
            variant="h5"
            component="div"
            sx={{ mb: 4 }}
          >
            KEMPEN
          </Typography>
          <Typography className="main-text" variant="h3" component="div">
            Not some average banking website
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Work;
