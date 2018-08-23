import React from 'react';
import './index.less';
import * as component from '../../../../../components';

export default class Home extends React.Component {
  
  render() {
    const {history} = this.props;

    return (
      <div className="ost-home-list">
        <header> ost-ui 移动组件库 </header>
        <ul>
          {
            Object.keys(component).map((ele, i) => 
              <li key={i} onClick={() => history.push(`/${ele}`) } >
                <span>{ele}</span>
                <i/>
              </li> 
            )
          }
        </ul>
      </div>
    );
  }
}

