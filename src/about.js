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
    [theme.breakpoints.down('md')]: {
      "width": "100%",
      "padding": "70px 0px 0px 0px",
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
    [theme.breakpoints.down('md')]: {
      "width": "100%",
      "padding": "0px 20px",
      "box-sizing": "border-box",
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
                I’m a product designer, born and raised in NYC. My background is in computer science and I like to think of myself as the bridge between designers and developers. I love diving into a juicy, complex problem while still remembering to bring the <i>fun</i> into the solution.
                <br/>
                While I’m not exploring ways to simplify complex flows, you can find me obsessing over my cat.
              </p>
              <a className={classes.button} href="https://github.com/FelicityPictures/Resume/blob/master/Resume.pdf" target="_blank" rel="noopener noreferrer">
                Check out my resume
              </a>
            </div>
          </section>
          <section className={[classes.blurb, classes.blurb__extra].join(" ")}>
            <p className={classes.p}>
            I believe that everything I do will ultimately come back to inform my work. On that note, some of my interests outside of the typical Figma/Sketch landscape are...
            <br/>3D modeling
            <br/>Photography
            <br/>Web development
            <br/>Artificial intelligence
            <br/>Game programming
            <br/>Cryptocurrency
            <br/>Painting and other various arts and crafts
            <br/>Animations
            <br/>Animal rescue work
            </p>
              <p className={classes.p}>
              EXTRA"
              </p>
          </section>
        </main>

        <Footer />

      </div>
    );
  }
}


export default withStyles(styles)(AboutMe);
