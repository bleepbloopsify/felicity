import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Navbar from './Navbar';
import Projects from './Projects';
import Footer from '../footer';



const styles = theme => ({
  jumboContainer: {
  },
  navbarContainer: {
    position: 'fixed',
    top: 0,
    width: '100%',
  },
});

class LandingPage extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div>
        <header>
          <Navbar />
        </header>
        <Jumbotron />
        <Projects />

        <Footer />

      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
