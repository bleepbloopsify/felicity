import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Navbar from '../LandingPage/Navbar';

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
  footerLogos: {
    "float": "right",
  },
  footerLogoItem: {
    "padding-left": "5em",
  },
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
        <Navbar />

        {children}

        {/* Footer */}
        <div className={classes.footer}>
          <Typography variant="h1" color="primary">
            felicity.ng@nyu.edu
          </Typography>

          {/* Put logos here */}
          <div className={classes.footerLogos}>
            <a target="_blank" rel="noopener noreferrer" className={classes.footerLogoItem} href="https://github.com/FelicityPictures">Github</a>

            <a target="_blank" rel="noopener noreferrer" className={classes.footerLogoItem}href="https://www.linkedin.com/in/felicity-ng">Linkedin</a>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ProjectContainer);