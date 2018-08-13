import React from 'react';
import Markdown from '../../../../../libs/markdown/index'
import './content.less';

export default class Content extends React.Component {

  render() {
    return (
      <div className="ost-content">
        <Markdown mdstr={require('./testmd.md')} />
      </div>
    );
  }
}
