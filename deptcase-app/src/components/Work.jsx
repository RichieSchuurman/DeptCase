import { Grid, Typography } from "@mui/material";
import * as React from "react";
import workTopLeft from "../assets/images/work1.png"

function Work() {
  return (
    <Grid container className="work">
      <Grid item xs={12}>
        <img className="work-image" src={workTopLeft} alt="Dept hero"></img>
      </Grid>
      <Grid className="work-text-box" item xs={12} sm={12} md={6} lg={6}>
        <Typography className="small-header" variant="h5" component="div" sx={{ mb: 4}}>
            Work
        </Typography>
        <Typography className="main-text" variant="h3" component="div">
        A selection of projects that <b>pioneer tech</b> and <b>marketing</b> to help brands stay ahead.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Work;
