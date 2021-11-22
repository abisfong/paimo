import React from "react";
import { connect } from "react-redux";

export default class NavVessel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className>
        <img src="/assets/images/venmo_logo.svg" alt="venmo logo" />
      </nav>
    );
  }
}

