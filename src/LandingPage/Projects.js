import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Section, Sections } from '../Sections';



const styles = theme => ({
  project_section: {
    display: "flex",
    "flex-direction": "row",
    width: '100%',
    "align-items": "center",
    "justify-content": "center",
  },
  project_description: {
    'padding-left': '170px',
    'padding-bottom': '100px',
    display: "flex",
    "max-width": "40vw",
    "flex-direction": "column",
  },
  topic: {
    "font-family": "Karla",
    "font-style": "normal",
    "font-weight": "bold",
    "font-size": "18px",
    "line-height": "21px",

    "margin-top": "65.11px",
  },
  title: {
    "font-family": "Karla",
    "font-style": "normal",
    "font-weight": "bold",
    "font-size": "36px",
    "line-height": "21px",

    "margin-top": '19.89px',
  },
  description: {
    "font-family": "Muli",
    "font-style": "normal",
    "font-weight": "normal",
    "font-size": "16px",
    "line-height": "20px",

    "color": "#333333",


    "margin-top": "30.11px",
  },
  read_more: {
    "margin-top": "29.89px",
  },
  read_more_button: {
    "background": "#880A56",
    "color": "white",
    "border-radius": "30px",
    "font-family": "Muli",
    "padding-left": "39px",
    "padding-right": "39px",
  },
  project_image: {
    "max-width": "30vw",
    "margin": "57px",
  },
});

class Projects extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Sections>
        <Section>
          <div className={classes.project_section}>
            <div className={classes.project_description}>
              <div className={classes.topic}>
                Product Design
              </div>
              <div className={classes.title}>
                CPACS
              </div>
              <div className={classes.description}>
                Redisigning a full service capital project management system used by NYU.
              </div>
              <div className={classes.read_more}>
                <Link to="/projects/cpacs">
                  <Button className={classes.read_more_button}>Read More</Button>
                </Link>
              </div>
            </div>
            {/* Image goes here, absolute position */}
            <img alt="CPACS Mockup" className={classes.project_image} src="/CPACSweb/CPACS mockup.jpg"></img>

          </div>
        </Section>
        <Section>
          <div className={classes.project_section}>
            <div className={classes.project_description}>
              <div className={classes.topic}>
                UX/UI Design
              </div>
              <div className={classes.title}>
                Packages
              </div>
              <div className={classes.description}>
                A streamlined system for managing mail room inventory in NYU faculty housing.
              </div>
              <div className={classes.read_more}>
                <Link to="/projects/packages">
                  <Button className={classes.read_more_button}>Read More</Button>
                </Link>
              </div>
            </div>
            <img alt="Packages Mockup" className={classes.project_image} src="/Packages/PACKAGES_MOCKUP.jpeg"></img>
          </div>

        </Section>
        <Section>
          <div className={classes.project_section}>
            <div className={classes.project_description}>
              <div className={classes.topic}>
                Branding
              </div>
              <div className={classes.title}>
                Scribble NYC
              </div>
              <div className={classes.description}>
                A design forum and design-a-thon targeted at middle school and high school students to expose them to the world of product design.
              </div>
              <div className={classes.read_more}>
                <Link to="/projects/scribblenyc">
                  <Button className={classes.read_more_button}>Read More</Button>
                </Link>
              </div>
            </div>

            <img alt="Scribble NYC Logo" className={classes.project_image} style={{
              backgroundColor: "#F3F3F3",
            }} src="/Scribble/Scribble jumbotron-01.png"></img>

          </div>
        </Section>
      </Sections>
    );
  }
}

export default withStyles(styles)(Projects);