import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: "100%",
    display: "flex",
    "flex-direction": "column",
  },
  table: {
    display: "flex",
    "flex-direction": "row",
    "justify-content": "space-between",
    "padding-bottom": "2em",
  },
  tableItem: {
    display: "flex",
    "flex-direction": "column",
  },
  fancyBubble: {
    "padding": "1em 2em 1em 2em",
    "border-radius": "4px",
    "min-width": "5em",
    "text-align": "center",
    "margin-bottom": "0.5em",
  },

});

class Overview extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.table}>
          <div className={classes.tableItem}>
            <Typography>
              <b>
                Client
              </b>
            </Typography>
            <center>
              <Typography variant="body1">
                NYU IT OTSS
              </Typography>
            </center>
          </div>
          <div className={classes.tableItem}>
            <Typography>
              <b>
                Role
              </b>
            </Typography>
            <center>
              <Typography variant="body1">
                Creative Director
              </Typography>
            </center>
          </div>
          <div className={classes.tableItem}>
            <Typography>
              <b>
                Duration
              </b>
            </Typography>
            <center>
              <Typography variant="body1">
                June 2018 - Present
              </Typography>
            </center>
          </div>
        </div>
        <div>
          <center>
            <Typography variant="body1">
              Scribble is a day of design forums and a design-a-thon hosted by NYU IT OTSS that aims to expose young minds to the world of technology, espcially product design.
            </Typography>
          </center>
        </div>

        <div className={classes.table} style={{ paddingTop: "2em" }}>
          <div className={classes.tableItem}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#FFD5D5" }}>
              Creative Brief
            </div>
          </div>
          <div className={classes.tableItem}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#FEEBD1" }}>
              Research
            </div>
          </div>
          <div className={classes.tableItem}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#FFFCBA" }}>
              Design
            </div>
          </div>
          <div className={classes.tableItem}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#CAF7F8" }}>
              Present
            </div>
          </div>
          <div className={classes.tableItem}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#C9EEFE" }}>
              Revise
            </div>
          </div>
          <div className={classes.tableItem}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#FAD9FF" }}>
              Deliver
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Overview);