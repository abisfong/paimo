import React from 'react';
import Toast from './toast';

export default class Toaster extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const messages = this.props.messages;
    const closeAction = this.props.closeAction;
    console.log(messages);
    return (
      <div className='toaster-container'>
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