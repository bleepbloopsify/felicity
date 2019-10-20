import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  root: {
    width: '100%',
    "min-height": '400px',
    background: '#F5FDFF',
    padding: "80px 0px",
    "box-sizing": "border-box",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
  },
  nameAndAvatar: {
    display: "flex",
    "flex-direction": "row",
    "flex-wrap": "nowrap",
  },
  centerText: {
    'font-family': "'Itim', cursive",
    'font-style': 'normal',
    'font-weight': 'normal',
    'font-size': '72px',
    "color": "#D772AF",
    "margin-top": "11px",
    [theme.breakpoints.down('md')]: {
      "font-size": "40px",
    },
  },
  centerCaption: {
    'font-family': 'Muli',
    'font-style': 'normal',
    'font-size': '18px',
    'color': '#333333',
    [theme.breakpoints.down('md')]: {
      "font-size": "12px",
    },
  },
  avatar: {
    width: "88px",
    height: "91px",
    "margin-left": "10px",
  },
});

class Jumbotron extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>

        <div className={classes.nameAndAvatar}>
          <div className={classes.centerText}>
            felicity ng
          </div>
          <img alt="Felcity's Logo should be here uwu"
               className={classes.avatar}
               src="/felicity_avatar.png" />
        </div>

        <p className={classes.centerCaption}>
          User Experience, User Interface, Graphic Designer
        </p>

      </div>
    );
  }
}

export default withStyles(styles)(Jumbotron);
