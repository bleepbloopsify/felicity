import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Navbar from './LandingPage/Navbar';


const styles = theme => ({
  root: {

  },
});


class AboutMe extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <header>
          <Navbar />
        </header>
        <h1>About me!</h1>
      </div>
    );
  }
}


export default withStyles(styles)(AboutMe);