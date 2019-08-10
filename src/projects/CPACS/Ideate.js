import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: "flex",
    "flex-direction": "column",
    "padding-top": "2em",
  },
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
          Design Principles
          </b><br/><br/>
          - <b>Simple:</b> Cut down on extrenuous parts of a workflow to allow work to be done faster<br/><br/>
          - <b>Uniform:</b> Discover the inconsistencies in the systems that would cause issues with information being transferred between systems<br/><br/>
          - <b>Convenient:</b> Try to minimize the need for user support (ex: invalid inputs by users don’t yield helpful feedback) and push for designs that don’t require as much screen switching, as certain tasks might require referencing a different document; Make the tasks of using this system a less frustrating job
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Ideate);