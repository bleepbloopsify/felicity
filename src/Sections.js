import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const sectionStyles = {
  root: {
    // This should extend the entire width of a section
    width: '100%',
  },
};

class _Section extends Component {

  render() {
    const { classes, children, id="" } = this.props;

    return (
      <div id={id} className={classes.root}>
        {children}
      </div>
    );
  }
}

export const Section = withStyles(sectionStyles)(_Section);

const sectionsStyles = {
  root: {
    // We use flexbox so each section is dynamically sizable
    display: 'flex',
    'flex-direction': 'column',
  },
};

// This defines vertical sections in a page
// +---------------+
// |   Section 1   |
// |               |
// |               |
// |               |
// +---------------+
// |   Section 2   |
// |               |
// |               |
// +---------------+
// |   Section 3   |
// |               |
// |               |
// |               |
// |               |
// +---------------+
// No margins around these

class _Sections extends Component {
  render() {
    const { classes, children } = this.props;

    return (
      <div className={classes.root}>
        {children}
      </div>
    );
  }
}

export const Sections =  withStyles(sectionsStyles)(_Sections);
