import React from 'react';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
  }

  updateTabNumber(tabNumber) {
    return e => {
      if (this.props.currentTabNumber != tabNumber)
        this.props.setTabNumber(tabNumber);
    }
  }

  render() {
    const className = this.props.className;
    const firstTabContent = this.props.firstTabContent;
    const secondTabContent = this.props.secondTabContent;
    return (
      <div className={className}>
        <div className='slider'></div>
        <div 
          onClick={this.updateTabNumber(0)}
          className='tab'
        >
          { firstTabContent }
        </div>
        <div 
          onClick={this.updateTabNumber(1)}
          className='tab'
        >
          { secondTabContent }
        </div>
      </div>
    )
  }
}