import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  root: {
    "width": '100%',
    "min-height": '400px',
    "padding": "24px 0px",
    "box-sizing": "border-box",
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
  },
  container: {
    "width": '640px',
    "padding": "64px",
    "box-sizing": "border-box",
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "start",
  },
  nameText: {
    'font-family': "'Itim', cursive",
    'font-style': 'normal',
    'font-weight': 'normal',
    'font-size': '1.5em',
    "color": "#D772AF",
    "margin": "0px 0px 0px 0px",
    [theme.breakpoints.down('md')]: {
      "font-size": "40px",
    },
  },
  centerText: {
    'font-family': 'Muli',
    'font-style': 'normal',
    'font-size': '1em',
    'font-weight': "bold",
    'color': '#333333',
    "margin": "0px 0px 0px 0px",
    [theme.breakpoints.down('md')]: {
      "font-size": "12px",
    },
  },
  bottomAlignText: {
    "display": "flex",
    "flex-direction": "row",
    "justify-content": "center",
    "align-items": "flex-end",
  },
});

class Jumbotron extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <span className={classes.bottomAlignText}>
            <p className={classes.centerText}>Hi! I'm
            <b className={classes.nameText}> felicity ng</b>,
            </p>
          </span>
          <p className={classes.centerText}>a product designer currently working at Publicis Sapient.</p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Jumbotron);
