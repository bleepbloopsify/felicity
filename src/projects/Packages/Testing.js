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
          We scheduled meetings throughout the design phase with the mailroom
          employees and stakeholders to ensure the product met their needs.
          </b>
          <br/>
          We met with the mailroom employees and their supervisors regularly to
          ensure our product met their needs and didn’t bring up any concerns
          with their supervisors. We took notes as they commented on the
          prototypes and with each meeting, we incorporated their feedback into
          our designs.
          <br/>
          <br/>

          <b>
          We showed our more developed product to the residents to gather
          feedback on how we can seamlessly incorporate the new system into
          their daily lives.
          </b>
          <br/>
          The new system will be a direct line of contact between the mailrooms
          and the residents. We needed to find out what kind of notifications we
          should send out, whether they be push notifications, texting, emails,
          etc. In addition, we wanted to ensure the residents would be
          comfortable with this, as some people might find notifications a
          nuisance. We presented our designs and ideas at a resident meeting and
          gathered feedback.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Testing);
