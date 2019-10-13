import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

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
  },
  grid__span6: {
    width: "100%",
    height: "auto",
    "margin": "0px",
    "grid-column": "4 / span 6",
    "grid-row": "span 1",
  },
  grid__span6__image:{
    width: "100%",
  },
  grid__span6__caption:{
    "text-align": "center",
    "font-size": "12px",
  }
});

class Analyze extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="subtitle1" gutterBottom>
          Analyze
        </Typography>

        <Typography gutterBottom style={{ marginBottom: "0px" }}>
          <b>
          The form requires prior knowledge from the users.
          </b>
          <br/>
          A budget form will have numbers and numbers mean math. CPACS comes with a user manual that teaches users the calculations that need to take place for each number they enter. However, why should everyone have to read a thick book to understand the basics of finances?
          <br/>
          <br/>

          <b>
            The form asks unnecessary questions.
          </b>
          <br/>
          Before the user even begins to fill out any form, they have to answer questions that will determine which form they will be filling out. However, if we just waited to see what a user fills out on their form, we’ll be able to tell what kind of form they want to submit.
          <br/>
          <br/>

          <b>
          The form is not consistent with business standards.
          </b>
          <br/>
          Users are required to select a costcenter as part of the process of starting a funding request, supplemental budget, and budget modification. Projects only have one costcenter.
        </Typography>

        <div className={classes.grid}>
          <figure className={classes.grid__span6}>
            <img src="/CPACSweb/Budget_process_before.jpg"
                  alt="budget process before"
                  className={classes.grid__span6__image}/>
            <figcaption className={classes.grid__span6__caption}>
              Current process of filling out forms in the budget module
            </figcaption>
          </figure>
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(Analyze);
