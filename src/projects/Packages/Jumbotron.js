import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: "100%",
    height: "516px",
    background: "#FFFCF1",
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
        <img alt="" className={classes.img} src="/Packages/Packages_Logo.png"></img>
      </div>
    );
  }
}

export default withStyles(styles)(Jumbotron);
