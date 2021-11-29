import React from 'react';
import Toast from './toast';

export default class Toaster extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const messages = this.props.messages;
    console.log(messages);
    return (
      <div className='toaster'>
        { 
          messages.map(message => {
            return <Toast key={message.id} type={message.type}>
              {message.body}
            </Toast>
          })
        }
      </div>
    );
  }
}