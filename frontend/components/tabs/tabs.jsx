import React from 'react';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setTabNumber(0);
  }

  updateTabNumber(tabNumber) {
    return e => {
      if (this.props.currentTabNumber != tabNumber)
        this.props.setTabNumber(tabNumber);
    }
  }

  render() {
    const className = this.props.className;
    const currentTabNumber = this.props.currentTabNumber;
    const firstTabContent = this.props.firstTabContent;
    const secondTabContent = this.props.secondTabContent;
    return (
      <div className={className}>
        <div className='tabs-container'>
          <div 
            onClick={this.updateTabNumber(0)}
            className={`tab ${currentTabNumber === 0 ? 'selected' : ''}`}
          >
            { firstTabContent }
          </div>
          <div 
            onClick={this.updateTabNumber(1)}
            className={`tab ${currentTabNumber === 1 ? 'selected' : ''}`}
          >
            { secondTabContent }
          </div>
        </div>
        <div 
          className={`slider-container ${currentTabNumber === 0 ? '' : 'slide'}`}
        >
          <div 
            className='slider'
          >
          </div>
        </div>
      </div>
    )
  }
}