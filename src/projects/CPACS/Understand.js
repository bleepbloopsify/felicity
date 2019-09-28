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
  },
  grid__span6: {
    width: "100%",
    height: "auto",
    "grid-column": "span 6",
    "grid-row": "span 1",
  }
});

class Understand extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="subtitle1" gutterBottom>
          Understand
        </Typography>

        <Typography gutterBottom>
          <b>CPACS houses the university’s capital projects. Each project consists
          of multiple modules. I redesigned the budget module.</b>
          <br/>
          The product owner needed to give the budget module a facelift as well
          as smooth out the process of filling out the forms in the budget modules.
          <br/>
          <br/>
          <b>The budget module consists of three types of documents.</b>
          <br/>
          Funding forms are filled out at the beginning of a project,
          supplemental budgets and budget modifications throughout the lifetime
          of a project. Supplemental budgets are submitted when the overall
          amount that is being used on a project changes while budget
          modifications are submitted when money is simply being moved from one
          account to another.
          <br/>
          <br/>
          <b>The way things are now:</b>
        </Typography>
        <div className={classes.grid}>
          <img src="/CPACSweb/Budget_process_before.jpg"
                alt="budget process before"
                className={classes.grid__span6}/>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Understand);
