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
          User interviews revealed to us that we should have a partial save for forms.
          </b>
          <br/>
          During our user interviews, we were informed that occasionally, when
          users are filling out forms, they might need to stop because they
          don’t have all the information. However, the system does not allow
          partial saves, as all essential parts of the form need to be filled
          out before it can be saved. We pushed to add an autosave function to
          the system to alleviate this frustration.
          <br/>
          <br/>

          <b>
          If a user makes a mistake and only realizes after they have submitted,
          they should be able to recall the document.
          </b>
          <br/>
          Many documents in CPACS have to go through a chain of approval. This
          can be a slow process. If the submitter catches a mistake, it can be
          slow and frustrating to track down the person the document is waiting
          on and inform them of the mistake so that the approver can return the
          document back to the submitter to fix. Instead, a recall button can
          speed this process up.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Testing);
