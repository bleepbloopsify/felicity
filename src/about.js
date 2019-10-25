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
    "background-color": "#F5FDFF",
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
  coloredContainer1:{
    width: "100%",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "flex-start",
    "align-items": "center",
    "background-color": "#F5FDFF",
  },
  box1:{
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
    "line-height": "2",
    "font-weight": "normal",
    "margin": "0px",
  },
  p: {
    "font-family": "'Muli', sans-serif",
    "font-size": "18px",
    "line-height": "2",
    "font-weight": "normal",
    "margin": "50px 0px 0px 0px",
  },
  coloredContainer2:{
    width: "100%",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "flex-start",
    "align-items": "center",
    "background-image": "linear-gradient(180deg, #F5FDFF 0%, #FFEFF9 30%);",
  },
  box2:{
    "max-width": "940px",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "flex-start",
    "align-items": "center",
    "padding": "50px 0px 0px 0px",
    "text-align": "center",
    "padding-top": "100px",
    [theme.breakpoints.down('md')]: {
      "width": "100%",
      "padding": "50px 20px 0px 20px",
      "box-sizing": "border-box",
    },
  },
  coloredContainer3:{
    width: "100%",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "flex-start",
    "align-items": "center",
    "background-image": "linear-gradient(180deg, #FFEFF9 0%, #F5FDFF 20%);",
  },
  box3:{
    "max-width": "940px",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "flex-start",
    "align-items": "center",
    "padding": "50px 0px 0px 0px",
    "text-align": "center",
    "padding-top": "100px",
    [theme.breakpoints.down('md')]: {
      "width": "100%",
      "padding": "50px 20px 0px 20px",
      "box-sizing": "border-box",
    },
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
          <div className={classes.coloredContainer1}>
            <div className={classes.box1}>
              <img alt="Felcity's Avatar"
                   className={classes.avatar}
                   src="/felicity_avatar.png" />
              <h1 className={classes.h1}>Heyo! Felicity here.</h1>
              <h2 className={classes.h2}>Welcome to my little corner of the Internet.</h2>
              <p className={classes.p}>
                I’m a product designer with a background in computer science. I will graduate from NYU Tandon in May 2020 with a Bachelor’s in computer science and minors in integrated digital media and game engineering.
                <br/><br/>
                Born and raised in New York, efficiency courses through my veins. My expertise lies in enterprise systems and B2B applications. Optimizing complex systems heavy with business needs while fighting for the experience of the end users is my jam.
                <br/><br/>
                Felicity means happiness and I love product design because I want to improve people’s lives.
              </p>
            </div>
          </div>
          <div className={classes.coloredContainer2}>
            <div className={classes.box2}>
              <p className={classes.p}>
                <b>Fun facts about me:</b>
                <br/>
                Cats, cats, cats! I have a slight obsession with cats.
                <br/>
                While a game has yet to ruin one of my friendships, there has been a number of close calls.
                <br/>
                Pink is my favorite color.
                <br/>
                I am the oldest of four children.
                <br/>
                In a previous life, I might have been a bird.
                <br/>
                My horoscope is a scorpio.
                <br/>
                Of the sixteen personalities, I am a defender (ISFJ-T).
              </p>
            </div>
          </div>
          <div className={classes.coloredContainer3}>
            <div className={classes.box3}>
              <p className={classes.p}>
              You’re probably interested in what I know. These are some of the classes I’ve taken that's helped me as a designer:
              <br/>
              <b>Design and aesthetic skillz</b>
              <br/>
              Visual foundation studio
              <br/>
              UX design
              <br/>
              3D modeling
              <br/>
              Photography
              <br/><br/>
              <b>Programming</b>
              <br/>
              Web development
              <br/>
              Artificial intelligence
              <br/>
              Game programming
              <br/>
              Software engineering
              <br/>
              Object oriented programming
              <br/><br/>
              If you want to know more about my experience, check out my resume here:
              </p>
              <a className={classes.button} href="https://github.com/FelicityPictures/Resume/blob/master/Resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume time
              </a>
            </div>
          </div>
        </main>

        <Footer />

      </div>
    );
  }
}


export default withStyles(styles)(AboutMe);
