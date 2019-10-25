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
  button: {
    "all": "unset",
    "font-family": "'Muli', sans-serif",
    "font-weight": "bold",
    "font-size": "12px",
    "background-color": "#880A56",
    "color": "white",
    "text-align": "center",
    "width": "140px",
    "padding": "8px 0px",
    "border-radius": "50px",
    "cursor": "pointer",
    "&:hover": {
      "background-color": "#D772AF",
      "color": "black",
    }
  },
});

class LearnMore extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="subtitle1" gutterBottom>
          Learn More
        </Typography>

        <Typography gutterBottom>
          <b>The website was redesigned for 2019 (its second year) by me again.
          </b>
        </Typography>
        <a className={classes.button} href="http://www.scribblenyc.nyu.edu" target="_blank" rel="noopener noreferrer">
          Go to the website
        </a>

      </div>
    );
  }
}

export default withStyles(styles)(LearnMore);
