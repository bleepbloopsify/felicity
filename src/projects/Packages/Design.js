import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: "flex",
    "flex-direction": "column",
    "padding-top": "2em",
  }
});

class Design extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="subtitle1" gutterBottom>
          Design
        </Typography>
        <Typography gutterBottom>
          <b>
          It was a data centric system. Everything revolves around packages so that’s what we began with.
          </b><br/><br/>
          When a package is delivered to the package room, the most likely outcome would be that it is delivered to the intended resident. A package is signed for by either the intended resident or someone who lives with that resident. The decision to release a package to someone is left up to the discretion of the package room employees.<br /><br />
          A package can also be returned, whether because they were refused by the resident or because the package hasn’t been picked up by a specified deadline.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Design);