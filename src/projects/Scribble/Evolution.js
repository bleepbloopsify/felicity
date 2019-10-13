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
          <b>As I worked on the event's branding, I came to realize the value of such a workshop and pushed to expand the event into something much more meaningful.
          </b>
          <br/>
          Now, Scribble NYC is a day dedicated to learning about the intersection of design and technology through hands-on, interactive workshops and later on in the day, a design-a-thon. While the event was previously targetted to students in our K12 program, it is now open to all that want to learn. The design-a-thon portion is only open to middle school and high school students but adults, especially teachers, attend our workshops to learn more about design thinking and how to bring it into their everyday lives.
          <br/>
          <br/>
          I started with Scribble as a student part timer with the department. After I graduate, Scribble will probably continue to be organized by more students. I wanted the event to be an outlet for students to showcase their skills. With that, I created the logo to hold the central ideas of creativity, community, and organic development but I left the branding open ended. Each year, a new student will help organize the event and each year, they will have the opportunity to brand the event however they want.


        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Evolution);
