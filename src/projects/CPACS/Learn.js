import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: "flex",
    "flex-direction": "column",
    "margin-bottom": "100px"
  }
});

class Learn extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="subtitle1" gutterBottom>
          Learn
        </Typography>
        <Typography gutterBottom>
          <b>
          Next steps
          </b>
          <br/>
          After working out the input part of the budget module, we will need to
          display the information users give us. I foresee lots of data visualization.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Learn);
