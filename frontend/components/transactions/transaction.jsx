import React from 'react';
import { connect } from 'react-redux';

class Transaction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const transaction = this.props.transaction;
    const userId = parseInt(this.props.userId);
    const users = this.props.users;
    return (
      <div className='transaction'>
        <header className='header'>
          {
            transaction.payer_id === userId ?  
              `You paid ${users[transaction.payee_id].name}` :
              `You charged ${users[transaction.payer_id].name}`
          }
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ entities }) => {
  return {
    users: entities.users
  }
}

export default connect(mapStateToProps)(Transaction);