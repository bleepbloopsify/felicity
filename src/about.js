import { Typography, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import Navbar from './LandingPage/Navbar';
import Footer from './footer';


const styles = theme => ({
  root: {
    "width": "100%",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "flex-start",
    "align-items": "center",
    // "background-color": "#F5FDFF",
  },
  content:{
    width: "100%",
    "margin-top": "70px",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "flex-start",
    "align-items": "center",
    [theme.breakpoints.down('md')]: {
      "width": "100%",
      "padding": "70px 0px 0px 0px",
      "box-sizing": "border-box",
    },
  },
  aboutSection:{
    "max-width": "940px",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "flex-start",
    "align-items": "center",
    "padding": "50px 0px 0px 0px",
    "text-align": "center",
    [theme.breakpoints.down('md')]: {
      "width": "100%",
      "padding": "0px 20px",
      "box-sizing": "border-box",
    },
  },
  avatar: {
    width: "144px",
    height: "148px",
  },
  h1: {
    "font-family": "'Karla', sans-serif",
    "font-size": "36px",
    "line-height": "1.5",
    "margin": "0px",
  },
  h2: {
    "font-family": "'Karla', sans-serif",
    "font-size": "24px",
    "line-height": "1.5",
    "font-weight": "normal",
    "margin": "0px",
  },
  p: {
    "font-family": "'Muli', sans-serif",
    "font-size": "16px",
    "line-height": "2",
    "font-weight": "normal",
    "margin": "50px 0px 0px 0px",
  },
  button: {
    "max-width": "140px",
    "box-sizing": "border-box",
    "margin-top": "10px",
    "all": "unset",
    "font-family": "'Muli', sans-serif",
    "font-weight": "bold",
    "font-size": "12px",
    "background-color": "#880A56",
    "color": "white",
    "text-align": "center",
    "width": "140px",
    "padding": "8px 30px",
    "border-radius": "50px",
    "cursor": "pointer",
    "&:hover": {
      "background-color": "#D772AF",
      "color": "black",
    }
  },
});


class AboutMe extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <header>
          <Navbar />
        </header>
        <main className={classes.content}>
          <section className={classes.aboutSection}>
            <img alt="Felcity's Avatar"
                 className={classes.avatar}
                 src="/felicity_avatar.png" />
            <h1 className={classes.h1}>Hi there. I'm Felicity.</h1>
          </section>
          <section className={classes.aboutSection}>
            <p className={classes.p}>
              Welcome to my little corner of the internet. I’m a product designer with a background in computer science. I graduated from NYU Tandon in May 2020 with a Bachelor’s in computer science and minors in integrated digital media and game engineering.
              <br/><br/>
               I have experience working on enterprise systems and B2B applications during my time as a student UX/UI designer at NYU IT. Optimizing complex systems heavy with business needs while fighting for the experience of the end users is my jam. However, I've been exploring other fields and am currently deep in the e-commerce world, working on the Verizon.com experience with my agency, Publicis Sapient.
            </p>
          </section>
          <section className={classes.aboutSection}>
            <p className={classes.p}>
              I was born and raised in New York, which has an overpopulation of cats. As they are my favorite animals, I want  do my part to help the overpopulation problem, so in my spare time, I rescue cats. I've only started doing it around the time of the pandemic but my current count of cats personally picked up off the streets and adopted out is 5 and I've TNR'd 10. (Note: This number has probably went up since the last time I've updated this website :P)
            </p>
          </section>
          <section className={classes.aboutSection}>
            <p className={classes.p}>
            Learn more about my professional experience more by checking out my resume:
            </p>
            <a className={classes.button} href="https://github.com/FelicityPictures/Resume/blob/master/Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume!
            </a>
          </section>
        </main>

        <Footer />

      </div>
    );
  }
}


export default withStyles(styles)(AboutMe);
