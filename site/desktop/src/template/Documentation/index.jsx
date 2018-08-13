import React from 'react';
import LeftNav from './leftNav';
import Content from './content';
import Demo from './demo';
import './index.less';

export default class Documentation extends React.Component {

  render() {
    return (
      <div className="ost-documentation">
        <LeftNav/>
        <Content/>
        <Demo/>
      </div>
    );
  }
}