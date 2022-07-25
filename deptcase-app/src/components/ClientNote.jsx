import { Divider, Grid, Typography } from "@mui/material";
import * as React from "react";
import clientNote from "../assets/images/clientNote.png";
import readmoreButton from "../assets/images/readmoreButton.png";

function ClientNote() {
  return (
    <Grid container className="clientNote">
      <Grid item xs={12} sm={12} lg={8}>
        <img className="clientNote-image" src={clientNote} alt="Dept ClientNote"/>
        <Grid className="clientNote-text-box" item xs={12} sm={12} md={6} lg={6}>
          <Typography
            className="small-header"
            variant="h5"
            component="div"
            sx={{ mb: 4 }}
          >
           FLORENSIS
          </Typography>
          <Typography className="main-text" variant="h3" component="div">
          Rethinking the entire online ecosystem
          </Typography>
        </Grid>
      </Grid>

      <Grid className="clientNote-right" item xs={12} sm={12} lg={4}>
          <Typography
            className="small-header"
            variant="subtitle1"
            component="div"
            sx={{ mb: 1}}
          >
            MICROSOFT
          </Typography>
          <Typography className="main-text" variant="subtitle1" component="div" sx={{mb: 1}}>
          Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels
          </Typography>
          <img className="readmore-button" src={readmoreButton} alt="readmore button"/><span>Read More</span>
          <Divider light />

          <Typography
            className="small-header"
            variant="subtitle1"
            component="div"
            sx={{ mb: 1, mt: 1 }}
          >
            O’NEILL
          </Typography>
          <Typography className="main-text" variant="subtitle1" component="div" sx={{mb: 1}}>
          Integrating existing content into O’Neills’s new e-commerce platform
          </Typography>
          <img className="readmore-button" src={readmoreButton} alt="readmore button"/><span>Read More</span>

          <Divider light />

          <Typography
            className="small-header"
            variant="subtitle1"
            component="div"
            sx={{ mb: 1, mt: 1 }}
          >
            MICROSOFT
          </Typography>
          <Typography className="main-text" variant="subtitle1" component="div" sx={{mb: 1}}>
          Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels
          </Typography>
          <img className="readmore-button" src={readmoreButton} alt="readmore button"/><span>Read More</span>
      </Grid>
      
    </Grid>
  );
}

export default ClientNote;
