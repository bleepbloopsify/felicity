import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';

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
          With the increase in e-commerce, manual information entry gets tedious
          and is more prone to errors.
          </b>
          <br/>
          As more people choose to do their shopping online, the number of
          packages that go through the mailrooms will only increase. The task of
          recording tracking numbers and the times they arrived into a binder
          and then doing it again for a package slip can get tedious. Human
          error is bound to happen and the chances for mistakes can only
          increase as time goes by.
          <br/>
          <br/>

          <b>
          Using paper slips to notify residents to pick up packages is slow and
          outdated.
          </b>
          <br/>
          Unlike notifications and information on the digital systems, paper
          slips cannot effectively communicate real time information. A resident
          would have to go to their mailboxes before they know that their
          packages have arrived. In addition, packages can only be picked up if
          they have the paper slip, meaning it is necessary for residents to
          take the extra step of going to their mailboxes before they can pick
          up their packages. Asking so much from residents makes it so that
          picking up packages is an errand, one that has to be planned out, and
          this results in procrastination.
          <br/>
          <br/>

          <b>
          It is hard to retrieve information from a handful of thick binders.
          </b>
          The binders of package records are kept on a shelf, in case someone
          ever needs to look back on them. Manually scanning through tables upon
          tables of numbers and letters does not sound like a fun job. In the
          digital age, such a task is made easy with a search function. But you
          can’t do that with paper. A lot can be learned from the data in the
          binders but since they are not appropriately compiled or organized, it
          sits unused on a shelf.
        </Typography>
        <div className={classes.grid}>
          <img src="/Packages/process_before.jpg"
                alt="packages process before"
                className={classes.grid__span6}/>
        </div>

      </div>
    );
  }
}

export default withStyles(styles)(Analyze);
