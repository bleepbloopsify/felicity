import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
  footer: {
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

        <div className={classes.footer}>
          <Typography variant="h1" color="primary">
            felicity.ng@nyu.edu
          </Typography>

          {/* Put logos here */}
          <div>
            <Link to="https://github.com/felicitypictures">
              <img alt="github icon" src="/github_icon.png" className={classes.footer__icon}></img>
            </Link>

            <Link to="https://www.linkedin.com/in/felicity-ng/">
              <img alt="linkedin icon" src="/linkedin_icon.png" className={classes.footer__icon}></img>
            </Link>
          </div>
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
