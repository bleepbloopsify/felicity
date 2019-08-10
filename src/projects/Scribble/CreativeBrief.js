import { Typography, withStyles } from '@material-ui/core';
import React, { Component } from 'react';

const styles = theme => ({
  root: {
    display: "flex",
    "flex-direction": "column",
    "padding-top": "2em",
  }
});

class CreativeBrief extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="subtitle1" gutterBottom>
          Creative Brief
        </Typography>
        <Typography gutterBottom>
          <b>
          It started as a contest to name a NYC design workshop that will be hosted by OTSS.
          </b><br /><br />
          The workshop will be part forum, part game, and part hackathon. The aim of the workshop is to continue the work that our K12 program started, where children from local K12 schools came together to learn about the different roles that work together to create software.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(CreativeBrief);