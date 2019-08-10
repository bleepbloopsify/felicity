import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

import jumbotron from './jumbotron.svg'

const styles = theme => ({
  root: {
    display: 'flex',
    'align-items': "center",
    "justify-content": "center",
    "background-color": "#FFFCF1",
  },
});

class Jumbotron extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <img alt="" src={jumbotron} />
      </div>
    );
  }
}

export default withStyles(styles)(Jumbotron);