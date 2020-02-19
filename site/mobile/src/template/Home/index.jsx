import React from 'react';
import './index.less';
import pagesArr from '../../../../pages';

const _pagesArr = pagesArr.filter(item => !item.notComponent);

export default class Home extends React.Component {
  
  render() {
    const {history} = this.props;

    return (
      <div className="ost-home-list">
        <ul>
          {
            _pagesArr.map((ele, i) => {
             return [
                ele.title && <div key={i} className="ost-home-list-title"> <span>{ele.title}</span></div>,
                !ele.title && <li key={i} onClick={() => history.push(`/${ele.hash}`)} >
                  <span>{ele.value}</span>
                  <i/>
                </li>
              ]
            })
          }
        </ul>
      </div>
    );
  }
}

