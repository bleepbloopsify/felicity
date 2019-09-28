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

class Evolution extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="subtitle1" gutterBottom>
          Evolution
        </Typography>

        <Typography gutterBottom>
          <b>The logo was central but the branding was allowed flexibility to
          change every year.
          </b>
          <br/>
          I started with Scribble as a student part timer with the department
          and Scribble will probably continue to be organized by more students
          in the future, after I move on from OTSS. I was given the opportunity
          to develop the vision for the event while learning and growing from it
          as well. I hope in the future, the event will do the same for other
          tudents. I wanted the project to be a fun, creative projects, where
          students working on it can showcase their skills. The logo holds the
          central ideas of creativity, community, and organic development but I
          left the branding open ended. Each year, a new student will help
          organize the event and each year, they will have the opportunity to
          brand the event however they want.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Evolution);
