import { Typography, withStyles } from '@material-ui/core';
import React, { Component } from 'react';

const styles = theme => ({
  root: {
    display: "flex",
    "flex-direction": "column",
    "padding-top": "2em",
  }
});

class Research extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="subtitle1" gutterBottom>
          Research
        </Typography>
        <Typography gutterBottom>
          <b>
          Defining the problem
          </b><br /><br />
          -&nbsp;&nbsp;&nbsp;&nbsp;Inefficient<br/>
          -&nbsp;&nbsp;&nbsp;&nbsp;Not environmentally friendly<br />
          -&nbsp;&nbsp;&nbsp;&nbsp;Not enough human resources to handle the increase in package volume<br />
          -&nbsp;&nbsp;&nbsp;&nbsp;Lacks scalability<br />
          -&nbsp;&nbsp;&nbsp;&nbsp;Difficulty in tracing packages from using paper records<br />
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Research);