import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: "flex",
    "flex-direction": "column",
    "padding-top": "2em",
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
          User Interviews + Testing
          </b><br/><br/>
          We reached out to the people who are using CPACS the most and they responding. They were enthusiastic about the redesign and provided userful feedback for our user interviews and user tests. It reaffirmed the notion that a CPACS redesign has been long overdue. Some interviewees even did our jobs for us and went around their office, asking their colleagues if they’ve ever encountered a problem with CPACS that they wish we could address. Furthermore, word spread that we were taking feedback and many more users reached out to us, volunteering themselves as future interviewees. Such a response really pushes us to try even harder to push for the user experience in enterprise systems.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Testing);