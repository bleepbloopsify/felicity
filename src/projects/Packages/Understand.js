import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';

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
  grid__span12: {
    width: "100%",
    height: "auto",
    "grid-column": "span 12",
    "grid-row": "span 1",
  }
});

class Understand extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="subtitle1" gutterBottom>
          Understand
        </Typography>

        <Typography gutterBottom>
          <b>Packages information is logged in thick binders of paper. It is
          cluttered and inefficient. With the increase in e-commerce, the
          problem will only get worse.</b>
          <br/>
          To understand the situation, I visited several package rooms that will
          adopt the new system. I observed that mailroom employees record
          package information in a binder. If the binder gets too full, a new
          binder is started and the old one is stored away.
          <br/>
          To inform residents that their packages have arrived, a slip with the
          package information is put into the resident’s mailbox.
          <br/>
          With the rise of e-commerce, more packages were being delivered every
          day. The mailrooms were getting cluttered. There is now a higher
          demand for residents to pick up their packages sooner.
        </Typography>
        <div className={classes.grid}>
          <img src="/Packages/Package_room_photos.png"
                alt="images of how package rooms look"
                className={classes.grid__span12}/>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Understand);
