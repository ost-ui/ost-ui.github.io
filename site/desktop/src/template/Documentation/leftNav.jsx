import React from 'react';
import './leftNav.less';

export default class LeftNav extends React.Component {

  render() {
    return (
      <div className="ost-leftNav">
      <LeftNavHeader title="介绍"/>
        <ul>
          <li>OstLoading</li>
          <li>OstMask</li>
        </ul>
      <LeftNavHeader title="组件"/>
        <ul>
          <li>OstLoading</li>
          <li>OstMask</li>
        </ul>
      </div>
    );
  }
}

class LeftNavHeader extends React.Component {
   render() {
     return (
       <div className="ost-leftNav-title">
         <h3>{this.props.title}</h3>
       </div>
     )
   }
}