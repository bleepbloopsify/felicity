import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import Footer from '../footer';
import Jumbotron from './Jumbotron';
import Navbar from './Navbar';
import Projects from './Projects';



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
    return (
      <div>
        <Projects />

        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
