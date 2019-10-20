import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    "margin-bottom": "100px"
  },
  table: {
    display: "grid",
    "grid-template-columns": "repeat(12, 1fr)",
    "grid-template-rows": "auto",
    "grid-column-gap": "20px",
    "grid-row-gap": "10px",
    "padding-bottom": "40px",
    [theme.breakpoints.down('md')]: {
      "grid-template-columns": "repeat(4, 1fr)",
    },
  },
  tableItemSpan4: {
    "grid-column": "span 4",
    "margin": "5px 0px",
    "font-size": "16px"
  },
  tableItemSpan12: {
    "grid-column": "span 12",
    "margin": "5px 0px",
    "font-size": "16px"
  },
  tableItemSpan2: {
    "grid-column": "span 2",
    "margin": "5px 0px",
    "font-size": "16px"
  },
  fancyBubble: {
    "padding": "15px 10px",
    "border-radius": "4px",
    "text-align": "center",
    "font-family": "'Karla', sans-serif",
    "font-size": "18px",
    "font-weight": "bold"
  },
  processDetails: {
    "padding-top": "10px"
  }

});

class Overview extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.table}>
          <div className={classes.tableItemSpan4}>
            <Typography>
              <b>
                Client
              </b>
            </Typography>
            <Typography variant="body1">
              NYU IT OTSS
            </Typography>
          </div>
          <div className={classes.tableItemSpan4}>
            <Typography>
              <b>
                Role
              </b>
            </Typography>
            <Typography variant="body1">
              Product Designer
            </Typography>
          </div>
          <div className={classes.tableItemSpan4}>
            <Typography>
              <b>
                Duration
              </b>
            </Typography>
            <Typography variant="body1">
              October 2017 - Present
            </Typography>
          </div>
        </div>
        <div className={classes.tableItemSpan12}>
          <center>
            <Typography variant="body1">
              CPACS stands for Capital Projects Administration and Control
              System. Interfacing with many other university systems, it
              provides a centralized place for users to find and manage the
              information and documents necessary for a capital project.
            </Typography>
          </center>
        </div>

        <div className={classes.table} style={{ paddingTop: "20px" }}>
          <div className={classes.tableItemSpan2}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#BFD6ED" }}>
              Understand
            </div>
            <center>
              <Typography variant="body2" className={classes.processDetails}>
                Context study<br/>Self testing
              </Typography>
            </center>
          </div>
          <div className={classes.tableItemSpan2}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#9ECFFF" }}>
              Analyze
            </div>
            <center>
              <Typography variant="body2" className={classes.processDetails}>
                Problem Statement
              </Typography>
            </center>
          </div>
          <div className={classes.tableItemSpan2}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#DDDAFD" }}>
              Ideate
            </div>
            <center>
              <Typography variant="body2" className={classes.processDetails}>
                Design Principles<br/>Workflow Diagrams
              </Typography>
            </center>
          </div>
          <div className={classes.tableItemSpan2}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#D3E9FF" }}>
              Design
            </div>
            <center>
              <Typography variant="body2" className={classes.processDetails}>
                Wireframes<br/>Mockups<br />Prototypes
              </Typography>
            </center>
          </div>
          <div className={classes.tableItemSpan2}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#D9F3FF" }}>
              Test
            </div>
            <center>
              <Typography variant="body2" className={classes.processDetails}>
                User Testing<br />Interviews
              </Typography>
            </center>
          </div>
          <div className={classes.tableItemSpan2}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#CCFAE1" }}>
              Learn
            </div>
            <center>
              <Typography variant="body2" className={classes.processDetails}>
                Assess Feedback<br />Looking towards the future
              </Typography>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Overview);
