import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Input from './input';
import SearchIndex from '../search/search_index';
import SearchBar from '../search/search_bar';
import { 
  receiveTransactionType, 
  removeTransactionType 
} from '../../actions/transaction_actions';

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
        <Input
          id='amount' 
          type='text' 
          label='$' 
          className='amount' 
          placeholder='0'
          onChange={update(['transaction', 'amount'], inputEl => {
            const inputLength = inputEl.value.length;
            if (inputLength <= 9)
              inputEl.style.width = `${33 * inputLength}px`;
            else
              inputEl.value = inputEl.value.substring(0, 9);
          })}
          onFocus={ e => {
            const inputContainer = e.target.parentElement;
            inputContainer.classList.add('amount-focus');
          }}
          onBlur={ e => {
            const inputContainer = e.target.parentElement;
            inputContainer.classList.remove('amount-focus');
          }}
        />
        <SearchBar/>
        <SearchIndex/>
        <Input
          id='note'
          type='text'
          label='Note'
          className='note'
          onChange={update(['transaction', 'note'])}
          onFocus={e => {
            const inputContainer = e.target.parentElement;
            inputContainer.classList.add('note-focus');
          }}
          onBlur={e => {
            const inputContainer = e.target.parentElement;
            inputContainer.classList.remove('note-focus');
          }}
        />
        <div className='form-submit'>
          <button 
            className='account-view-link transaction-link'
            onClick={ () => {
              setTransactionType('payment');
            }}
          >
              Pay
          </button>
          <button 
            className='account-view-link transaction-link'
            onClick={ () => {
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