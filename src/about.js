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
  },
  content:{
    "max-width": "940px",
    "margin-top": "100px",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "flex-start",
    "align-items": "center",
    [theme.breakpoints.down('sm')]: {
      "width": "100%",
      "box-sizing": "border-box",
    },
  },
  blurb:{
    "width": "100%",
    display: "flex",
    "flex-direction": "row",
    "justify-content": "flex-start",
    "align-items": "flex-start",
    "padding": "0px",
    [theme.breakpoints.down('sm')]: {
      "padding": "0px 20px",
      "box-sizing": "border-box",
      "flex-direction": "column",
    },
  },
  blurb__extra:{
    "margin-top": "60px",
  },
  blurb__text:{
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "flex-start",
    "align-items": "flex-start",
  },
  avatar: {
    width: "300px",
    height: "auto",
    "margin-right": "24px",
    [theme.breakpoints.down('sm')]: {
      "width": "75%",
      "margin-bottom": "40px",
    },
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
    "margin": "0px",
  },
  button: {
    "box-sizing": "border-box",
    "margin-top": "24px",
    "all": "unset",
    "font-family": "'Muli', sans-serif",
    "font-weight": "bold",
    "font-size": "12px",
    "background-color": "#880A56",
    "color": "white",
    "text-align": "center",
    "padding": "8px 16px",
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
          <section className={classes.blurb}>
            <img alt="Felicity, an Asian American woman in her 20s, posing with her cat. Both are looking off into the distance"
                 className={classes.avatar}
                 src="/my_photo.jpg" />
            <div className={classes.blurb__text}>
              <h1 className={classes.h1}>Hey! Felicity here.</h1>
              <p className={classes.p}>
                I am a product designer, proudly hailing from New York City. My academic background in computer science and love for design places me in a unique position as the bridge between designers and developers. I relish sinking my teeth into intricate design challenges while still keeping a light-hearted approach to problem-solving. When not meticulously streamlining complex user flows, you can find planning my next dinner party.
              </p>
            </div>
          </section>
          <section className={[classes.blurb, classes.blurb__extra].join(" ")}>
            <p className={classes.p}>
            I strongly believe that all of my experiences, including my personal interests, contribute to my growth as a designer. Beyond my proficiency in Figma and Sketch, I have a diverse set of hobbies that inspire my creativity and inform my design decisions, such as web development, game programming, digital art, and mermaiding. Additionally, I am involved in animal rescue work, which I find to be both rewarding and fulfilling. These interests provide me with a unique perspective that allows me to approach design challenges from a variety of angles and deliver innovative solutions.
            </p>
          </section>


          <a className={classes.button} href="https://github.com/FelicityPictures/Resume/blob/master/Resume.pdf" target="_blank" rel="noopener noreferrer">
            Check out my resume
          </a>
        </main>

        <Footer />

      </div>
    );
  }
}


export default withStyles(styles)(AboutMe);
