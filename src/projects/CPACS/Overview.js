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
                December 2018 - Present
              </Typography>
            </center>
          </div>
        </div>
        <div>
          <center>
            <Typography variant="body1">
              Packages is a bookkeeping system used by package room employees in NYU faculty housing.
            </Typography>
          </center>
        </div>

        <div className={classes.table} style={{ paddingTop: "2em" }}>
          <div className={classes.tableItem}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#BFD6ED" }}>
              Understand
            </div>
            <center>
              <Typography variant="body2">
                Study Context<br />Interviews
              </Typography>
            </center>
          </div>
          <div className={classes.tableItem}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#9ECFFF" }}>
              Analyze
            </div>
            <center>
              <Typography variant="body2">
                Problem Statement
              </Typography>
            </center>
          </div>
          <div className={classes.tableItem}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#DDDAFD" }}>
              Ideate
            </div>
            <center>
              <Typography variant="body2">
                Design Principles<br />Workflow Diagrams
              </Typography>
            </center>
          </div>
          <div className={classes.tableItem}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#D3E9FF" }}>
              Design
            </div>
            <center>
              <Typography variant="body2">
                Wireframes<br />Mockups<br />Prototypes
              </Typography>
            </center>
          </div>
          <div className={classes.tableItem}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#D9F3FF" }}>
              Test
            </div>
            <center>
              <Typography variant="body2">
                User Testing<br />Interviews
              </Typography>
            </center>
          </div>
          <div className={classes.tableItem}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#CCFAE1" }}>
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