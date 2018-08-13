import React from 'react';
import './index.less';

export default class Home extends React.Component {

  render() {
    return (
      <div className="ost-home-list">
        <ul>
          <li>
            <span>OstLoading</span>
            <i/>
          </li>
          <li>
            <span>OstMask</span>
            <i/>
          </li>
        </ul>
      </div>
    );
  }
}

