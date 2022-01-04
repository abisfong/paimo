import React from 'react';

export default class FeedTabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const className = this.props.className;
    const firstTabContent = this.props.firstTabContent;
    const secondTabContent = this.props.secondTabContent;
    return (
      <div className={className}>
        <div className='slider'></div>
        <div>{ firstTabContent }</div>
        <div>{ secondTabContent }</div>
      </div>
    )
  }
}