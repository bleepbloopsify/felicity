import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: "flex",
    "flex-direction": "column",
    "margin-bottom": "100px"
  },
  grid: {
    width: "100%",
    display: "grid",
    "grid-template-columns": "repeat(12, 1fr)",
    "grid-template-rows": "auto",
    "grid-column-gap": "20px",
    "grid-row-gap": "20px",
    [theme.breakpoints.down('md')]: {
      "grid-template-columns": "repeat(4, 1fr)",
    },
  },
  grid__span4: {
    width: "100%",
    height: "auto",
    "grid-column": "span 4",
    "grid-row": "span 1",
    "border": "1px solid #ccc"
  },
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
          Adding a new package to the system.
          </b>
        </Typography>
        <div className={classes.grid}>
          <img src="/Packages/add_package_1.png"
                alt="overview of apartment"
                className={classes.grid__span4}/>
          <img src="/Packages/add_package_2.png"
                alt="entering new package information"
                className={classes.grid__span4}/>
          <img src="/Packages/add_package_3.png"
                alt="package added confirmation"
                className={classes.grid__span4}/>
        </div>

        <Typography gutterBottom style={{paddingTop: "20px"}}>
          <b>
          Package details and analytics.
          </b>
        </Typography>
        <div className={classes.grid}>
          <img src="/Packages/bookkeeping.png"
                alt="packages details"
                className={classes.grid__span4}/>
          <img src="/Packages/analytics.png"
                alt="analytical graphs of package data"
                className={classes.grid__span4}/>
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(Design);
