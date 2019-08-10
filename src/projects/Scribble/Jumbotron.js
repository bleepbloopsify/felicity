import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';

import jumbotron from './Jumbotron.svg';

const styles = theme => ({
  root: {
    width: "100%",
  },
  img: {
    width: "100%",
  }
});

class Jumbotron extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <img alt="" className={classes.img} src={jumbotron}></img>
      </div>
    );
  }
}

export default withStyles(styles)(Jumbotron);