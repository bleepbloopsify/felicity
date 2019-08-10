import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  root: {
    position: "sticky",
    "top": "5em",
    "border-left": "solid #880A56",
    "padding-left": "2em",
  },
  items: { // this is the container meant to hold each item

  }
  
});

class _TableOfContents extends Component {

  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.root}>
        {children}
      </div>
    );
  }
}


export const TableOfContents = withStyles(styles)(_TableOfContents);

const itemStyles = theme => ({
  root: {

  },
});

class _TableOfContentsItem extends Component {

  render() {
    const { classes, children, anchor = "" } = this.props;

    return (
      <a href={"#" + anchor} className={classes.root}>
        {children}
      </a>
    );
  }
};

export const TableOfContentsItem = withStyles(itemStyles)(_TableOfContentsItem);