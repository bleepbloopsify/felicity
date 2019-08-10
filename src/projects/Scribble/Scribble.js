import React, { Component } from 'react';
import ProjectContainer from '../ProjectContainer';
import { withStyles } from '@material-ui/styles';
import Jumbotron from './Jumbotron';
import { TableOfContents, TableOfContentsItem } from '../TableOfContents';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Sections, Section } from '../../Sections';
import uparrow from '../../uparrow.svg';
import Overview from './Overview';
import CreativeBrief from './CreativeBrief';
import Research from './Research';
import Design from './Design';
import Present from './Present';

const styles = theme => ({
  root: {
    display: "flex",
    "justify-content": "center",
    "padding-right": "10em",
  },
  tableOfContents: {
    "flex-grow": 1,
    padding: "5em",
  },
  content: {
    "flex-grow": 5,
    padding: "4em",
  },
  other_projects: {
    display: "flex",
    "flex-direction": "flex-row",
  },
  project_image: {
    "max-width": "20em",
    "margin": "2em",
  },
});

class Scribble extends Component {
  static PROJECT_NAME = 'Scribble';
  static PROJECT_LINK = '/projects/scribblenyc';

  render() {
    const { classes } = this.props;


    return (
      <ProjectContainer>
        <Jumbotron />
        <div className={classes.root}>
          <div className={classes.tableOfContents}>
            {/* Table of contents goes here */}
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
              <TableOfContentsItem anchor="testing">
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
            {/* We need a way to get back to the top of the page */}
          </div>
          <div className={classes.content}>
            <Sections>
              <Section id="overview">
                <Overview />
              </Section>
              <Section id="creative_brief">
                <CreativeBrief />
              </Section>
              <Section id="research">
                <Research />
              </Section>
              <Section id="design">
                <Design />
              </Section>
              {/* <Section id="present">
                <Present />
              </Section> */}
              <hr style={{ width: "96%" }} />
              <Section>
                <Typography variant="subtitle1">
                  Other Projects
                </Typography>
                <div className={classes.other_projects}>
                  <Link to="/projects/packages">
                    <img alt="Packages Mockup" className={classes.project_image} src="/Packages/PACKAGES_MOCKUP.jpeg"></img>
                  </Link>
                  <Link to="/projects/cpacs">
                    <img alt="CPACS Mockup" className={classes.project_image} src="/CPACSweb/CPACS mockup.jpg"></img>
                  </Link>
                </div>
              </Section>
            </Sections>
          </div>
        </div>
      </ProjectContainer>
    );
  }
}

export default withStyles(styles)(Scribble);