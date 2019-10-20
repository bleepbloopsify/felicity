import React, { Component } from 'react';
import ProjectContainer from '../ProjectContainer';
import { withStyles } from '@material-ui/styles';
import Jumbotron from './Jumbotron';
import { TableOfContents, TableOfContentsItem } from '../TableOfContents';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Sections, Section } from '../../Sections';
import uparrow from '../../uparrow.svg';
import Story from './Story';
import Applications from './Applications';
import Evolution from './Evolution';
import LearnMore from './LearnMore';

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
  underJumbo: {
    "display":"flex",
    "flex-direction": "row",
    "flex-wrap": "nowrap",
    "margin-top": "70px",
    [theme.breakpoints.down('md')]: {
      "margin-top": "20px",
      "padding": "0px 20px",
      "box-sizing": "border-box",
    },
  },
  textContainer: {
    "width": "100%",
    display: "flex",
    "justify-content": "center"
  },
  content: {
    "width": "940px",
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
    "grid-row-gap": "20px",
  },
  otherProjects__grid__span4: {
      "grid-column": "span 4",
      "grid-row": "span 1",
      [theme.breakpoints.down('md')]: {
          "grid-column": "span 12",
      },
  },
  otherProjects__grid__span4__photo: {
      width: "100%",
      height: "auto",
  }
});

class Scribble extends Component {
  static PROJECT_NAME = 'Scribble';
  static PROJECT_LINK = '/projects/scribblenyc';

  render() {
    const { classes } = this.props;


    return (
      <ProjectContainer>
        <Jumbotron />

        <div className={classes.underJumbo}>

          <TableOfContents>
            <TableOfContentsItem anchor="story">
              <Typography color="primary">
                Story
              </Typography>
            </TableOfContentsItem>
            <TableOfContentsItem anchor="applications">
              <Typography color="primary">
                Applications
              </Typography>
            </TableOfContentsItem>
            <TableOfContentsItem anchor="evolution">
              <Typography color="primary">
                Evolution
              </Typography>
            </TableOfContentsItem>
            <TableOfContentsItem anchor="learnMore">
              <Typography color="primary">
                Learn More
              </Typography>
            </TableOfContentsItem>
            <div style={{
              height: "1.5em",
            }}></div>
            <TableOfContentsItem anchor="top">
              <img src={uparrow} alt="" /> Top
            </TableOfContentsItem>
          </TableOfContents>

          <div className={classes.textContainer}>
            <div className={classes.content}>
              <Sections>
                <Section id="story">
                  <Story />
                </Section>
                <Section id="applications">
                  <Applications />
                </Section>
                <Section id="evolution">
                  <Evolution />
                </Section>
                <Section id="learnMore">
                  <LearnMore />
                </Section>

                <Section>
                  <div className={classes.otherProjects}>
                    <h1 className={classes.otherProjects__title}>
                      Other Projects
                    </h1>
                    <div className={classes.otherProjects__grid}>
                      <Link to="/projects/packages" className={classes.otherProjects__grid__span4}>
                        <img alt="Packages Mockup"
                            className={classes.otherProjects__grid__span4__photo}
                            src="/Packages/Packages_mockup.jpeg"/>
                      </Link>
                      <Link to="/projects/cpacs" className={classes.otherProjects__grid__span4}>
                        <img alt="CPACS mockup"
                            className={classes.otherProjects__grid__span4__photo}
                            src="/CPACSweb/CPACS_mockup.jpg"/>
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

export default withStyles(styles)(Scribble);
