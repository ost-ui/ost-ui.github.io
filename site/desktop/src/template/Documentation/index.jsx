import React from 'react';
import LeftNav from './leftNav';
import Content from './content';
import Demo from './demo';
import './index.less';

export default class Documentation extends React.Component {

  render() {
    const {history} = this.props;
    
    return (
      <div className="ost-documentation">
        <div className="ost-documentation-left-main">
          <LeftNav history={history} />
        </div>
        <div className="ost-documentation-right-main">
          <Content/>
          <Demo/>
        </div>
      </div>
    );
  }
}