import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from '../footer';

const styles = theme => ({
  root: {
    display: "flex",
    "flex-direction": 'column',
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
        <header>
          <Navbar />
        </header>

        {children}

        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(ProjectContainer);
