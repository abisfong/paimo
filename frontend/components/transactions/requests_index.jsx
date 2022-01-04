import React from "react";
import TransactionsIndex from "./transactions_index";

export default class RequestsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1 className='requests-header'></h1>
        <TransactionsIndex 
          { ...this.props }
        />
      </>
    )
  }
}