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
                Lead UX/UI Developer
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
                October 2017 - Present
              </Typography>
            </center>
          </div>
        </div>
        <div>
          <center>
            <Typography variant="body1">
              Interfacing with many other university systems, CPACS provides a centralized place where users can easily find and manage all the information they need for a project.
            </Typography>
          </center>
        </div>

        <div className={classes.table} style={{ paddingTop: "2em" }}>
          <div className={classes.tableItem}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#D8F6C6" }}>
              Understand
            </div>
            <center>
              <Typography variant="body2">
                Study Context<br />Interviews
              </Typography>
            </center>
          </div>
          <div className={classes.tableItem}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#FFECD6" }}>
              Analyze
            </div>
            <center>
              <Typography variant="body2">
                Scenarios<br />Use cases
              </Typography>
            </center>
          </div>
          <div className={classes.tableItem}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#FEFFD6" }}>
              Ideate
            </div>
            <center>
              <Typography variant="body2">
                Design Principles<br />Information Architecture
              </Typography>
            </center>
          </div>
          <div className={classes.tableItem}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#E3FFD6" }}>
              Design
            </div>
            <center>
              <Typography variant="body2">
                Wireframes + Mockups<br />Prototypes
              </Typography>
            </center>
          </div>
          <div className={classes.tableItem}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#C9F4FE" }}>
              Test
            </div>
            <center>
              <Typography variant="body2">
                User Testing<br />Interviews
              </Typography>
            </center>
          </div>
          <div className={classes.tableItem}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#B9C4ED" }}>
              Learn
            </div>
            <center>
              <Typography variant="body2">
                Assess Feedback<br />Fix Details
              </Typography>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Overview);