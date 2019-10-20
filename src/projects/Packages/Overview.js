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
              March 2019 - Present
            </Typography>
          </div>
        </div>
        <div className={classes.tableItemSpan12}>
          <center>
            <Typography variant="body1">
              Packages will be a bookkeeping and notification system used by
              mailroom employees in NYU faculty housing.
            </Typography>
          </center>
        </div>

        <div className={classes.table} style={{ paddingTop: "20px" }}>
          <div className={classes.tableItemSpan2}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#D8F6C6" }}>
              Understand
            </div>
            <center>
              <Typography variant="body2" className={classes.processDetails}>
                Observe users
                <br/>
                Identify pain points
              </Typography>
            </center>
          </div>
          <div className={classes.tableItemSpan2}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#FFECD6" }}>
              Analyze
            </div>
            <center>
              <Typography variant="body2" className={classes.processDetails}>
                Scenarios
                <br/>
                Use Cases
              </Typography>
            </center>
          </div>
          <div className={classes.tableItemSpan2}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#FEFFD6" }}>
              Ideate
            </div>
            <center>
              <Typography variant="body2" className={classes.processDetails}>
                Design principles
                <br/>
                Information architecture
              </Typography>
            </center>
          </div>
          <div className={classes.tableItemSpan2}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#E3FFD6" }}>
              Design
            </div>
            <center>
              <Typography variant="body2" className={classes.processDetails}>
                Wireframes
                <br/>
                Prototypes
              </Typography>
            </center>
          </div>
          <div className={classes.tableItemSpan2}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#D9F3FF" }}>
              Testing
            </div>
            <center>
              <Typography variant="body2" className={classes.processDetails}>
                User Testing
                <br/>
                Stakeholder reviews
              </Typography>
            </center>
          </div>
          <div className={classes.tableItemSpan2}>
            <div className={classes.fancyBubble} style={{ backgroundColor: "#CCFAE1" }}>
              Learn
            </div>
            <center>
              <Typography variant="body2" className={classes.processDetails}>
                Next steps
              </Typography>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Overview);
