import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import ProjectContainer from "../ProjectContainer";
import { Link } from 'react-router-dom';
import Jumbotron from "./Jumbotron";
import { Sections, Section } from '../../Sections';
import { TableOfContents, TableOfContentsItem } from "../TableOfContents";

import uparrow from '../../uparrow.svg';
import Overview from "./Overview";
import Understand from "./Understand";
import Analyze from "./Analyze";
import Ideate from "./Ideate";
import Testing from "./Testing";

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

class CPACS extends Component {
  static PROJECT_NAME = 'CPACS';
  static PROJECT_LINK = '/projects/cpacs';

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
              <Section id="understand">
                <Understand />
              </Section>
              <Section id="analyze">
                <Analyze />
              </Section>
              <Section id="ideate">
                <Ideate />
              </Section>
              <Section id="testing">
                <Testing />
              </Section>
              <hr style={{ width: "96%" }} />
              <Section>
                <Typography variant="subtitle1">
                  Other Projects
                </Typography>
                <div className={classes.other_projects}>
                  <Link to="/projects/packages">
                    <img alt="Packages Mockup" className={classes.project_image} src="/Packages/PACKAGES_MOCKUP.jpeg"></img>
                  </Link>
                  <Link to="/projects/scribblenyc">
                    <img alt="Scribble NYC Logo" className={classes.project_image} src="/Scribble/Scribble jumbotron-01.png"></img>
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

export default withStyles(styles)(CPACS);