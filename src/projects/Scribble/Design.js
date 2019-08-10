import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';

const styles = theme => ({
  root: {
    display: "flex",
    "flex-direction": "column",
    "margin-top": "2em",
  },
  img: {
    "max-width": "100%",
  }
});

class Design extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="subtitle1" gutterBottom>
          Design
        </Typography>

        <Typography gutterBottom>
          <b>
            Design Principles
          </b>
        </Typography>

        <Typography variant="body1" style={{ paddingBottom: "2em" }}>
          -&nbsp;&nbsp;&nbsp;<b>Intuitive:</b> The users are older, meaning they might not be familiar with technology. By making the system easy to pick up, it will increase their satisfaction<br /><br />
          -&nbsp;&nbsp;&nbsp;<b>Simple:</b> The system is meant to do its job quickly and effectively. Keep the system simple to avoid any unnecessary clutter <br /><br />
          -&nbsp;&nbsp;&nbsp;<b>Forgiving:</b> Mistakes are prone to happen, especially with the system being so heavily reliant on human input<br /><br />
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Design);