import React from 'react';
import { connect } from 'react-redux';
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
      transaction.amount *= 100;
    }
  }
  
  render() {
    const update = this.props.update;
    const setTransactionType = this.props.setTransactionType;
    return (
      <>
        <Input
          id='amount'
          type='text'
          value='0'
          label='$'
          className='amount'
          placeholder='0'
          onChange={update(['transaction', 'amount'], inputEl => {
            const inputLength = inputEl.value.length;
            console.log(inputLength);
            if (inputLength < 9)
              inputEl.style.width = `${33 * inputLength}px`;
            else
              inputEl.value = inputEl.value.substring(0, 8);
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
          <button onClick={ () => setTransactionType('payment') }>
              Pay
          </button>
          <button onClick={ () => setTransactionType('request') }>
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

export default connect(mapStateToProps, mapDispatchToProps)(TransactionInputs);