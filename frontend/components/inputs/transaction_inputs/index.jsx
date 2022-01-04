import React from 'react';
import Search from '../../search';
import AmountInput from './amount_input';
import NoteInput from './note_input';

export default class TransactionInputs extends React.Component {
  constructor(props) {
    super(props);
  }

  updateFormInput({ category }) {
    const formState = this.props.formState;
    const selections = this.props.selections;

    formState.category = category;
    formState.selections = this.getSelections();
    console.log(formState.selections);
  }

  getSelections() {
    const itr = this.props.selections.values();
    const selections = {};

    for (const selection of itr)
      selections[selection.id] = selection;
    return selections;
  }

  render() {
    const update = this.props.update;
    const history = this.props.history
    return (
      <>
        <AmountInput update={update}/>
        <Search/>
        <NoteInput update={update}/>
        <div className='form-submit'>
          <button 
            className='account-view-link transaction-link'
            onClick={() => {
              this.updateFormInput({category: 'payment'});
            }}
          >
              Pay
          </button>
          <button 
            className='account-view-link transaction-link'
            onClick={() => {
              this.updateFormInput({category: 'request'});
            }}
          >
              Request
          </button>
        </div>
      </>
    )
  }
}