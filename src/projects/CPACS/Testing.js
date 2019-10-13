import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: "flex",
    "flex-direction": "column",
    "margin-bottom": "100px"
  }
});

class Testing extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="subtitle1" gutterBottom>
          Testing
        </Typography>
        <Typography gutterBottom>
          <b>
          While the design team wasn’t allowed to do user research until midway through the redesign of the budget module, we made the best of it when we were finally given the permission.
          </b>
          <br/>
          Due to the delay in user research, we had to backtrack through the other modules that we already “finished” redesigning to ensure our prototypes were actually improvements to the current system. There were still delays and obstacles to get ahold of the users but we were able to get a hold of four CPACS users to interview.
          <br/>
          <br/>

          <b>
          During the user interviews, we asked the users about their overall experience with CPACS and then tested our new designs on them, showing them only the modules they are familiar with.
          </b>
          <br/>
          Users in CPACS don’t all use the same modules, so we had to be flexible during our user interviews and only ask them about the modules that they know about. The project manager had scheduled the module redesigns nicely so that the team already had prototypes to show for all the different modules the interviewees work with on a daily basis.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Testing);
