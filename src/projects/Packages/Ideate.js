import { Typography, withStyles } from '@material-ui/core';
import React, { Component } from 'react';

const styles = theme => ({
  root: {
    display: "flex",
    "flex-direction": "column",
    "padding-top": "2em",
  },
});

class Ideate extends Component {
  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="subtitle1" gutterBottom>
          Ideate
        </Typography>
        <Typography gutterBottom>
          <b>
            Design Principles
          </b><br /><br />
          - <b>Intuitive:</b> The users are older, meaning they might not be familiar with technology. By making the system easy to pick up, it will increase their satisfaction<br /><br />
          - <b>Simple:</b> The system is meant to do its job quickly and effectively. Keep the system simple to avoid any unnecessary clutter<br /><br />
          - <b>Forgiving:</b> Mistakes are prone to happen, especially with the system being so heavily reliant on human input<br /><br />
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Ideate);