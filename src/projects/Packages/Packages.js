import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';
import ProjectContainer from '../ProjectContainer';
import Jumbotron from './Jumbotron';
import { TableOfContents, TableOfContentsItem } from '../TableOfContents';
import uparrow from '../../uparrow.svg';
import { Sections, Section } from '../../Sections';
import Overview from './Overview';
import Understand from './Understand';
import Analyze from './Analyze';
import Ideate from './Ideate';
import Design from './Design';
import Testing from './Testing';

const styles = theme => ({
  root: {
    display: "flex",
    "justify-content": "center",
    "padding-right": "10em",
  },
  tableOfContents: {
    "flex-grow": 1,
    "padding": "5em",
    // color: "#880A56",
  }
});

class Packages extends Component {
  static PROJECT_NAME = 'CPACS';
  static PROJECT_LINK = '/projects/packages';

  render() {
    const { classes } = this.props;

    return (
      <ProjectContainer>
        <Jumbotron />
        <div className={classes.root}>
          <div className={classes.tableOfContents}>
            <TableOfContents>
              <TableOfContentsItem anchor="overview">
                <Typography color="primary">
                  Overview
                </Typography>
              </TableOfContentsItem>
              <div style={{
                height: "3em",
              }} />
              <TableOfContentsItem anchor="understand">
                <Typography color="primary">
                  Understand
                </Typography>
              </TableOfContentsItem>
              <TableOfContentsItem anchor="analyze">
                <Typography color="primary">
                  Analyze
                </Typography>
              </TableOfContentsItem>
              <TableOfContentsItem anchor="ideate">
                <Typography color="primary">
                  Ideate
                </Typography>
              </TableOfContentsItem>
              <TableOfContentsItem anchor="design">
                <Typography color="primary">
                  Design
                </Typography>
              </TableOfContentsItem>
              <TableOfContentsItem anchor="testing">
                <Typography color="primary">
                  Testing
                </Typography>
              </TableOfContentsItem>
              <TableOfContentsItem anchor="learn">
                <Typography color="primary">
                  Learn
                </Typography>
              </TableOfContentsItem>
              <div style={{
                height: "3em",
              }} />
              <TableOfContentsItem anchor="top">
                <img src={uparrow} alt="" /> Top
              </TableOfContentsItem>
            </TableOfContents>
          </div>
          <div className={classes.content}>
            <Sections>
              <Section id="overview">
                <Overview />
              </Section>
              <Section id="understand">
                <Understand />
              </Section>
              <Section id="analyze">
                <Analyze />
              </Section>
              <Section id="ideate">
                <Ideate />
              </Section>
              <Section id="design">
                <Design />
              </Section>
              <Section id="testing">
                <Testing />
              </Section>
            </Sections>
          </div>
        </div>
      </ProjectContainer>
    );
  }
}

export default withStyles(styles)(Packages);