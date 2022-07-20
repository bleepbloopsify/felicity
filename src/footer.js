import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    "width": "100%",
    height: "auto",
    // "background-color": "#F5FDFF",
    "padding": "24px 100px",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "flex-start",
    "align-items": "center",
    "box-sizing": "border-box",
    "margin-top": "64px",
    [theme.breakpoints.down('md')]: {
      "flex-direction": "column",
      "height": "auto",
      "padding": "35px 20px 20px 20px",
    },
  },
  icon_group: {
    "width": "100px",
    "margin-top": "24px",
    "display": "flex",
    "flex-direction": "row",
    "justify-content": "space-between",
    "align-items": "center",
    "padding": "0px 30px",
    [theme.breakpoints.down('md')]: {
      "width": "30%",
      "display": "flex",
      "flex-direction": "row",
      "justify-content": "space-between",
    },
  },
  footer__icon: {
    width: "32px",
    height: "auto",
      [theme.breakpoints.down('md')]: {
        "margin-left": "0px",
      },
  }
});

class Footer extends Component {

  render() {
    const { classes } = this.props;
    return (
      <footer className={classes.root}>
        <Typography variant="h1" color="primary">
          felicity ng
        </Typography>
        <div className={classes.icon_group}>
          <a href="mailto: felicity.ng@nyu.edu">
            <img alt="email icon" src="/email_icon.png" className={classes.footer__icon}></img>
          </a>

          <a href="https://www.linkedin.com/in/felicity-ng/" target="_blank" rel="noopener noreferrer">
            <img alt="linkedin icon" src="/linkedin_icon.png" className={classes.footer__icon}></img>
          </a>
        </div>
      </footer>
    );
  }
}


export default withStyles(styles)(Footer);
