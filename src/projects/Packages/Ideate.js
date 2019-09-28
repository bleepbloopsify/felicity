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
          - <b>Familiar:</b> The current process need to be improved, but it
          doesn’t mean all aspects of it were bad. The residents and mailroom
          employees are used to a certain process and deviating too much from it
          can be jarring.
          <br/>
          - <b>Accountability:</b> The mailroom employees emphasized that their
          biggest problem was the sheer amount of packages being kept in the
          mailroom due to residents not picking them up. The designs should
          focus on trying to get packages out of the mailrooms as efficiently as
          possible, pushing residents to pick up packages as soon as possible or
          pushing employees to return packages back to the sender if residents
          do not pick up their packages.
          <br/>
          - <b>Streamlined:</b> Whether it’s digital or paper-based, the
          mailroom employees’ responsibilities are pretty repetitive. It is
          unavoidable, but the designs should make the lives of the mailroom
          employees as easy as possible, allowing things such as bulk actions
          and incorporating tools to make data entry easier.
        </Typography>
        <div className={classes.grid}>
          <img src="/Packages/process_after.jpg"
                alt="process after"
                className={classes.grid__span6}/>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Ideate);
