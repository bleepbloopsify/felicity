import { Typography } from '@material-ui/core';
import React, { Component } from 'react';

export default class Understand extends Component {

  render() {
    return (
      <div>
        <Typography variant="subtitle1" gutterBottom>
          Understand
        </Typography>
        <Typography gutterBottom>
          <b>
            It was a multi-facetted job.
          </b>
        </Typography>

        <Typography variant="body1" style={{ paddingBottom: "2em" }}>
          NYU’s Office of Construction Management asked NYU’s Operations Technology Services and Systems to redesign CPACS, as it was outdated. This involved making the application accessible, improving its usability, and adding/ removing features to improve the lives of its users.
        </Typography>

        <Typography gutterBottom>
          <b>
            We needed to understand a system we have never seen before and a lingo we are barely familiar with.
          </b>
        </Typography>

        <Typography variant="body1">
          None of the designers have used CPACS before, so we first set out to experience the system firsthand.
          Many CPACS users first need to go through official training sessions to learn the different document workflows that happen in the system before they are free to use the system in their everyday work. We sat in on these trainings, learning alongside other first time CPACS users. As the user support personnel walked us through the system, we took notes on any flaws or hiccups we observed in the system or strange occurrences in the workflows that the user support personnel pointed out. Afterwards, we read through the training manuals, further familiarizing ourselves with the document workflows and used the information in the manuals to ensure that the new CPACS continued to enable its users to do what they currently do, except with a smoother experience.
        </Typography>
      </div>
    );
  }
}