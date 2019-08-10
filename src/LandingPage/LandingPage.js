import React, { Component } from 'react';

import { Section, Sections } from '../Sections';
import { withStyles } from '@material-ui/styles';

import Jumbotron from './Jumbotron';
import Navbar from './Navbar';
import Projects from './Projects';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  jumboContainer: {
  },
  navbarContainer: {
    position: 'fixed',
    top: 0,
    width: '100%',
  },
  footer: {
    height: "10em",
    "background-color": "#F5FDFF",
    "padding-left": "5em",
    "padding-top": "3em",
    "padding-right": "5em",
  },
  footerLogos: {
    "float": "right",
  },
  footerLogoItem: {
    "padding-left": "5em",
  },
});

class LandingPage extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Sections>
        <Section>
          <div className={classes.navbarContainer}>
            <Navbar />
          </div>
          <div className={classes.jumboContainer}>
            <Jumbotron />
          </div>
        </Section>
        <Section>
          <Projects />
        </Section>
        <Section>
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
        </Section>
      </Sections>
    );
  }
}

export default withStyles(styles)(LandingPage);