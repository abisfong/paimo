import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from './input';
import debounce from '../../util/debounce';
import { getSearchResults } from '../../actions/search_actions';

class TransactionInputs extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.state.currentUser;
    this.props.state.currentUser = undefined;
    this.search = debounce(inputEl => this.props.search(inputEl.value), 400);
  }

  updateUserDetails(transactionType) {
    const transaction = this.props.state.transaction;
    const transactee = this.props.state.transactee;
    const currentUser = this.currentUser;

    return () => {
      if (transactionType === 'payment') {
        transaction.payer_id = currentUser.id;
        transaction.payee_id = 2;
      } else {
        transaction.payer_id = 2;
        transaction.payee_id = currentUser.id;
      }
      transactee.id = 2;
      transactee.name = 'Transactee Name';
    }
  }
  
  render() {
    const searchResults = this.props.searchResults || [];
    return (
      <>
        <Input
          id='amount'
          type='text'
          className='amount'
          onChange={this.props.update(['transaction', 'amount'], inputEl => {
            // console.log(inputEl)
            // const inputLength = inputEl.value.length;
            // const width = inputEl.offsetWidth;
            // inputEl.style.width = width * inputLength;
          })}
        />
        <Input
          id='to'
          type='text'
          className='to'
          onChange={this.props.update(['transaction', 'to'], this.search)}
        />
        <ul className='transaction-form search-results'>
          {
            searchResults.map(result => (
              <li>
                {result.name}
              </li>
            ))
          }
        </ul>
        <Input
          id='note'
          type='text'
          className='note'
          onChange={this.props.update(['transaction', 'note'])}
        />
        <div className='transaction-form form-submit'>
          {/* <Link 
            to='/account'
          > */}
            <button
              onClick={e => {
                this.updateUserDetails('payment')(e);
              }}
            >
                Pay
            </button>
          {/* </Link> */}
          {/* <Link 
            to='/account'
          > */}
            <button onClick={this.updateUserDetails('request')}>
                Request
            </button>
          {/* </Link> */}
        </div>
      </>
    )
  }
}

const mapStateToProps = ({ search }) => ({
  searchResults: search
});

const mapDispatchToProps = dispatch => ({
  search: input => dispatch(getSearchResults(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionInputs);