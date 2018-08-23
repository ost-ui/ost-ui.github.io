import React from 'react';
import classnames from 'classnames';
import './leftNav.less';
import pagesArr from '../pages';


export default class LeftNav extends React.Component {

  render() {
    const {history} = this.props;
    
    return (
      <div className="ost-leftNav">
        <ul>
        {
           pagesArr.map((ele, i) => [
            i === 0 && <LeftNavHeader key={`t-${i}`} title="介绍"/>,
            i === 2 && <LeftNavHeader key={`t-${i}`} title="组件"/>,
            <li 
              className={classnames({'ost-leftNav-active': window.location.hash === `#/Documentation-${ele.hash}`})}
              key={`c-${i}`}
              onClick={() => {
                 if (window.location.hash === `#/Documentation-${ele.hash}`) return;
                 history.push(`/Documentation-${ele.hash}`)
              }} >
                 {ele.value}
            </li> 
          ]
         )
        }
        </ul>
      </div>
    );
  }
}

class LeftNavHeader extends React.Component {
   render() {
     return (
       <span className="ost-leftNav-title">
         <h3>{this.props.title}</h3>
       </span>
     )
   }
}