import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  root: {
    "position": "sticky",
    "height": "30vh",
    "top": "10em",
    "padding": "0px 25px",
    "width": "100px"
  },
  tableOfContents: {
    "border-left": "solid #880A56",
    "padding": "10px 5px",
    "z-index": "0"
  },
  items: { // this is the container meant to hold each item

  }

});

class _TableOfContents extends Component {
  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.tableOfContents}>
          {children}
        </div>
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
