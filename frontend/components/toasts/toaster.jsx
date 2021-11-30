import React from 'react';
import Toast from './toast';

export default class Toaster extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const messages = this.props.messages;
    const closeAction = this.props.closeAction;
    const path = this.props.location.pathname;
    console.log(path);
    return (
      <div className={`toaster-container ${ /\/account*/.test(path) ? 'main-view' : '' }`}>
        <div className='toaster'>
          { 
            messages.map(message => {
              return <Toast 
                key={message.id} 
                type={message.type}
                closeAction={closeAction(message.type, message.id)}
              >
                {message.body}
              </Toast>
            })
          }
        </div>
      </div>
    );
  }
}