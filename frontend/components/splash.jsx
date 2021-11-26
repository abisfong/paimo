import React from 'react';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <section className='splash-header'>
          <div className='container'>
            <div className='title'>
              Fast, safe, social payments
            </div>
          </div>
        </section>
      </>
    );
  }
}