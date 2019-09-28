import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: "flex",
    "flex-direction": "column",
    "margin-bottom": "100px"
  },
  grid: {
    width: "100%",
    display: "grid",
    "grid-template-columns": "repeat(12, 1fr)",
    "grid-template-rows": "auto",
    "grid-column-gap": "20px",
  },
  grid__span6__row1: {
    width: "100%",
    height: "auto",
    "grid-column": "span 6",
    "grid-row": "span 1",
  },
  grid__span6__row2: {
    width: "100%",
    height: "auto",
    "grid-column": "span 6",
    "grid-row": "span 2",
  },
});

class Applications extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="subtitle1" gutterBottom>
          Applications
        </Typography>

        <Typography gutterBottom>
          <b>The logo was used on posters, swag handed out at the event, and on
          the website for the event.
          </b>
        </Typography>

        <div className={classes.grid}>
          <img src="/Scribble/poster_mockup.png"
                alt="scribble poster mockup"
                className={classes.grid__span6__row2}/>
          <img src="/Scribble/swag.jpg"
                alt="scribble swag"
                className={classes.grid__span6__row1}/>
          <img src="/Scribble/first_year_website.png"
                alt="scribble old website"
                className={classes.grid__span6__row1}/>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Applications);
