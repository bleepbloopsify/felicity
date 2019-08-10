import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: "flex",
    "flex-direction": "column",
    "padding-top": "2em",
  }
});

class Testing extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="subtitle1" gutterBottom>
          Testing
        </Typography>
        <Typography gutterBottom>
          <b>
          Tailoring the experience for a very specific crowd
          </b><br/><br/>
          Packages, at its inception, was meant for six ladies, each of which worked at a package room in NYU Faculty housing. They are our initial audience for this application. While there are plans to expand the system, we had to satisfy the requirements set forth by these ladies first. User tests were performed on people who were most similar to our target audience. The participants were middle aged people with varying degrees of familiarity with technology.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Testing);