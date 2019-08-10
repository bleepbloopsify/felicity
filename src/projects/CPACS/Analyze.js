import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: "flex",
    "flex-direction": "column",
    "margin-top": "2em",
  },
  img: {
    "max-width": "100%",
  }
});

class Analyze extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="subtitle1" gutterBottom>
          Analyze
        </Typography>

        <Typography gutterBottom>
          <b>
          Such a large system required us to divide and conquer to work efficiently.   
          </b>
        </Typography>

        <Typography variant="body1" style={{ paddingBottom: "2em" }}>
        The redesign of CPACS happened in modules. The system is a large one, consisting of many different workflows for each document that exists.
        </Typography>

        <img className={classes.img} alt="CPACS Divide and Conquer diagram" src="/CPACSweb/Frame.png" />
      </div>
    );
  }
}

export default withStyles(styles)(Analyze);