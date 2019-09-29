import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Navbar from '../LandingPage/Navbar';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    display: "flex",
    "flex-direction": 'column',
  },
  footer: {
    height: "10em",
    "background-color": "#F5FDFF",
    "padding-left": "5em",
    "padding-top": "3em",
    "padding-right": "5em",
    "margin-top": "10em",
  },
  footer: {
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
  },
  footer__icon: {
    "margin-left": "30px",
    width: "26px",
    height: "auto",
  }
});

/**
 * This is meant to be a root container for project pages
 * it will contain the navbar and the footer, and basically give the project page full reign over the rest.
 */
class ProjectContainer extends Component {
  render() {

    const { classes, children } = this.props;

    return (
      <div className={classes.root}>
        <header>
          <Navbar />
        </header>

        {children}

        <footer className={classes.footer}>
          <Typography variant="h1" color="primary">
            felicity.ng@nyu.edu
          </Typography>
          <div>
            <a href="https://github.com/felicitypictures" target="_blank" rel="noopener noreferrer">
              <img alt="github icon" src="/github_icon.png" className={classes.footer__icon}></img>
            </a>

            <a href="https://www.linkedin.com/in/felicity-ng/" target="_blank" rel="noopener noreferrer">
              <img alt="linkedin icon" src="/linkedin_icon.png" className={classes.footer__icon}></img>
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles)(ProjectContainer);
