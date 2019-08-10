import { Typography } from '@material-ui/core';
import React, { Component } from 'react';

export default class Understand extends Component {

  render() {
    return (
      <div>
        <Typography variant="subtitle1" gutterBottom>
          Understand
        </Typography>
        <Typography gutterBottom color="error">
          <b>
            TODO
          </b>
        </Typography>

        <Typography variant="body1" style={{ paddingBottom: "2em" }}>
          To understand the problem, I visited several package rooms the new system will be integrated into. Package room employees currently log packages with on sheets of paper kept in a binder. To inform residents that their packages have arrived, a slip is put into a resident’s mailbox.
          <br /><br />
          After the binder has been filled up and packages have been delivered, the papers containing records of the packages were discarded. With the rise of e-commerce, more packages are being delivered every day.
        </Typography>
        <div style={{
          "height": "50em",
        }}>
          <img alt=""
            src="/Packages/STOREROOM.jpg"
            style={{
              maxWidth: "20em",
              "position": "relative",
              "top": "4em",
              "left": "7em",
            }} />
          <img alt=""
            src="/Packages/LABELS.jpg"
            style={{
              maxWidth: "20em",
              "position": "relative",
              "left": "8em",
              "transform": "rotate(90deg)",
            }} />
          <img alt=""
            src="/Packages/DOORWAY.jpg"
            style={{
              maxWidth: "20em",
              "position": "relative",
              "left": "5em",
              "top": "9em",
              "transform": "rotate(90deg)",
            }} />
          <img alt=""
            src="/Packages/MAIL_LOG.jpg"
            style={{
              maxWidth: "25em",
              "position": "relative",
              "top": "6em",
              "left": "19em",
            }} />
        </div>
      </div>
    );
  }
}