import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: "flex",
    "flex-direction": "column",
    "margin-bottom": "100px"
  }
});

class Learn extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="subtitle1" gutterBottom>
          Learn
        </Typography>
        <Typography gutterBottom>
          <b>
          From the user research that we conducted, we came to the conclusion that the users don’t necessarily have a lot of frustrations with the design of the current system in terms of processes, per say, but more with the reliability of the system.
          </b>
          <br/>
          Of the users that we interviewed, 100% of them informed us that their main frustration with CPACS is its unreliability. For example, the system would go down at times when they needed to get their work done or the user cannot search for anything with less than four letters. We relayed their frustrations to the project owner and together, the project team decided to refocus its energies on improving the current system, as opposed to creating a new one.
          <br/>
          <br/>
          <b>
          Next steps
          </b>
          <br/>
          While the redesign part of the project may be put on hold, it allows the design team to explore other parts of a user's experience that doesn’t just involve buttons and form input placement. We will conduct more research on the reliability of the system and take an indepth look at each module so that when it comes time for an actual redesign, the is less hesitation pertaining to understanding such a complex system.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Learn);
