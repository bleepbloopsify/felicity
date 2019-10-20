import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: "100%",
    height: "10em",
    "background-color": "#F5FDFF",
    "padding": "70px 50px",
    display: "flex",
    "flex-direction": "row",
    "justify-content": "space-between",
    "align-items": "center",
    "box-sizing": "border-box",
    "margin-top": "80px",
    [theme.breakpoints.down('md')]: {
      "flex-direction": "column",
      "height": "auto",
      "padding": "35px 20px 20px 20px",
    },
  },
  icon_group: {
    [theme.breakpoints.down('md')]: {
      "width": "30%",
      "display": "flex",
      "flex-direction": "row",
      "justify-content": "space-between",
      "margin-top": "40px",
    },
  },
  footer__icon: {
    "margin-left": "30px",
    width: "26px",
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
          felicity.ng@nyu.edu
        </Typography>
        <div className={classes.icon_group}>
          <a href="https://github.com/felicitypictures" target="_blank" rel="noopener noreferrer">
            <img alt="github icon" src="/github_icon.png" className={classes.footer__icon}></img>
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
