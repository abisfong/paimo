import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Input from '../input';
import SearchIndexContainer from '../../search/search_index_container';
import SearchBarContainer from '../../search/search_bar_container';
import { 
  receiveTransactionType, 
  removeTransactionType 
} from '../../../actions/transaction_actions';
import AmountInput from './amount_input';
import NoteInput from './note_input';

class TransactionInputs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.removeTransactionType();
  }

  componentDidUpdate() {
    const transactionType = this.props.transactionType;
    const transaction = this.props.formState.transaction;
    const currentUser = this.props.currentUser;
    const selection = this.props.selection;
    if (this.props.transactionType) {
      transaction.payer_id = transactionType === 'payment' ? currentUser.id : selection.id;
      transaction.payee_id = transactionType === 'request' ? currentUser.id : selection.id;
      transaction.complete = transactionType === 'payment' ? true : false;
      transaction.category = transactionType;
      transaction.amount *= 100;
    }
  }

  
  
  render() {
    const update = this.props.update;
    const setTransactionType = this.props.setTransactionType;
    const history = this.props.history
    return (
      <>
        <AmountInput update={update}/>
        <SearchBarContainer/>
        <SearchIndexContainer/>
        <NoteInput update={update}/>
        <div className='form-submit'>
          <button 
            className='account-view-link transaction-link'
            onClick={() => {
              setTransactionType('payment');
            }}
          >
              Pay
          </button>
          <button 
            className='account-view-link transaction-link'
            onClick={() => {
              setTransactionType('request');
            }}
          >
              Request
          </button>
        </div>
      </>
    )
  }
}

const mapStateToProps = ({ auth, search, transaction }) => {
  return {
    transactionType: transaction.type,
    selection: search.selection,
    currentUser: auth.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTransactionType: type => dispatch(receiveTransactionType(type)),
    removeTransactionType: () => dispatch(removeTransactionType)
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransactionInputs));