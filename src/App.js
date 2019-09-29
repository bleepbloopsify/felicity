import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'typeface-itim';
import 'typeface-karla';
import 'typeface-montserrat';
import 'typeface-muli';
import AboutMe from './about';
import './App.css';
import LandingPage from './LandingPage';
import CPACS from './projects/CPACS';
import Packages from './projects/Packages';
import Scribble from './projects/Scribble';
import ScrollToTopRouter from './ScrollToTopRouter';

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
        <ScrollToTopRouter exact path="/" component={LandingPage} />
        <ScrollToTopRouter path="/work" component={null} />
        <ScrollToTopRouter path="/about" component={AboutMe} />
        <ScrollToTopRouter path={CPACS.PROJECT_LINK} component={CPACS} />
        <ScrollToTopRouter path={Packages.PROJECT_LINK} component={Packages} />
        <ScrollToTopRouter path={Scribble.PROJECT_LINK} component={Scribble} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
