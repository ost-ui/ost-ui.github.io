import React from 'react';
import './demo.less';

export default class Demo extends React.Component {

  render() {
    return (
      <div className="ost-demo">
        <section className="ost-demo-phone">
        <i/>
        <header>
          <button/>
          <span>
            ost-ui 移动组件库
          </span>
        </header>
        <div className="ost-demo-phone-iframe">
          <iframe
            src={"http://localhost:3331/#/"}
            framespacing="0"
            marginWidth="0" 
            marginHeight="0"
            frameBorder="0"/>
      </div>
         </section>
      </div>
    );
  }
}
