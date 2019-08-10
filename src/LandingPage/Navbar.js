import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    height: "5em",
    width: "100%",
    display: 'flex',
    'flex-direction': 'row',
    "align-items": "center",
    "justify-content": "space-between",
    "background-color": "#F5FDFF",
  },
  home: {
    "padding-left": "2em",
  },
  items: {
    display: "flex",
    "flex-direction": "row",
    "padding-right": "2em",
  },
  item: {
    padding: '32px',
  }
});

class Navbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div id="#top" style={{ display: "none" }} />
        <Typography variant="h1" color="primary">
          <Link className={classes.home} to="/">
            felicity
          </Link>
        </Typography>
        {/* <div className={classes.items}>
          <div className={classes.item}>
            <Typography variant="h2" color="secondary">
              <Link to="/work">Work</Link>
            </Typography>
          </div>
          <div className={classes.item}>
            <Typography variant="h2" color="secondary">
              <Link to="/aboutme">
                About Me
              </Link>
            </Typography>
          </div>
        </div> */}
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);