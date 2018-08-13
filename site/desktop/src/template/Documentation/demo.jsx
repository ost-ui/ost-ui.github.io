import React from 'react';
import './demo.less';

export default class Demo extends React.Component {

  render() {
    return (
      <div className="ost-demo">
        <div className="ost-demo-phone">
        <i/>
        <header>
          <button/>
          <span>
            ost-ui 移动组件库
          </span>
        </header>
        <iframe
         src={"http://localhost:3331/#/"} 
         frameBorder="0"/>
         </div>
      </div>
    );
  }
}
