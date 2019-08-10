import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: "100%",
    height: "20em",
    background: "#F3F3F3",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
  },
  img: {
    "max-height": "24em",
  }
});

class Jumbotron extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <img alt="" className={classes.img} src="/CPACSweb/CPACS Logo-01.png"></img>
      </div>
    );
  }
}

export default withStyles(styles)(Jumbotron);