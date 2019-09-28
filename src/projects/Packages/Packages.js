import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
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
import Learn from './Learn';

const styles = theme => ({
  root: {
  },
  textContainer: {
    "width": "100%",
    display: "flex",
    "justify-content": "center"
  },
  content: {
    "width": "940px",
  },
  project_image: {
    "max-width": "20em",
    "margin": "2em",
  },
  underJumbo: {
    "display":"flex",
    "flex-direction": "row",
    "flex-wrap": "nowrap",
    "margin-top": "70px"
  },
  otherProjects: {
    "border-top": "1px solid black",
    "padding": "10px 0px"
  },
  otherProjects__title: {
    "margin": "20px 0px",
    "font-family": "'Karla', sans-serif",
    "font-size": "16px",
    "font-weight": "bold"
  },
  otherProjects__grid: {
    width: "100%",
    display: "grid",
    "grid-template-columns": "repeat(12, 1fr)",
    "grid-template-rows": "auto",
    "grid-column-gap": "20px",
  },
  otherProjects__grid__span4: {
      "grid-column": "span 4",
      "grid-row": "span 1",
  },
  otherProjects__grid__span4__photo: {
      width: "100%",
      height: "auto",
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
        {/* Table of contents goes here */}
        <div className={classes.underJumbo}>

          <TableOfContents>
            <TableOfContentsItem anchor="overview">
              <Typography color="primary">
                Overview
              </Typography>
            </TableOfContentsItem>
            <div style={{
              height: "1.5em",
            }}></div>
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
              height: "1.5em",
            }}></div>
            <TableOfContentsItem anchor="top">
              <img src={uparrow} alt="" /> Top
            </TableOfContentsItem>
          </TableOfContents>
          {/* We need a way to get back to the top of the page */}
          <div className={classes.textContainer}>
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
                <Section id="learn">
                  <Learn />
                </Section>


                <Section>
                  <div className={classes.otherProjects}>
                    <h1 className={classes.otherProjects__title}>
                      Other Projects
                    </h1>
                      <div className={classes.otherProjects__grid}>
                      <Link to="/projects/cpacs" className={classes.otherProjects__grid__span4}>
                        <img alt="CPACS Mockup"
                            className={classes.otherProjects__grid__span4__photo}
                            src="/CPACSweb/CPACS_mockup.jpg"></img>
                      </Link>
                      <Link to="/projects/scribblenyc" className={classes.otherProjects__grid__span4}>
                        <img alt="Scribble NYC Logo"
                            className={classes.otherProjects__grid__span4__photo}
                            src="/Scribble/centered_swag.jpg"></img>
                      </Link>
                    </div>
                  </div>
                </Section>
              </Sections>
            </div>
          </div>
        </div>
      </ProjectContainer>
    );
  }
}

export default withStyles(styles)(Packages);
