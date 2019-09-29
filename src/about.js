import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Navbar from './LandingPage/Navbar';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


const styles = theme => ({
  root: {
    "width": "100%",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "flex-start",
    "align-items": "center",
  },
  content:{
    width: "940px",
  },
  about__photo:{
    width: "100%",
    height: "auto",
    "margin-bottom": "50px",
  },
  button: {
    "all": "unset",
    "font-family": "'Muli', sans-serif",
    "font-weight": "bold",
    "font-size": "12px",
    "background-color": "#880A56",
    "color": "white",
    "text-align": "center",
    "width": "140px",
    "padding": "8px 40px",
    "border-radius": "50px",
    "cursor": "pointer",
  },
  footer: {
    width: "100%",
    height: "10em",
    "background-color": "#F5FDFF",
    "padding": "70px 50px",
    display: "flex",
    "flex-direction": "row",
    "justify-content": "space-between",
    "align-items": "center",
    "box-sizing": "border-box",
    "margin-top": "80px",
  },
  footer__icon: {
    "margin-left": "30px",
    width: "26px",
    height: "auto",
  }
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
          <img src="/my_photo.jpg" className={classes.about__photo}/>
          <Typography gutterBottom>
          <b>Hello! I’m Felicity…</b>
          <br/>
          <br/>
          I am currently a student studying at New York University Tandon School
          of Engineering (Dean's List, baby!). I will be graduating in May 2020.
          I discovered design while working as a student UX/UI designer for NYU
          IT OTSS. I applied for the job while not really understanding what it meant.
          It just sounded like a cool job. At the time, I was still looking for
          software engineering jobs. However, after working there for a while
          and learning more about the field, I realized this was exactly what I
          was looking for when I was pursuing front-end developemnt jobs. I had
          it wrong all along! Oh wells. I still love coding and if anything,
          it helps bridge the gap between designers and developers just a lil
          bit.
          <br/>
          <br/>
          When I'm not working, I can oftentimes be found crying over videos of
          cats on Instagram or Facebook. If not, I might be playing videogames
          or cooking. I self identify as a crazy cat lady but unfortunately,
          I do not have one. If I did, though, I would definitely try to take
          it out on walks. I try to avoid animal shelters so that I don't
          impulsively adopt every cat in there. I've been to animal shelters a
          couple of times. Each time I visited, I have gotten my heart thoroughly
          broken because I decided to get emotionally attached to a cat.
          <br/>
          <br/>
          Okay. Enough about cats... for now...
          <br/>
          <br/>
          <b>
          Less cat obsession, more about my professional background?
          </b>
          </Typography>
          <a className={classes.button} href="https://github.com/FelicityPictures/Resume/blob/master/Resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume time
          </a>
        </main>

        <footer className={classes.footer}>
          <Typography variant="h1" color="primary">
            felicity.ng@nyu.edu
          </Typography>
          <div>
            <a href="https://github.com/felicitypictures" target="_blank" rel="noopener noreferrer">
              <img alt="github icon" src="/github_icon.png" className={classes.footer__icon}></img>
            </a>

            <a href="https://www.linkedin.com/in/felicity-ng/" target="_blank" rel="noopener noreferrer">
              <img alt="linkedin icon" src="/linkedin_icon.png" className={classes.footer__icon}></img>
            </a>
          </div>
        </footer>

      </div>
    );
  }
}


export default withStyles(styles)(AboutMe);
