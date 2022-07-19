import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  root: {
    width: '100%',
    "min-height": '400px',
    // background: '#F5FDFF',
    padding: "24px 0px",
    "box-sizing": "border-box",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
  },
  container: {
    width: "100%",
    "max-width": "640px",
    display: "flex",
    "flex-direction": "row",
    "justify-content": "space-between",
    "align-items": "center",
  },
  left: {
    display: "flex",
    "flex-direction": "column",
    "flex-wrap": "nowrap",
  },
  centerText: {
    'font-family': "'Itim', cursive",
    'font-style': 'normal',
    'font-weight': 'normal',
    'font-size': '72px',
    "color": "#D772AF",
    "margin": "0px 0px 8px 0px",
    [theme.breakpoints.down('md')]: {
      "font-size": "40px",
    },
  },
  centerCaption: {
    'font-family': 'Muli',
    'font-style': 'normal',
    'font-size': '18px',
    'font-weight': "bold",
    'color': '#333333',
    "margin": "8px 0px 0px 0px",
    [theme.breakpoints.down('md')]: {
      "font-size": "12px",
    },
  },
  avatar: {
    width: "240",
    height: "auto",
    // "margin-left": "10px",
  },
});

class Jumbotron extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.left}>
            <h1 className={classes.centerText}>
              felicity ng
            </h1>
            <p className={classes.centerCaption}>
              Product Designer
            </p>
          </div>

          <img alt="Felcity's Logo should be here uwu"
               className={classes.avatar}
               src="/felicity_avatar.png" />

       </div>
      </div>
    );
  }
}

export default withStyles(styles)(Jumbotron);
