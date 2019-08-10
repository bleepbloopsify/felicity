import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  root: {
    width: '100%',
    height: '424px',
    background: '#F5FDFF',
  },
  centerText: {
    'position': 'absolute',
    'top': '3em',

    'left': '50%',
    'margin-right': '-50%',
    'transform': 'translate(-50%, -50%)',

    'font-family': 'Itim',
    'font-style': 'normal',
    'font-weight': 'normal',
    'font-size': '72px',
    'line-height': '86px',
    /* identical to box height */

    'text-align': 'center',

    'color': '#D772AF',
  },
  centerCaption: {
    'position': 'absolute',
    'top': '15em',

    'left': '50%',
    'margin-right': '-50%',
    'transform': 'translate(-50%, -50%)',

    'font-family': 'Muli',
    'font-style': 'normal',
    'font-weight': 'bold',
    'font-size': '18px',
    'line-height': '23px',
    /* identical to box height */

    'color': '#333333',
  },
  centerLogo: {
    'position': 'absolute',
    'width': '99px',
    'height': '99px',
    'top': '7em',

    'left': '50%',
    'margin-right': '-50%',
    'transform': 'translate(-50%, -50%)',
  },
});

class Jumbotron extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {/* Navbar goes here */}
        <div className={classes.navbar}>
          {/* We have a link to the homepage here.
            Should probably move this bar to a separate reusable component
           */}

          <div className={classes.centerText}>
            felicity ng
          </div>

          <div className={classes.centerCaption}>
            UX/UI designer @ NYU IT
          </div>

          <img alt="Felcity's Logo should be here uwu" className={classes.centerLogo} src="/felicity_avatar.png" />
        </div>

        {/* Have an absolute styled central link here */}
      </div>
    );
  }
}

export default withStyles(styles)(Jumbotron);