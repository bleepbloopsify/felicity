import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: "flex",
    "flex-direction": "column",
    "margin-bottom": "100px"
  },
});

class Story extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="subtitle1" gutterBottom>
          Story
        </Typography>

        <Typography gutterBottom>
          <b>It started as a contest to name and design a logo for a design
          workshop that will be hosted by OTSS.
          </b>
          <br/>
          Scribble NYC started as a department wide contest to name a workshop that will be “part forum, part game, and part hackathon”. The aim of the workshop was to continue the work that our K12 program started, where children from local K12 schools came together to learn about the different roles that work together to create software. I submitted my design idea, proposing the workshop to be named Scribble. My reasoning? Scribbling represents the flow of what happens when problems are solved. It is the first of many steps to solving a problem and we scribble to help us think, to remember our ideas, and to communicate them to others.
          <br/>
          I won the contest and I was tasked with further developing the logo
          idea and creating a poster to promote the event.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Story);
