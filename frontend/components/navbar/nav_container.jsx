import React from "react";

export default class NavContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar">
        <img src="/assets/images/venmo_logo.svg" alt="venmo logo" />
      </nav>
    );
  }
}

