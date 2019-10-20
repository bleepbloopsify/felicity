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
    "grid-row-gap": "20px",
    [theme.breakpoints.down('md')]: {
      "grid-template-columns": "repeat(4, 1fr)",
    },
  },
  grid__span6: {
    width: "100%",
    height: "auto",
    "grid-column": "span 6",
    "grid-row": "span 1",
    "border": "1px solid #ccc"
  }
});

class Design extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="subtitle1" gutterBottom>
          Design
        </Typography>
        <Typography gutterBottom>
          <b>
          There is no budget for the project. Creating a new budget request.
          </b>
        </Typography>
        <div className={classes.grid}>
          <img src="/CPACSweb/No_Budget_Overview.png"
                alt="budget overview mockup"
                className={classes.grid__span6}/>
          <img src="/CPACSweb/Submitting_New_Budget.png"
                alt="new budget mockup"
                className={classes.grid__span6}/>
        </div>

        <Typography gutterBottom style={{paddingTop: "20px"}}>
          <b>
          Submitting a supplemental budget and a budget modification will
          utilize the same form.
          </b>
        </Typography>
        <div className={classes.grid}>
          <img src="/CPACSweb/Existing_Budget_Overview.png"
                alt="existing budget mockup"
                className={classes.grid__span6}/>
          <img src="/CPACSweb/Submitting_Supplemental_Budget.png"
                alt="submitting supplemental budget mockup"
                className={classes.grid__span6}/>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Design);
