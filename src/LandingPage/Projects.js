import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';


const styles = theme => ({
  main: {
    'width': "100%",
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "flex-start",
    "align-items": "center",
  },
  nav: {
    "margin-top": "0px",
    "width": "90%",
    "box-sizing": "border-box",
    "padding": "50px 0px",
    "display": "grid",
    "grid-template-columns": "repeat(2, 1fr)",
    "grid-template-rows": "auto",
    "column-gap": "64px",
    "row-gap": "32px",
    [theme.breakpoints.up('xl')]: {
      "grid-template-columns": "repeat(4, 1fr)",
    },
    [theme.breakpoints.down('sm')]: {
      "grid-template-columns": "repeat(1, 1fr)",
    },
  },
  container: {
    "min-width": "100%",
    "grid-column-start": "1",
    "grid-column-end": "2",
    "width": "100%",
    "box-sizing": "border-box",
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "start",
    "padding": "32px",
    [theme.breakpoints.up('xl')]: {
      "grid-column-end": "3",
    },
  },
  nameText: {
    'font-family': "'Itim', cursive",
    'font-style': 'normal',
    'font-weight': 'normal',
    'font-size': '2.5em',
    "color": "#D772AF",
    "margin": "0px 0px 0px 0px",
  },
  centerText: {
    'font-family': 'Muli',
    'font-style': 'normal',
    'font-size': '2em',
    'font-weight': "bold",
    'color': '#333333',
    "margin": "0px 0px 0px 0px",
  },
  bottomAlignText: {
    "display": "flex",
    "flex-direction": "row",
    "justify-content": "center",
    "align-items": "flex-end",
  },

  projectOverview: {
    "position": "relative",
    "min-width": "100%",
    "max-width": "640px",
    "align-self": "stretch",
    "box-sizing": "border-box",
    "padding": "32px",
    "background-color": "#FFF4FB",
    "border-radius": "16px",
    "border": "1px solid #FFF4FB",
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "space-between",
    "align-items": "flex-start",
    "color": "#000",
    "&:hover": {
       "border": "1px solid #880A56",
       "box-shadow": "0px 4px 12px 0px #880A5625",
       "background-color": "#880A56",
       "color": "#FFF",
       "transition": ".25s ease",
       "& > h2": {
         "color": "#FFF",
         "transition": ".25s ease",
       },
    },
  },
  projectOverview__info: {
    "width": "100%",
  },
  projectOverview__info__top: {
    "width": "100%",
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "flex-start",
    "align-content": "center",
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
    "font-size": "1.25em",
    "margin": "0em 0em 3em 0em",
  },
  projectOverview__eyebrows: {
    "all": "unset",
    "font-family": "'Muli', sans-serif",
    "font-weight": "bold",
    "font-size": "0.75em",
    "color": "#880A56",
  },
  projectOverview__photo: {
    "width": "100%",
    "height": "300px",
    "margin-bottom": "2em",
    "object-fit": "cover",
  },

  footerContainer: {
    "width": "100%",
    "min-height": "200px",
    "height": "100%",
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
    "box-sizing": "border-box",
    "padding": "32px",
    "border-radius": "16px",
    "background-image": 'url("/heart_icon.png")',
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "150px 150px",
  },
  icon_group: {
    "width": "100px",
    "margin-top": "24px",
    "display": "flex",
    "flex-direction": "row",
    "justify-content": "space-between",
    "align-items": "center",
    "padding": "0px 30px",
  },
  footer__icon: {
    "width": "32px",
    "height": "auto",
  },
  overlay: {
    "position": "absolute",
    "top": "0",
    "bottom": "0",
    "left": "0",
    "right": "0",
    "height": "100%",
    "width": "100%",
    "opacity": "0",
    "transition": ".5s ease",
    "background-color": "rgba(136, 10, 86, 0.9);",
    "border-radius": "15px",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
    "&:hover": {
      "opacity": "1",
    },
  },
  overlay__text: {
    "color": "#FFF",
    "font-family": "'Muli', sans-serif",
    "font-size": "1em",
  },
  button: {
    "all": "unset",
    "font-family": "'Muli', sans-serif",
    "font-weight": "bold",
    "font-size": "1em",
    "background-color": "#880A56",
    "color": "white",
    "text-align": "center",
    "width": "140px",
    "padding": "8px 0px",
    "border-radius": "50px",
    "margin": "24px 0px 0px 0px",
    "&:hover": {
      "background-color": "#D772AF",
      "color": "black",
    }
  },
})

class Projects extends Component {
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
      <nav className={classes.nav}>

        <section className={classes.container}>
          <span className={classes.bottomAlignText}>
            <p className={classes.centerText}>Hi! I'm
            <b className={classes.nameText}> felicity ng</b>,
            </p>
          </span>
          <p className={classes.centerText}>a product designer currently working at Publicis Sapient.</p>
          <Link to="/about">
            <button className={classes.button}>About me</button>
          </Link>
        </section>


        <Link to={{ pathname: "https://drive.google.com/file/d/1JVfQGTO5y2EK7SKcA-tYG5OLba8U3ajY/view?usp=sharing" }} target="_blank" className={classes.projectOverview}>
          <div className={classes.projectOverview__info__top}>
            <img alt="Verizon GizmoWatch 3" src="/GizmoWatch/Title_image.jpg" className={classes.projectOverview__photo}></img>

