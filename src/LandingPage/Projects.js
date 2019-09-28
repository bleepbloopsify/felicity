import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const styles = theme => ({
  main: {
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
  },
  projectOverview: {
    width: "940px",
    display: "grid",
    "grid-template-columns": "repeat(2, 1fr)",
    "grid-template-rows": "auto",
    "grid-column-gap": "20px",
    "grid-auto-flow": "dense",
    "margin-top": "90px",
  },
  projectOverview__info: {
    "grid-column": "span 1",
    "grid-row": "span 1",
    "grid-column-start": "1",
    display: "flex",
    "justify-content": "flex-start",
    "align-content": "flex-start",
    "flex-direction": "column",
  },
  projectOverview__eyebrows: {
    "font-family": "'Karla', sans-serif",
    "font-weight": "bold",
    "font-size": "18px",
    "margin": "8px 0px"
  },
  projectOverview__title: {
    "margin": "0px",
    "font-family": "'Karla', sans-serif",
    "font-weight": "bold",
    "font-size": "36px",
    "margin-top": "7px"
  },
  projectOverview__description: {
    "font-family": "'Muli', sans-serif",
    "font-size": "16px",
    "margin": "30px 0px",
  },
  projectOverview__button: {
    "all": "unset",
    "font-family": "'Muli', sans-serif",
    "font-weight": "bold",
    "font-size": "12px",
    "background-color": "#880A56",
    "color": "white",
    "text-align": "center",
    "width": "140px",
    "padding": "8px 0px",
    "border-radius": "50px"
  },
  projectOverview__photo: {
    "grid-column": "span 1",
    "grid-column-start": "2",
    "grid-row": "span 1",
    "width": "100%",
    "height": "auto"
  }
})

class Projects extends Component {
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>

        <section className={classes.projectOverview}>
          <img alt="Packages mockup" src="/Packages/Packages_mockup.jpeg" className={classes.projectOverview__photo} />

          <div className={classes.projectOverview__info}>
            <h2 className={classes.projectOverview__eyebrows}>Product design</h2>
            <h1 className={classes.projectOverview__title}>Packages</h1>
            <p className={classes.projectOverview__description}>
              Taking a manual, paper-based process and converting it into a
              digital system.
            </p>
            <Link to="/projects/packages">
              <button className={classes.projectOverview__button}>
                Read more
              </button>
            </Link>
          </div>
        </section>


        <section className={classes.projectOverview}>
          <img alt="Cpacs mockup" src="/CPACSweb/CPACS_mockup.jpg" className={classes.projectOverview__photo} />

          <div className={classes.projectOverview__info}>
            <h2 className={classes.projectOverview__eyebrows}>Product design</h2>
            <h1 className={classes.projectOverview__title}>CPACS Funding Request</h1>
            <p className={classes.projectOverview__description}>
              Analyzing business needs to redesign a legacy enterprise system
              for managing capital projects.
            </p>
            <Link to="/projects/cpacs">
              <button className={classes.projectOverview__button}>
                Read more
              </button>
            </Link>
          </div>
        </section>


        <section className={classes.projectOverview}>
          <img alt="Scribble Mockup" src="/Scribble/centered_swag.jpg" className={classes.projectOverview__photo}></img>

          <div className={classes.projectOverview__info}>
            <h2 className={classes.projectOverview__eyebrows}>Branding</h2>
            <h1 className={classes.projectOverview__title}>Scribble NYC</h1>
            <p className={classes.projectOverview__description}>
              A design forum and design-a-thon targetted towards middle school
              and high school students to expose them to the world of product
              design.
            </p>
            <Link to="/projects/scribblenyc">
              <button className={classes.projectOverview__button}>
                Read more
              </button>
            </Link>
          </div>
        </section>
      </main>
    );
  }
}

export default withStyles(styles)(Projects);
