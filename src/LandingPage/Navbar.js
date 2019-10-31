import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    // 'background-color': '#F5FDFF',
    "background-image": "linear-gradient(#F5FDFF, rgba(255,255,255,0))",
    [theme.breakpoints.down('md')]: {
      "padding": "20px",
    },
  },
  nav__name: {
    'textDecorationLine': 'none',
    'fontSize': '36px',
    'font-family': "'Itim', cursive",
    'color': '#D772AF',
    "background-color": "rgba(245, 253, 255, 0.5)",
    "border-radius": "100px",
    "padding": "5px 15px",
    [theme.breakpoints.down('md')]: {
      "fontSize": "22px",
    },
  },
  nav__rightSide: {
    'display': 'flex',
    'flex-direction': 'row'
  },
  nav__rightSide__a: {
    "position": "relative",
    'text-decoration': 'none',
    'font-family': "'Karla', sans-serif",
    'font-weight': 'bold',
    'font-size': '18px',
    'color': 'black',
    'margin-left': '55px',
    "background-color": "rgba(245, 253, 255, 0.5)",
    "border-radius": "100px",
    "padding": "5px 10px",
    [theme.breakpoints.down('md')]: {
      "fontSize": "12px",
      'margin-left': '30px',
    },
    "&:after": {
      "content": "''",
      "position": "absolute",
      "width": "0; height: 2px",
      "display": "block",
      "margin-top": "2px",
      "right": "0",
      "background": "#333",
      "transition": "width .15s ease",
      "-webkit-transition": "width .2s ease",
    },
    "&:hover:after": {
      "width": "100%",
      "left": "0",
      "background-color": "#333",
    },
  }
});

class Navbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <nav className={classes.nav}>
        <Link className={classes.nav__name} to="/">felicity ng</Link>
        <div className={classes.nav__rightSide}>
          <Link to="/"className={classes.nav__rightSide__a}>home</Link>
          <Link to="/about"className={classes.nav__rightSide__a}>about me</Link>
        </div>
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
