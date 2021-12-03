import React from 'react';
import Input from '../inputs/input';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = debounce(e => {
      this.props.search(e.target.value);

    }, 400);
  }

  render() {
    const updateField = this.props.updateField;
    const update = this.props.update;
    return (
      <Input
        id='search-bar'
        type='text'
        className='search-bar'
        onChange={this.search}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  search: input => dispatch(getSearchResults(input))
  
});

export default connect(null, mapDispatchToProps)(SearchBar);
