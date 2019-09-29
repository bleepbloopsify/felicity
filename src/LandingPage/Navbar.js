import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';

const styles = theme => ({
  nav: {
    'width': '100%',
    'position': 'fixed',
    'top': '0px',
    'left': '0px',
    'box-sizing': 'border-box',
    'padding': '20px 50px',
    'display': 'flex',
    'flex-direction': 'row',
    'justify-content': 'space-between',
    'align-content': 'center',
    'background-color': '#F5FDFF'
  },
  nav__name: {
    'textDecorationLine': 'none',
    'fontSize': '36px',
    'font-family': "'Itim', cursive",
    'color': '#D772AF'
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
    'align-self': 'center'
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
