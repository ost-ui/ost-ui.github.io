import React from 'react';
import './demo.less';

const baseAddress = () => {//根据环境 及 location对象自动判断 mobile 端地址
  if (process.env.NODE_ENV === 'development') {
    return `${window.location.protocol}//${window.location.hostname}:${(Number(window.location.port) + 1) +  window.location.pathname + window.location.search}#/`
  } else {
    return `${window.location.protocol}//${window.location.hostname}${window.location.port ? ':' : ''}${window.location.port + window.location.pathname.replace('index.html', '')}mobile/index.html${window.location.search}#/`
  }
};

export default class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { address: baseAddress() };
  }

  componentWillMount() {
    const page = window.location.hash.replace(/#\/Documentation-/g, '');
    
    if(/^\$.*$/g.test(page)) return;

    this.setState({address: `${baseAddress()}${page}`})
  }

  render() {
    
    return (
      <div className="ost-demo">
        <section className="ost-demo-phone">
        <i/>
        <Header leftBtn={()=> {
          this.setState({address: baseAddress()});
          this.refs.iframe && this.refs.iframe.contentWindow.location.replace(baseAddress());
        }} />
        <div className="ost-demo-phone-iframe">
          <iframe
            ref='iframe'
            src={this.state.address}
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

class Header extends React.Component {
  
  render() {
    return (
        <header className="ost-demo-header">
          <button onClick={this.props.leftBtn} >
            <font />
          </button>
          <span> ost-ui 移动组件库 </span>
        </header>
    );
  }
}