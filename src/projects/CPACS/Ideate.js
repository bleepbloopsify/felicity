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
  grid__span6: {
    width: "100%",
    height: "auto",
    "grid-column": "span 6",
    "grid-row": "span 1",
  }
});

class Ideate extends Component {
  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="subtitle1" gutterBottom>
          Ideate
        </Typography>
        <Typography gutterBottom>
          <b>
          Design principles
          </b><br/>
          - <b>Informative:</b> Nobody should sift through a large manual to
          understand how to fill out a form properly. All the information a user
          needs will already be in the forms themselves.
          <br/>
          - <b>Smart:</b> The forms will ask as few questions as possible
          because the system can infer from information already given to it.
        </Typography>
        <div className={classes.grid}>
          <img src="/CPACSweb/Budget_process_after.jpg"
                alt="budget process after"
                className={classes.grid__span6}/>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Ideate);
