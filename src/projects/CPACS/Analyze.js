import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: "flex",
    "flex-direction": "column",
    "margin-bottom": "100px"
  },
  img: {
    "max-width": "100%",
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
          A budget form will have numbers and numbers mean math. CPACS comes with
          a user manual that teaches users the calculations that need to take
          place for each number they enter. However, why should everyone have to
          read a thick book to understand the basics of finances?
          <br/>
          <br/>

          <b>
            The form asks unnecessary questions.
          </b>
          <br/>
          Before the user even begins to fill out any form, they have to answer
          questions that will determine which form they will be filling out.
          However, if we just waited to see what a user fills out on their form,
          we’ll be able to tell what kind of form they want to submit.
          <br/>
          <br/>

          <b>
          The form is not consistent with business standards.
          </b>
          Users are required to select a costcenter as part of the process of
          starting a funding request, supplemental budget, and budget
          modification. Projects only have one costcenter.
        </Typography>


      </div>
    );
  }
}

export default withStyles(styles)(Analyze);
