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
    "margin-top": "20px",
    display: "grid",
    "grid-template-columns": "repeat(12, 1fr)",
    "grid-template-rows": "auto",
    "grid-column-gap": "20px",
    "grid-row-gap": "40px",
    [theme.breakpoints.down('md')]: {
      "grid-template-columns": "repeat(6, 1fr)",
    },
  },
  grid__span6: {
    width: "100%",
    height: "auto",
    "margin": "0px",
    "grid-column": "4 / span 6",
    "grid-row": "span 1",
    [theme.breakpoints.down('md')]: {
      "grid-column": "1 / span 6",
    },
  },
  grid__span6__image:{
    width: "100%",
  },
  grid__span6__caption:{
    "text-align": "center",
    "font-size": "12px",
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
          <figure className={classes.grid__span6}>
            <img src="/Packages/journey_map.png"
                  alt="journey map of new packages process"
                  className={classes.grid__span6__image}/>
            <figcaption className={classes.grid__span6__caption}>
              Journey map to demonstrate the new packages process
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Ideate);
