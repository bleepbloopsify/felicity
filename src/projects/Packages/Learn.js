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
          If the new mailroom packages system works out, the system will be used
          by all residential buildings throughout NYU. With this, we would need
          to do more research into how the system will fit into the lives of
          students as well. Dorms operate differently from faculty housing,
          which means we would need to further develop our designs to deal with
          this fact.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Learn);
