import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: "100%",
    height: "516px",
    background: "#FFFFFF",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
  },
  grid: {
    width: "940px",
    display: "grid",
    "grid-template-columns": "repeat(12, 1fr)",
    "grid-template-rows": "50% 25% 25%",
    "grid-column-gap": "20px",
    "align-items": "center",
  },
  grid__span6__image: {
    "padding": "20px",
    "box-sizing": "border-box",
    "grid-column": "span 6",
    "grid-row": "span 3",
    width: "100%",
    height: "auto"
},
  grid__span6__text__top: {
    "grid-column": "span 6",
    "grid-row": "span 1",
    "align-self": "end",
  },
  grid__span6__text__roles: {
    "grid-column": "span 3",
    "grid-row": "span 1",
  },
  grid__span6__text__roles__bottom: {
    "grid-column": "span 3",
    "grid-row": "span 1",
    "align-self": "start",
  },
});

class Jumbotron extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.grid}>
          <img alt="" className={classes.grid__span6__image} src="/Scribble/scribble_logo.png"></img>
          <p className={classes.grid__span6__text__top}>
          Scribble is a day of design hosted by NYU IT OTSS that aims to expose
          young minds to the world of technology, espcially product design.
          </p>
          <div className={classes.grid__span6__text__roles}>
            <Typography>
              <b>
                Client
              </b>
            </Typography>
            <Typography variant="body1">
              NYU IT OTSS
            </Typography>
          </div>
          <div className={classes.grid__span6__text__roles}>
            <Typography>
              <b>
                Role
              </b>
            </Typography>
            <Typography variant="body1">
              Organizer
            </Typography>
          </div>
          <div className={classes.grid__span6__text__roles__bottom}>
            <Typography>
              <b>
                Duration
              </b>
            </Typography>
            <Typography variant="body1">
              June 2018 - Present
            </Typography>
          </div>

        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Jumbotron);
