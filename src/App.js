import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'typeface-itim';
import 'typeface-karla';
import 'typeface-muli';
import 'typeface-montserrat';


import './App.css';

import LandingPage from './LandingPage';
import AboutMe from './about';
import CPACS from './projects/CPACS';
import Packages from './projects/Packages';
import Scribble from './projects/Scribble';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#D772AF' },
    secondary: { main: '#333333' },
  },
  typography: {
    fontFamily: "Muli",
    useNextVariants: true,
    h1: {
      'font-family': 'Itim',
      'font-style': 'normal',
      'font-weight': 'normal',
      'font-size': '36px',
    },
    h2: {
      'font-family': 'Karla',
      'font-style': 'normal',
      'font-weight': 'bold',
      'font-size': '18px',
    },
    body2: {
      "font-family": "Muli",
      "font-style": "normal",
      "font-weight": "normal",
      "font-size": "12px",
      "line-height": "15px",
      "text-align": "center",
    },
    subtitle1: {
      "font-family": "Montserrat",
      "font-style": "normal",
      "font-weight": "500",
      "font-size": "12px",
      "line-height": "15px",
    }
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/work" component={null} />
        <Route path="/about" component={AboutMe} />
        <Route path={CPACS.PROJECT_LINK} component={CPACS} />
        <Route path={Packages.PROJECT_LINK} component={Packages} />
        <Route path={Scribble.PROJECT_LINK} component={Scribble} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
