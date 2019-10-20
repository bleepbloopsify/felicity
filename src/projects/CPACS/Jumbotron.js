import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: "100%",
    height: "516px",
    background: "#F3F3F3",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    "box-sizing": "border-box",
    [theme.breakpoints.down('md')]: {
      "height": "auto",
      "padding": "70px 20px 20px 20px",
    },
  },
  img: {
    "max-height": "24em",
    [theme.breakpoints.down('md')]: {
      "max-width": "100%",
      "height": "auto",
    },
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
