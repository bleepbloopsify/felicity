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
    "max-width": "640px",
    "box-sizing": "border-box",
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
    "padding": "64px",
    "background-color": "#FFF4FB",
    "border-radius": "16px",
    "margin-bottom": "60px",
    "border": "1px solid #FFF4FB",
    "&:hover": {
       "border": "1px solid #880A56",
       "box-shadow": "0px 4px 12px 0px #880A5625",
    },
    // [theme.breakpoints.down('md')]: {
    //   "width": "100%",
    //   "padding": "0px 10px",
    //   "display": "flex",
    //   "justify-content": "center",
    //   "align-items": "center",
    //   "flex-direction": "column",
    //   "box-sizing": "border-box",
    //   "margin": "20px 0px",
    // },
  },
  projectOverview__info: {
    width: "100%",
  },
  projectOverview__title: {
    "margin": "0px",
    "font-family": "'Karla', sans-serif",
    "font-size": "2em",
    "margin-bottom": "0.75em"
  },
  projectOverview__description: {
    "font-family": "'Muli', sans-serif",
    "font-weight": "bold",
    "font-size": "1em",
    "margin": "0em 0em 3em 0em",
    // [theme.breakpoints.down('md')]: {
    //   "margin": "15px 0px",
    // },
  },
  projectOverview__eyebrows: {
    "all": "unset",
    "font-family": "'Muli', sans-serif",
    "font-weight": "bold",
    "font-size": "12px",
    "color": "#880A56",
  },
  projectOverview__photo: {
    "width": "100%",
    "height": "auto",
    "margin-bottom": "2em",
  }
})

class Projects extends Component {
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>

        <section className={classes.projectOverview}>
          <img alt="Verizon logo" src="/private_projects/Verizon_mockup.jpg" className={classes.projectOverview__photo}></img>

          <div className={classes.projectOverview__info}>
            <h1 className={classes.projectOverview__title}>Verizon.com Shop</h1>
            <p className={classes.projectOverview__description}>
              Improve the verizon.com e-commerce experience to increase conversion.
            </p>
            <h2 className={classes.projectOverview__eyebrows}>
              #UX/UI #UserResearch #Strategy #DesignAuditing
            </h2>
          </div>
        </section>

        <Link to="/projects/packages">
          <section className={classes.projectOverview}>
            <img alt="Packages mockup" src="/Packages/Packages_mockup.jpeg" className={classes.projectOverview__photo} />

            <div className={classes.projectOverview__info}>
              <h1 className={classes.projectOverview__title}>NYU faculty housing's Packages app</h1>
              <p className={classes.projectOverview__description}>
                Converting a manual, paper-based process for managing mail room inventory in NYU faculty housing and converting it into a streamlined digital system.
              </p>
              <h2 className={classes.projectOverview__eyebrows}>
                #ProductDesign #UX/UI #Engineering #UserResearch
              </h2>
            </div>
          </section>
        </Link>


        <Link to="/projects/cpacs">
          <section className={classes.projectOverview}>
            <img alt="Cpacs mockup" src="/CPACSweb/CPACS_mockup.jpg" className={classes.projectOverview__photo} />

            <div className={classes.projectOverview__info}>
              <h1 className={classes.projectOverview__title}>
              NYU's CPACS Budget Module
              </h1>
              <p className={classes.projectOverview__description}>
                It started off as a redesign of the current system but with more user research, the focus of the project shifted to improving the system that we already have.
              </p>
              <h2 className={classes.projectOverview__eyebrows}>
                #ProductDesign #UX/UI #UserResearch
              </h2>
            </div>
          </section>
        </Link>


        <Link to="/projects/scribblenyc">
          <section className={classes.projectOverview}>
            <img alt="Scribble Mockup" src="/Scribble/centered_swag.jpg" className={classes.projectOverview__photo}></img>

            <div className={classes.projectOverview__info}>
              <h1 className={classes.projectOverview__title}>Scribble NYC</h1>
              <p className={classes.projectOverview__description}>
                A design forum and design-a-thon targetted towards middle school
                and high school students to expose them to the world of product
                design.
              </p>
              <h2 className={classes.projectOverview__eyebrows}>
                #DesignAThonFounder #Branding #Engineering
              </h2>
            </div>
          </section>
        </Link>

        <section className={classes.projectOverview}>
          <img alt="Verizon GizmoWatch 2" src="/GizmoWatch/GizmoWatch.jpg" className={classes.projectOverview__photo}></img>

          <div className={classes.projectOverview__info}>
            <h1 className={classes.projectOverview__title}>Verizon GizmoWatch</h1>
            <p className={classes.projectOverview__description}>
              Launching the Gizmo Buddy experience.
            </p>
            <p className={classes.projectOverview__description}>
              Not available to the public eye
            </p>
            <h2 className={classes.projectOverview__eyebrows}>
              #ProductDesign
            </h2>
          </div>
        </section>

      </main>
    );
  }
}

export default withStyles(styles)(Projects);
