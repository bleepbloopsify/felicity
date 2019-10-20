import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';

const styles = theme => ({
  nav: {
    'width': '100%',
    "max-height": "70px",
    'position': 'fixed',
    'top': '0px',
    'left': '0px',
    'box-sizing': 'border-box',
    'padding': '20px 50px',
    'display': 'flex',
    'flex-direction': 'row',
    'justify-content': 'space-between',
    'align-items': 'center',
    'background-color': '#F5FDFF',
    [theme.breakpoints.down('md')]: {
      "padding": "20px",
    },
  },
  nav__name: {
    'textDecorationLine': 'none',
    'fontSize': '36px',
    'font-family': "'Itim', cursive",
    'color': '#D772AF',
    [theme.breakpoints.down('md')]: {
      "fontSize": "22px",
    },
  },
  nav__rightSide: {
    'display': 'flex',
    'flex-direction': 'row'
  },
  nav__rightSide__a: {
    'text-decoration': 'none',
    'font-family': "'Karla', sans-serif",
    'font-weight': 'bold',
    'font-size': '18px',
    'color': 'black',
    'margin-left': '55px',
    [theme.breakpoints.down('md')]: {
      "fontSize": "12px",
      'margin-left': '30px',
    },
  }
});

class Navbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <nav className={classes.nav}>
        <a className={classes.nav__name} href="/">felicity ng</a>
        <div className={classes.nav__rightSide}>
          <a href="/" className={classes.nav__rightSide__a}>Home</a>
          <a href="/about" className={classes.nav__rightSide__a}>About Me</a>
        </div>
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
