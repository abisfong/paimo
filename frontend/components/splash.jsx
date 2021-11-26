import React from 'react';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <section className='splash-header'>
          <div className='content-container'>
            <h1 className='title'>
              Fast, safe, social payments
            </h1>
            <p className='description'>
              Pay. Get paid. Shop. Share. Join more than 76 million people 
              who use the Paimo app.
            </p>
          </div>
          <img className="image" alt="" />
        </section>
      </>
    );
  }
}