            <div className={classes.projectOverview__info}>
                <h1 className={classes.projectOverview__title}>Verizon GizmoWatch</h1>
                <p className={classes.projectOverview__description}>
                  Creating a peer-based social feature for a children's smartwatch.
                </p>
              </div>
            </div>
            <h2 className={classes.projectOverview__eyebrows}>
              #wearables #mobile #COPPACompliant
            </h2>
          </Link>

          <section className={classes.projectOverview}>
          <div className={classes.projectOverview__info__top}>
            <img alt="Skolem logo" src="/private_projects/GizmoHub.png" className={classes.projectOverview__photo}></img>

            <div className={classes.projectOverview__info}>
              <h1 className={classes.projectOverview__title}>Verizon GizmoHub</h1>
              <p className={classes.projectOverview__description}>
              Expanding and enhancing the existing School/Quiet mode feature.
              </p>
            </div>
          </div>
          <h2 className={classes.projectOverview__eyebrows}>
              #wearables #mobile #journeyMap #customerFeedback
          </h2>
          <div className={classes.overlay}>
            <p className={classes.overlay__text}>Available upon request</p>
          </div>
        </section>

        <Link to={{ pathname: "https://drive.google.com/file/d/1ADmEgcYjF04I9ZzWN04PiXcM-y48gHU1/view?usp=sharing" }} target="_blank" className={classes.projectOverview}>
          <div className={classes.projectOverview__info__top}>
            <img alt="Verizon logo" src="/private_projects/Verizon_Shop.png" className={classes.projectOverview__photo}></img>

            <div className={classes.projectOverview__info}>
              <h1 className={classes.projectOverview__title}>Verizon's eCommerce experience</h1>
              <p className={classes.projectOverview__description}>
                Redesigning the compare bar on the Verizon website to increase conversion.
              </p>
            </div>
          </div>
          <h2 className={classes.projectOverview__eyebrows}>
            #UX/UI #eCommerce #audit #strategy
          </h2>
        </Link>
{/*
        <Link to={{ pathname: "https://drive.google.com/file/d/1Thpn-iA0RjURqk0rym8_CItwwikX_Mx_/view?usp=sharing" }} target="_blank" className={classes.projectOverview}>
          <div className={classes.projectOverview__info__top}>
            <img alt="Sprouts" src="/private_projects/Sprouts.jpg" className={classes.projectOverview__photo}></img>

            <div className={classes.projectOverview__info}>
              <h1 className={classes.projectOverview__title}>Sprouts In-Store Experience</h1>
              <p className={classes.projectOverview__description}>
                Marrying the Sprouts online platform with the in-store experience to make navigating grocery shores more efficient in the post-pandemic age.
              </p>
            </div>
          </div>
          <h2 className={classes.projectOverview__eyebrows}>
            #UX/UI #userResearch #strategy #eCommerce
          </h2>
        </Link>
*/}

        <Link to="/projects/packages" className={classes.projectOverview}>
          <div className={classes.projectOverview__info__top}>
            <img alt="Packages mockup" src="/Packages/Packages_mockup.jpeg" className={classes.projectOverview__photo} />

            <div className={classes.projectOverview__info}>
              <h1 className={classes.projectOverview__title}>
              NYU faculty housing's Packages app
              </h1>
              <p className={classes.projectOverview__description}>
                Taking a manual, paper-based process for managing mail room inventory in NYU faculty housing and converting it into a streamlined digital system.
              </p>
            </div>
          </div>
          <h2 className={classes.projectOverview__eyebrows}>
            #productDesign #B2B #UX/UI #engineering #userResearch
          </h2>
        </Link>


        <Link to="/projects/cpacs" className={classes.projectOverview}>
          <div className={classes.projectOverview__info__top}>
            <img alt="Cpacs mockup" src="/CPACSweb/CPACS_mockup.jpg" className={classes.projectOverview__photo} />

            <div className={classes.projectOverview__info}>
              <h1 className={classes.projectOverview__title}>
              NYU's CPACS Budget Module
              </h1>
              <p className={classes.projectOverview__description}>
                It started off as a redesign of the current system but with more user research, the focus of the project shifted to improving the system that we already have.
              </p>
            </div>
          </div>
          <h2 className={classes.projectOverview__eyebrows}>
            #productDesign #B2B #UX/UI #userResearch
          </h2>
        </Link>


        <Link to="/projects/scribblenyc" className={classes.projectOverview}>
          <div className={classes.projectOverview__info__top}>
            <img alt="Scribble Mockup" src="/Scribble/centered_swag.jpg" className={classes.projectOverview__photo}></img>

            <div className={classes.projectOverview__info}>
              <h1 className={classes.projectOverview__title}>Scribble NYC</h1>
              <p className={classes.projectOverview__description}>
                A design forum and design-a-thon targetted towards middle school
                and high school students to expose them to the world of product
                design.
              </p>
            </div>
          </div>
          <h2 className={classes.projectOverview__eyebrows}>
            #designAThonFounder #branding #engineering
          </h2>
        </Link>

        <footer className={classes.footerContainer}>
          <Typography variant="h1" color="primary">
            felicity ng
          </Typography>
          <div className={classes.icon_group}>
            <a href="mailto: felicity.ng@nyu.edu">
              <img alt="email icon" src="/email_icon.png" className={classes.footer__icon}></img>
            </a>

            <a href="https://www.linkedin.com/in/felicity-ng/" target="_blank" rel="noopener noreferrer">
              <img alt="linkedin icon" src="/linkedin_icon.png" className={classes.footer__icon}></img>
            </a>
          </div>
        </footer>

        </nav>
      </main>
    );
  }
}

export default withStyles(styles)(Projects);
