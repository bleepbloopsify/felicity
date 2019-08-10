import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';

const styles = theme => ({
  root: {
    display: "flex",
    "flex-direction": "column",
    "margin-top": "2em",
  },
  img: {
    "max-width": "100%",
  },
  listStyle: {
    'list-style-type': "none",
    'padding-left': 0,
  },
});

class Analyze extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="subtitle1" gutterBottom>
          Analyze
        </Typography>

        <Typography gutterBottom>
          <b>
            Defining the problem
          </b>
        </Typography>

        <ul className={classes.listStyle}>
          <li>
            <Typography>
              - Inefficient
            </Typography>
          </li>
          <li>
            <Typography>
              - Not environmentally friendly
            </Typography>
          </li>
          <li>
            <Typography>
              - Not enough human resources to
              handle the increase in package volume
            </Typography>
          </li>
          <li>
            <Typography>
              - Lacks scalability
            </Typography>
          </li>
          <li>
            <Typography>
              - Difficulty in tracking packages
              using paper records
            </Typography>
          </li>
        </ul>


        <Typography gutterBottom>
          <b>
            The Challenge
          </b>
        </Typography>

        <Typography variant="body1" style={{ paddingBottom: "2em" }}>
          The current way of bookkeeping in the package rooms of NYU faculty housing is inefficient. Writing all the information related to a package onto paper is slow. If there were a large delivery of packages for the building, the one employee for each package room is overwhelmed by the simple task of putting information into the binder. With paper based information logging, finding past information is difficult or even impossible if the paper containing the information is discarded, defeating a big reason for bookkeeping.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Analyze);