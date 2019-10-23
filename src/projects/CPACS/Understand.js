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
    "margin-top": "20px",
    display: "grid",
    "grid-template-columns": "repeat(12, 1fr)",
    "grid-template-rows": "auto",
    "grid-column-gap": "20px",
    "grid-row-gap": "40px",
    [theme.breakpoints.down('md')]: {
      "grid-template-columns": "repeat(6, 1fr)",
    },
  },
  grid__span6: {
    width: "100%",
    height: "auto",
    "margin": "0px",
    "grid-column": "4 / span 6",
    "grid-row": "span 1",
    [theme.breakpoints.down('md')]: {
      "grid-column": "1 / span 6",
    },
  },
  grid__span6__image:{
    width: "100%",
    "border": "1px solid #ccc",
  },
  grid__span6__caption:{
    "text-align": "center",
    "font-size": "12px",
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
          <b>CPACS houses the university’s capital projects. Each project consists of multiple modules. One of the many modules I redesigned was the budget module.
          </b>
          <br/>
          As with many of the other modules in CPACS, the design team was instructed to give the budget module a facelift as well as smooth out the process of filling out the forms. Now to break the fourth wall, I will present a pared down version of my work on the budget module that focuses primarily on the user experience of filling out the budget module forms to avoid explaining too much of the nitty gritty details of the complex inner workings of the system. (Enterprise systems, amirite?)
          <br/>
          <br/>
          <b>To understand the business needs of the budget module, we had to read the CPACS user manual and tried filling out the forms ourselves.
          </b>
          <br/>
          When I started, the CPACS project was not allowed to conduct user testing or user interviews due to disagreements between the stakeholders and the management for our project. Halfway through the module redesign, we were finally given permission to conduct user research. Before that, we tried filling out the forms ourselves, simulating the experience of a new user as people who have never used the system before, and relied on our own opinions to guide us through the redesign.
          <br/>
          <br/>
          <b>
          The budget module consists of three types of documents. Depending on the document, there is a different approval process it has to go through. In addition, there are different kinds of users for the budget module, each with a different view of the system.
          </b>
          <br/>
          Funding forms are filled out at the beginning of a project, supplemental budgets and budget modifications throughout the lifetime of a project. Supplemental budgets are submitted when the overall amount that is being used on a project changes while budget modifications are submitted when money is simply being moved from one account to another. Typically, funding requests and supplemental budgets require more approvals higher up the chain than budget modifications.
        </Typography>

        <div className={classes.grid}>
          <figure className={classes.grid__span6}>
            <img src="/CPACSweb/User_Hierarchy.png"
                  alt="CPACS's user hierarchy"
                  className={classes.grid__span6__image}/>
            <figcaption className={classes.grid__span6__caption}>
              The level of permissions and kinds of users in CPACS
            </figcaption>
          </figure>

          <figure className={classes.grid__span6}>
            <img src="/CPACSweb/Approval_process.png"
                  alt="CPACS's approval process for budget module"
                  className={classes.grid__span6__image}/>
            <figcaption className={classes.grid__span6__caption}>
              The approval process for the forms in the budget module
            </figcaption>
          </figure>
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(Understand);
